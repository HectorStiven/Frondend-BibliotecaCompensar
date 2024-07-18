import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, FormControl, Grid, InputLabel, Select, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import SearchIcon from '@mui/icons-material/Search';
import { Title } from "../../../../Elements/Titulo/Titulo";
import { api } from "../../../../api/Axios";
import { download_xls } from "../../../../Elements/DescargarDocumentos/XLS_descargar";
import { download_pdf } from "../../../../Elements/DescargarDocumentos/PDF_descargar";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Chip from '@mui/material/Chip';
import { useDispatch } from "react-redux";
import { setIdLibro, setNombre } from "../Toolkit/slice/libroPersonaSlice ";
import { ModalMasInformacionDetalleLibro } from "../components/ModalMasInformacionDetalleLibro/ModalMasInformacionDetalleLibro";
import { DataGrid, GridColDef } from "@mui/x-data-grid"; // Importamos GridValueGetter en lugar de GridValueGetterParams
import { Libro } from "../interface/LibroInterfaz";
import { useInformacionRowContext } from "../context/InformacionRowContext";

const initialData = {
  tipoSolicitud: '',
  fechaDesde: '',
  fechaHasta: '',
  categoriaLibro: '',
  estado: ''
}



export const PantallaPrincipalBiblioteca = () => {
  
  const [formData, setFormData] = useState(initialData);
  const [libros, setLibros] = useState<Libro[]>([]);
  const { setLibroSeleccionado } = useInformacionRowContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleSetIdLibro = (rowData: any) => {
    const {    idISBN,titulo } = rowData; // Suponiendo que `rowData` contiene el ID, nombre del libro y nombre del estudiante

 
    dispatch(setIdLibro(idISBN)); // Set id_libro with input value
    dispatch(setNombre(titulo)); // Set id_libro with input value

    navigate(
      "/Prestamos"
    );
  };


  const handleInputChange = (field: keyof typeof initialData, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const fetchLibros = async () => {
    try {
      const res = await api.get('/universidad/listar_libros/');
      setLibros(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchLibros();
  }, []);

  const columns: GridColDef[] = [

    { field: "titulo", headerName: "Título", flex: 1 },
    {
      field: "disponibleEnBiblioteca",
      headerName: "Disponible",
      flex: 0.6,
      renderCell: (params) => (
        <Chip
          label={params.value ? "Sí" : "No"}
          color={params.value ? "success" : "error"}
        />
      ),
    },
    {
      field: "categoriaLibro",
      headerName: "Categoría",
      flex: 1,
      renderCell: (params: any) =>
        params.row?.categoriaLibro?.nombre_categoria || "",
    },
    {
      field: "estado_libro",
      headerName: "Estado del Libro",
      flex: 0.8,
      renderCell: (params) => (
        <Chip
          label={params.value ? "Bueno" : "Malo"}
          color={params.value ? "success" : "error"}
        />
      ),
    },
    {
      field: "cantidad_copias",
      headerName: "Copias",
      flex: 0.5,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color="primary"
          variant="outlined"
          size="small"
        />
      )
    },

    {
      field: "acciones",
      headerName: "Acciones",
      flex: 1.1,
      renderCell: (params) => (
        <div>
          <Button
            variant="contained"
            color="primary"
            style={{ backgroundColor: "green", marginRight: 5 }}
            onClick={() => handleSetIdLibro(params.row)} // Suponiendo que idISBN es el identificador único de cada libro
          >
            <SendIcon />
          </Button>
          <Button
            variant="contained"
            color="secondary"
            style={{ backgroundColor: "red" }}
            onClick={() => handleEliminar(params.row.idISBN)} // Suponiendo que idISBN es el identificador único de cada libro
          >
            <DeleteIcon />
          </Button>
          <Button
            onClick={() => setLibroSeleccionado(params.row)} // Suponiendo que idISBN es el identificador único de cada libro
          >
            <ModalMasInformacionDetalleLibro />
          </Button>
        </div>
      )
    }
  ];

  const handleEliminar = (idISBN: string) => {
    console.log(`Eliminando libro con ID ISBN: ${idISBN}`);
  };

  const handleSearch = () => {
    fetchLibros();
  };

  return (
    <>
      <Grid
        container
        sx={{
          position: 'relative',
          background: '#FAFAFA',
          borderRadius: '15px',
          p: '20px',
          mb: '20px',
          boxShadow: '0px 3px 6px #042F4A26',
        }}
      >
        <Grid item xs={12}>
          <Title title="Busqueda de Libros" />
        </Grid>

        <Grid item xs={12} sm={4}>
          <FormControl fullWidth style={{ marginTop: 15, width: "95%" }} size="small">
            <InputLabel id="tipo-solicitud-label">Tipo de Solicitud</InputLabel>
            <Select
              labelId="tipo-solicitud-label"
              value={formData.tipoSolicitud}
              onChange={(e) => handleInputChange("tipoSolicitud", e.target.value)}
            >
              {/* Opciones de tipo de solicitud */}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            style={{ marginTop: 15, width: "95%" }}
            variant="outlined"
            size="small"
            type="date"
            value={formData.fechaDesde}
            onChange={(e) => handleInputChange('fechaDesde', e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            style={{ marginTop: 15, width: "95%" }}
            variant="outlined"
            size="small"
            type="date"
            value={formData.fechaHasta}
            onChange={(e) => handleInputChange('fechaHasta', e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            style={{ marginTop: 15, width: "95%" }}
            variant="outlined"
            size="small"
            label="Categoría del Libro"
            value={formData.categoriaLibro}
            onChange={(e) => handleInputChange('categoriaLibro', e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            style={{ marginTop: 15, width: "95%" }}
            variant="outlined"
            size="small"
            label="Estado"
            value={formData.estado}
            onChange={(e) => handleInputChange('estado', e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: 15, width: "95%", height: "70%", color: "white", backgroundColor: "green" }}
            size="small"
            startIcon={<SearchIcon />}
            onClick={handleSearch}
          >
            Buscar
          </Button>
        </Grid>

        <Grid item xs={12} style={{ marginTop: 15 }}>
          <ButtonGroup style={{ margin: 7, display: 'flex', justifyContent: 'flex-end' }}>
            {download_xls({ nurseries: libros, columns })}
            {download_pdf({ nurseries: libros, columns, title: 'Entradas' })}
          </ButtonGroup>
          <DataGrid
            rows={libros as Libro[]} // Especificar el tipo de rowData como Libro[]
            columns={columns}
            autoHeight
            getRowId={(row) => row.idISBN}
          />
        </Grid>

        <Grid item container justifyContent="flex-end">
          <Grid item xs={12} sm={5} md={4}>
            <Button
              style={{ margin: 8 }}
              color="primary"
              variant="contained"
              startIcon={<ArrowOutwardIcon />}
              onClick={() => {
                navigate(
                  "/app/gestor_documental/central_digitalizacion_otros/principal"
                );
              }}
            >
              redirigir modulo
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};


