import React, { useState } from 'react';
import MUIDataTable from "mui-datatables";
import {createTheme, ThemeProvider} from '@mui/material/styles'
import { useEffect } from "react";



const TablaUi = () => {


const[users,setUsers]=useState([])


const columns = [{
    name:'name',
    label:"Nombre :D",
},
{
    name:'age',
    label:"Recomendado",
},
{
    name:"image",
    label:"imagen :D",
    options:{
        customBodyRender:(value)=> <img src={value} alt="pic" className='w-12 h-12 rounded-full'/>
    }
}


];

useEffect(()=>{
    fetch('https://dummyjson.com/users')
    .then((res) => res.json())
    .then((data)=>{
        let local = data?.users?.map((user)=>({
            ...user,
            name:user?.firstName + " " + user?.lastname,
        }));
        
        setUsers(local);

    });
},[])

const getMuiTheme=()=>
    createTheme({
        typography:{
            fontFamily: "Roboto",
        },
        palette:{

        },
        components:{
            MuiTableCell:{
                styleOverrides:{
                    
                }
            },
        },
    
    });

const options = {
  filterType: 'checkbox',
  pagination: false,
  print: false,
  responsive: 'scrollMaxHeight',
  download:false,
  filter:false,
  viewColumns:false,
  selectableRows:true,
  resizableColumns:true,
  elevation:0,
  selectableRowsHideCheckboxes:true,
  selectableRowsOnClick:true,
 
};
    return (
        <ThemeProvider theme={getMuiTheme}> 
        
        <MUIDataTable
        title={"Puntos de Interes"}
        data={users}
        columns={columns}
        options={options}
      /></ThemeProvider>
       
    );
  
}
export default TablaUi;