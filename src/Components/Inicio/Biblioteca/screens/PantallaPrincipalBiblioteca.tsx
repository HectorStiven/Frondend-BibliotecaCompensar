import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, FormControl, Grid, InputLabel, Select, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import SearchIcon from '@mui/icons-material/Search';
import { Title } from "../../../../Elements/Titulo/Titulo";
import { api } from "../../../../api/Axios";
import { download_xls } from "../../../../Elements/DescargarDocumentos/XLS_descargar";
import { download_pdf } from "../../../../Elements/DescargarDocumentos/PDF_descargar";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Chip from '@mui/material/Chip';

const initialData = {
  tipoSolicitud: '',
  fechaDesde: '',
  fechaHasta: '',
  categoriaLibro: '',
  estado: ''
}

interface Libro {
  idISBN: string;
  titulo: string;
  disponibleEnBiblioteca: boolean;
  agno_publicacion?: number | null;
  descripcion?: string | null;
  estado_libro: boolean;
  cantidad_copias: number;
  categoriaLibro?: {
    id: number;
    nombre_categoria: string;
    otra_categoria_cual: string;
  } | null;
  Editorial?: {
    id: number;
    nombre: string;
  } | null;
  id_Autor?: {
    id: number;
    primer_nombre: string;
    segundo_nombre?: string | null;
    primer_apellido: string;
    fecha_nacimiento: string; // O puedes usar Date si prefieres
    correo_electronico: string;
    numero_celular: string;
  } | null;
  id_estante?: string | null;
}




export const PantallaPrincipalBiblioteca = () => {
  const [formData, setFormData] = useState(initialData);
  const [libros, setLibros] = useState<Libro[]>([]);
  const navigate = useNavigate();

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
    { field: "idISBN", headerName: "ID del ISBN", flex: 1 },
    { field: "titulo", headerName: "Título", flex: 1 },
    {
      field: "disponibleEnBiblioteca",
      headerName: "Disponible en Biblioteca",
      flex: 1,
      renderCell: (params) => (
        <Chip
          label={params.value ? "Sí" : "No"}
          color={params.value ? "success" : "error"}
        />
      ),
    }, { field: "agno_publicacion", headerName: "Año de Publicación", flex: 1 },
    { field: "descripcion", headerName: "Descripción", flex: 1 },
    {
      field: "estado_libro",
      headerName: "Estado del Libro",
      flex: 1,
      renderCell: (params) => (
        <Chip
          label={params.value ? "Disponible" : "No disponible"}
          color={params.value ? "success" : "error"}
        />
      ),
    },
    {
      field: "cantidad_copias",
      headerName: "Cantidad de Copias",
      flex: 1,
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
      flex: 2,
      renderCell: (params) => (
        <div>
          <Button
            variant="contained"
            color="primary"
            style={{ backgroundColor: "green", marginRight: 5 }}
            onClick={() => handleSolicitar(params.row.idISBN)} // Suponiendo que idISBN es el identificador único de cada libro
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
        </div>
      )
    }
    // {
    //   field: "categoriaLibro",
    //   headerName: "Categoría del Libro",
    //   flex: 1,
    //   valueGetter: (params) => params.value?.categoriaLibro ? params.value.categoriaLibro.nombre_categoria : ""
    // },
    // {
    //   field: "Editorial",
    //   headerName: "Editorial",
    //   flex: 1,
    //   valueGetter: (params) => params.value?.Editorial ? params.value.Editorial.nombre : ""
    // },
    // {
    //   field: "id_Autor",
    //   headerName: "ID del Autor",
    //   flex: 1,
    //   valueGetter: (params) => params.value?.id_Autor ? params.value.id_Autor.primer_nombre + " " + params.value.id_Autor.primer_apellido : ""
    // },
    // { field: "id_estante", headerName: "ID del Estante", flex: 1 },
  ];

  const handleSolicitar = (idISBN: string) => {
    console.log(`Solicitando libro con ID ISBN: ${idISBN}`);
  };

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

