import React, { useState, useEffect } from "react";
import { TextField, Button, Grid } from "@mui/material";
import { api } from "../../../api/Axios";
import { Chip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import SearchIcon from '@mui/icons-material/Search';
import { Title } from "../../../Elements/Titulo/Titulo";
import DoneIcon from '@mui/icons-material/Done';
import Swal from 'sweetalert2';

export const SolicitudesActivas = () => {
  const [solicitudes, setSolicitudes] = useState([]);
  const [filtroEstudiante, setFiltroEstudiante] = useState("");
  const [filtroLibro, setFiltroLibro] = useState("");

  const fetchSolicitudesActivas = async () => {
    try {
      const res = await api.get('/universidad/obtener_prestamo/');
      setSolicitudes(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSolicitudesActivas();
  }, []);

  const handleBuscar = async () => {
    try {
      const res = await api.get('/universidad/obtener_prestamo/', {
        params: {
          estudiante: filtroEstudiante,
          libro: filtroLibro
        }
      });
      setSolicitudes(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const columns: GridColDef[] = [
    { field: "libro", headerName: "Libro", flex: 1 },
    { field: "estudiante", headerName: "Estudiante", flex: 1 },
    { field: "fecha_prestamo", headerName: "Fecha de Préstamo", flex: 1 },
    { field: "fecha_devolucion_libro", headerName: "Fecha de Devolución", flex: 1 },
    { field: "tiempo_devolucion_dias", headerName: "Devolución (días)", flex: 1 },
    {
      field: "ya_devuelto",
      headerName: "¿Ya devuelto?",
      flex: 1,
      renderCell: (params: any) => (
        <Chip
          label={params.value ? "Sí" : "No"}
          color={params.value ? "success" : "error"}
        />
      ),
    },
    { field: "dias_mora", headerName: "Días de Mora", flex: 1 },
    {
      field: "acciones",
      headerName: "Acciones",
      flex: 1,
      renderCell: (params: any) => (
        <Button
          variant="contained"
          color="success"
          onClick={() => handleActionClick(params.row)}
          startIcon={<DoneIcon />}
        >
          Devolver
        </Button>
      ),
    },
  ];




  const handleActionClick = (rowData: any) => {
    const { id, libro, estudiante } = rowData; // Suponiendo que `rowData` contiene el ID, nombre del libro y nombre del estudiante

    Swal.fire({
      title: '¿Está seguro de marcar el libro como devuelto?',
      text: `¿Está seguro de marcar el libro "${libro}" como devuelto para el estudiante "${estudiante}"? Esta acción no se puede deshacer.`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#042F4A',
      cancelButtonColor: '#DE1616',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result: any) => {
      if (result.isConfirmed) {
        // Aquí puedes realizar la acción de marcar el libro como devuelto
        console.log(`El usuario confirmó marcar como devuelto el libro con ID: ${id} para el estudiante ${estudiante}`);
        Swal.fire({
          title: '¡Listo!',
          text: `El libro "${libro}" ha sido marcado como devuelto para el estudiante "${estudiante}".`,
          icon: 'success',
          confirmButtonColor: '#042F4A',
          confirmButtonText: 'Aceptar'
        });
      }
    });
  };



  return (

    <Grid container spacing={2} alignItems="center">

      <Grid item xs={12}>
        <Title title="Solicitude Activas" />
      </Grid>

      <Grid item xs={12} sm={4}>
        <TextField
          label="Filtrar por estudiante"
          variant="outlined"
          size="small"

          fullWidth
          value={filtroEstudiante}
          onChange={(e) => setFiltroEstudiante(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          label="Filtrar por libro"
          variant="outlined"
          size="small"
          fullWidth
          value={filtroLibro}
          onChange={(e) => setFiltroLibro(e.target.value)}
        />
      </Grid>


      <Grid item xs={12} sm={4}>
        <Button
          variant="contained"
          color="primary"
          style={{ width: "95%", color: "white", backgroundColor: "green" }}
          startIcon={<SearchIcon />}
          onClick={handleBuscar}
        >
          Buscar
        </Button>
      </Grid>
      <Grid item xs={12} style={{ marginTop: 15 }} >
        <DataGrid
          rows={solicitudes}
          columns={columns}
          autoHeight
          getRowId={(row: any) => row.id}
        />
      </Grid>
    </Grid>

  );
};
