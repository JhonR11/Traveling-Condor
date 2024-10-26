import React, { useEffect, useContext, useState } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import axios from 'axios';
import { Ruta } from '../../Models/Ruta';
import iconAdd from '../../Assets/icons8-marker-40.png';
import { UserContext } from '../Context/UserContext';
import Alerta from "../Vista/Alerta";

export default function BotonMapa({ addPuntos, puntos }) {
  const map = useMap();
  const API_POST = 'http://localhost:5285/api/Rutas/agregar';
  const { user } = useContext(UserContext);

  const [alerta, setAlerta] = useState({ show: false, titulo: '', texto0: '', texto1: '', texto2: '' });

  let IconB = L.icon({
    iconUrl: iconAdd,
    iconSize: [25, 25],
  });

  useEffect(() => {
    var customControl = L.Control.extend({
      options: {
        position: 'topright'
      },
      onAdd: function (map) {
        var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
        container.style.backgroundColor = 'white';
        container.style.backgroundImage = `url(${iconAdd})`;
        container.style.backgroundSize = "30px 30px";
        container.style.width = '30px';
        container.style.height = '30px';
        container.style.borderRadius = '50%';

        L.DomEvent.disableClickPropagation(container);

        container.onclick = function (e) {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
              var nuevoPunto = [position.coords.latitude, position.coords.longitude];
              addPuntos(nuevoPunto);

              const puntosRuta = puntos.map(punto => ({
                latitud: punto[0],
                longitud: punto[1]
              }));
              const rutaAgregar = new Ruta("nombrequesea", puntosRuta, 1);

              axios.post(API_POST, rutaAgregar, {
                headers: {
                  'Content-Type': 'application/json'
                }
              })
                .then(res => {
                  if (res.status === 200) {
                    setAlerta({
                      show: true,
                      titulo: "MI LLAVE",
                      texto0: "TU RUTA",
                      texto1: "ACABA DE",
                      texto2: "Guardarse con éxito!"
                    });
                    console.log('Ruta agregada exitosamente a la base de datos');
                  }
                })
                .catch(error => {
                  setAlerta({
                    show: true,
                    titulo: "MI LLAVE",
                    texto0: "TU RUTA",
                    texto1: "NO SE PUDO",
                    texto2: "Guardar!"
                  });
                  console.error('Error al agregar la ruta a la base de datos:', error);
                });
            });
          }
        }

        return container;
      }
    });

    map.addControl(new customControl());

  }, [map, addPuntos, puntos]);

  return (
    <>
      {alerta.show && (
        <Alerta 
          titulo={alerta.titulo}
          texto0={alerta.texto0}
          texto1={alerta.texto1}
          texto2={alerta.texto2}
        />
      )}
    </>
  );
}
