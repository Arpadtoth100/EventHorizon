import { useState, useCallback, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  MarkerClusterer,
} from '@react-google-maps/api';

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';
import '@reach/combobox/styles.css';

import mapStyles from './mapStyles';

const libs = ['places'];

const mapContainerStyle = {
  width: '35vw',
  height: '80vh',
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

function Map({ eventList }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCQdxI7flTlfWCB0l-vdZPjY3J0P5jwRQk',
    libraries: libs,
  });

  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [center, setCenter] = useState({ lat: 47.497913, lng: 19.040236 });

  const createMarkers = useCallback(() => {
    setMarkers([]);
    eventList?.map((event) => {
      event[1].coord &&
        setMarkers((prev) => [
          ...prev,
          {
            lat: event[1].coord.lat,
            lng: event[1].coord.lng,
            time: new Date(),
            title: event[1].title,
            location: event[1].location,
            date: event[1].date_from,
            key: event[0],
          },
        ]);
    });
  }, [eventList]);

  const navTo = useNavigate();

  useEffect(() => {
    createMarkers();
  }, [eventList]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => null
    );
  }, []);

  const clickHandler = useCallback((key) => {
    navTo(`/eventpage/${key}`);
  }, []);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  if (loadError) return 'Error Loading maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <div>
      <Search panTo={panTo} />
      <Locate
        panTo={panTo}
        onClick={() => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              console.log(position);
            },
            () => null
          );
        }}
      />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={11}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
        <MarkerClusterer>
          {(clusterer) =>
            markers.map((marker, i) => (
              <Marker
                key={marker.lat * i}
                position={{ lat: marker.lat, lng: marker.lng }}
                icon={{
                  url: './sunrise.png',
                  scaledSize: new window.google.maps.Size(30, 30),
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(15, 15),
                }}
                onClick={() => {
                  setSelected(marker);
                }}
                clusterer={clusterer}
              />
            ))
          }
        </MarkerClusterer>
        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>{selected.title}</h2>
              <p>Location: {selected.location}</p>
              <p>Date of event: {selected.date}</p>
              <br />
              <div className="infoBox_link">
                <h4
                  onClick={() => {
                    clickHandler(selected.key);
                  }}
                >
                  Jump to the Event!
                </h4>
              </div>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}

const Locate = ({ panTo }) => {
  return (
    <button
      id="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <img src="./compass.png" alt="compass" />
    </button>
  );
};

const Search = ({ panTo }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOption: {
      location: { lat: () => 47.497913, lng: () => 19.040236 },
      radius: 200 * 1000,
    },
  });
  return (
    <div className="combo_search">
      <Combobox
        onSelect={async (address) => {
          setValue(address, false);
          clearSuggestions();
          try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            panTo({ lat, lng });
          } catch (error) {
            console.log('error, ', error);
          }
        }}
      >
        <ComboboxInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          disabled={!ready}
          placeholder="Enter an address"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === 'OK' &&
              data.map(({ id, description }, idx) => (
                <ComboboxOption key={idx} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
};

export default Map;
