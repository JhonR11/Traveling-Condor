import { useMap } from 'react-leaflet';
import React, { useEffect, useContext } from "react";
import L from 'leaflet';
import { GeolocationContext } from '../Context/GeolocationContext';

const CrearMarcador = ({ addPuntos }) => {
    const map = useMap();
    const { Geolocation, setGeolocation } = useContext(GeolocationContext);

    useEffect(() => {
        if (Geolocation) {
            L.marker([Geolocation.lat, Geolocation.lng]).addTo(map);
        }
        
        const manejadorClick = (e) => {
            const nuevoMarcador = [e.latlng.lat, e.latlng.lng];
            L.marker(nuevoMarcador).addTo(map);
            addPuntos(nuevoMarcador);
            if (!Geolocation) {
                setGeolocation({ lat: e.latlng.lat, lng: e.latlng.lng });
            }
        };

        map.on('click', manejadorClick);

        return () => {
            map.off('click', manejadorClick);
        };
    }, [map, Geolocation, addPuntos, setGeolocation]);

    return null;
};

export default CrearMarcador;
