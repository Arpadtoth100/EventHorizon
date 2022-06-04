import { useState, useCallback, useRef } from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
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
  width: '50vw',
  height: '95vh',
  borderRadius: '1%'
};
const center = {
  lat: 47.497913,
  lng: 19.040236,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

function MapCreate({ eventData, marker, onMapClick }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCQdxI7flTlfWCB0l-vdZPjY3J0P5jwRQk',
    libraries: libs,
  });

  const [selected, setSelected] = useState(null);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(16);
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
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {marker && (
          <Marker
            key={marker?.time.toISOString()}
            position={{ lat: marker?.coord.lat, lng: marker?.coord.lng }}
            icon={{
              url: './sunrise.png',
              scaledSize: new window.google.maps.Size(30, 30),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
            }}
            onClick={() => {
              setSelected(marker);
              console.log(marker.coord);
            }}
          />
        )}
        {selected ? (
          <InfoWindow
            position={{ lat: selected.coord.lat, lng: selected.coord.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h3>{eventData && eventData.title}</h3>
              <p>Location: {eventData && eventData.location}</p>
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
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
};

export default MapCreate;
