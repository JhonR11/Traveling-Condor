import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';
import { useEffect } from 'react';
import L from 'leaflet';
import { useMap } from 'react-leaflet';

const MapGeocoder = () => {
  const map = useMap();

  useEffect(() => {
    const geocoder = L.Control.geocoder({
      defaultMarkGeocode: false,
    }).addTo(map);

    const manejadorGeocode = (e) => {
      const latlng = e.geocode.center;
      L.marker(latlng)
        .addTo(map)
        .bindPopup(e.geocode.name)
        .openPopup();
      map.fitBounds(e.geocode.bbox);
    };

    geocoder.on('markgeocode', manejadorGeocode);

    return () => {
      geocoder.off('markgeocode', manejadorGeocode);
      map.removeControl(geocoder);
    };
  }, []);

  return null;
};

export default MapGeocoder;
