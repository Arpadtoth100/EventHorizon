import { useState, useCallback, useRef, useEffect } from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';

import mapStyles from './mapStyles';

const libs = ['places'];

const mapContainerStyle = {
  width: '50vw',
  height: '50vh',
};

const options = {
  styles: mapStyles,
  zoomControl: true,
};

function SimpleMap({ eventData, title }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCQdxI7flTlfWCB0l-vdZPjY3J0P5jwRQk',
    libraries: libs,
  });

  const [isData, setIsData] = useState();
  const [marker, setMarker] = useState([]);
  const [selected, setSelected] = useState(null);
  const [center, setCenter] = useState();

  useEffect(() => {
    if (!eventData?.coord?.lat) {
      setIsData(false);
    } else {
      setIsData(true);
      setMarker({
        lat: parseFloat(eventData?.coord.lat),
        lng: Number(eventData?.coord.lng),
      });
      setCenter(marker);
    }
  }, [eventData?.coord, isData]);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return 'Error Loading maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
        <Marker
          position={marker}
          onClick={() => {
            setSelected(marker);
          }}
        />
        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>{eventData.title && eventData.title}</h2>
              <p>{eventData.location && eventData.location}</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}

export default SimpleMap;
