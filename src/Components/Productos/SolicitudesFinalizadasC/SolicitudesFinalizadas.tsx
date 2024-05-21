import React, { useState, useEffect } from "react";
import { TextField, Button, Grid } from "@mui/material";
import { Chip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import SearchIcon from '@mui/icons-material/Search';
import { Title } from "../../../Elements/Titulo/Titulo";

export const SolicitudesFinalizadas = () => {
  const [solicitudes, setSolicitudes] = useState([]);
  const [filtroEstudiante, setFiltroEstudiante] = useState("");
  const [filtroLibro, setFiltroLibro] = useState("");

  const fetchSolicitudesActivas = async () => {
    // try {
    //   const res = await api.get('/universidad/obtener_prestamo/');
    //   setSolicitudes(res.data.data);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  useEffect(() => {
    fetchSolicitudesActivas();
  }, []);

  const handleBuscar = async () => {
    setSolicitudes([])
    // try {
    //   const res = await api.get('/universidad/obtener_prestamo/', {
    //     params: {
    //       estudiante: filtroEstudiante,
    //       libro: filtroLibro
    //     }
    //   });
    //   setSolicitudes(res.data.data);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const columns: GridColDef[] = [
    // { field: "id", headerName: "ID", flex: 1 },
    { field: "fecha_prestamo", headerName: "Fecha de Préstamo", flex: 1 },
    { field: "fecha_devolucion_libro", headerName: "Fecha de Devolución", flex: 1 },
    { field: "tiempo_devolucion_dias", headerName: "Tiempo de Devolución (días)", flex: 1 },
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
    { field: "fecha_devolucion_real", headerName: "Fecha de Devolución Real", flex: 1 },
    { field: "observaciones_devolucion", headerName: "Observaciones de Devolución", flex: 1 },
    { field: "dias_mora", headerName: "Días de Mora", flex: 1 },
    { field: "libro", headerName: "Libro", flex: 1 },
    { field: "estudiante", headerName: "Estudiante", flex: 1 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <Grid container spacing={2} alignItems="center">

      <Grid item xs={12}>
        <Title title="Solicitudes Inactivas" />
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

    </div>
  );
};
