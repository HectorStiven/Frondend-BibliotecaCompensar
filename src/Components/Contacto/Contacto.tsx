import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Geolocalizacion } from './Mapa/Mapa';

export const Contacto = () => {
  // Estado para almacenar los datos del formulario de búsqueda
  const [searchData, setSearchData] = useState({
    nombre: '',
    libro: '',
    autor: ''
  });

  // Datos de ejemplo para la DataGrid
  const [rows] = useState([
    { id: 1, nombre: 'Juan', libro: 'La sombra del viento', autor: 'Carlos Ruiz Zafón' },
    { id: 2, nombre: 'María', libro: 'Cien años de soledad', autor: 'Gabriel García Márquez' },
    { id: 3, nombre: 'Pedro', libro: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling' },
  ]);


  // Columnas para la DataGrid
  const columns = [
    { field: 'nombre', headerName: 'Nombre', width: 150 },
    { field: 'libro', headerName: 'Libro', width: 200 },
    { field: 'autor', headerName: 'Autor', width: 200 },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid item xs={12}>
          <Geolocalizacion coordenada_x={222} coordenada_y={222} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} autoHeight />
        </div>
      </Grid>
    </Grid>
  );
};
