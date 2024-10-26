import { useEffect, useRef } from "react";
import L from 'leaflet';
import 'leaflet-routing-machine';
import { useMap } from "react-leaflet";

const TrazarRuta = ({ puntos }) => {
    const map = useMap();
    const controlRutaRef = useRef(null);

    useEffect(() => {
        if (puntos.length > 1) {
            if (controlRutaRef.current) {
                controlRutaRef.current.remove();
            }

            controlRutaRef.current = L.Routing.control({
                waypoints: puntos.map(punto => L.latLng(punto[0], punto[1])),
                lineOptions: {
                    styles: [
                        {
                            color: 'blue',
                            weight: 4,
                            opacity: 0.7,
                        },
                    ],
                },
                routeWhileDragging: false,
                addWaypoints: false,
                draggableWaypoints: true,
                fitSelectedRoutes: true,
                showAlternatives: false,
                collapsible: true,
                show: false
            }).addTo(map);

            return () => {
                if (controlRutaRef.current) {
                    controlRutaRef.current.remove();
                    controlRutaRef.current = null;
                }
            };
        }
    }, [map, puntos]);

    return null;
};

export default TrazarRuta;
