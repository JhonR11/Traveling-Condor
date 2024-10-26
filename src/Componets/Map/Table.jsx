import React, { useContext, useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { Ruta } from '../../Models/Ruta';
import  {UserContext}  from '../Context/UserContext';
import IconDel from '../../Assets/icons8-delete-100.png';
import IconUpd from '../../Assets/icons8-edit-64.png';
import { json } from 'react-router-dom';

const Tablita = () => {
const API = 'http://localhost:5285/api/Rutas/rutasUsuario';
const API_eliminar = 'http://localhost:5285/api/Rutas/Eliminar';
const API_editar = 'http://localhost:5285/api/Rutas/editar';

    const [data, setData] = useState([])
    const {user} = useContext(UserContext);

   

    const eliminarRuta = async (RutaId) => {
        await axios.delete(`${API_eliminar}?id=${RutaId}`)
        .then(res => {
         if(res.status === 204){
           console.log('eliminado');
         }
        })
      }


    const editarRuta = async (RutaId) => {
      const rutaEditar = new Ruta("alo",[{ latitud: 202020, longitud: 1000 }],1);
         await axios.put(`${API_editar}?idRuta=${RutaId}`,JSON.stringify(rutaEditar), { headers: {'Content-Type': 'application/json' }
        })
         .then(res => {
          if(res.status === 200){
            console.log('editado primo');
          }
         })
      }

      const manejadorPuntos = async () => {
     await axios.post(API, {"IdUsuario": 1})
     .then(res => {
      if(res.status === 200){
        console.log(res.data);
        const rutas = res.data.map(ruta => new Ruta(ruta.id, ruta.nombre, ruta.puntosRutas, ruta.usuarioId));
        setData(rutas);
      }
     })
  }

  useEffect(() => {
    manejadorPuntos();
  },[]);

  const columns = [
    {
      name: 'Name',
      selector: row => row.puntosRutas
    },
    {
      cell: (row) => (
          <>
              <button onClick={() => eliminarRuta(row.nombre)}>Eliminar</button>
              <button onClick={() => editarRuta(row.nombre)}>Editar</button>
          </>
      ),
  },
  ];


  return (
    <div className='border'>
      <h2>My DataTable</h2>
      <DataTable
        columns={columns}
        data={data}
      />
    </div>
  );
}

export default Tablita;

