import { useEffect } from "react"
import L from 'leaflet';
import { useMap } from "react-leaflet";
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import iconURL from '../../Assets/icons8-marker-40.png';

const DrawRutas = ({addPuntos}) => {

    const map = useMap();

    let DefaultIcon = L.icon({
      iconUrl: iconURL,
      iconSize: [25, 25],
    });
    
      var marker = L.marker([10.472524192484642, -73.25816361835409],{icon: DefaultIcon}).addTo(map);
      
      useEffect(() => {
        const manejadorClick = (e)  => {
           var NuevoPunto = [e.latlng.lat, e.latlng.lng];
            L.marker(NuevoPunto, {icon:DefaultIcon}).addTo(map);
            addPuntos(NuevoPunto); 
          
   
            L.Routing.control({
              waypoints: [
                L.latLng(10.472524192484642, -73.25816361835409),
                L.latLng(e.latlng.lat, e.latlng.lng),
              ],
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
              geocoder: L.Control.Geocoder.nominatim(),
              addWaypoints: false,
              draggableWaypoints: true,
              fitSelectedRoutes: true,
              showAlternatives:false,
            })
            .on('routesfound', function (e) {
              e.routes[0].coordinates.forEach((r, i) => {
                setTimeout(() => {
                  marker.setLatLng([r.lat, r.lng]);
                }, 100 * i);
              });
            })
            .addTo(map);
       };

          map.on("click", manejadorClick);

          return () => {
            map.off("click", manejadorClick);
      };
      }, [addPuntos]);
};

export default DrawRutas;

