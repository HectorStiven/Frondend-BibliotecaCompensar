import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, FormControl, Grid, InputLabel, Select, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { DataGrid } from "@mui/x-data-grid";
import SearchIcon from '@mui/icons-material/Search';
import { Title } from "../../../../Elements/Titulo/Titulo";
import { api } from "../../../../api/Axios";
import { download_xls } from "../../../../Elements/DescargarDocumentos/XLS_descargar";
import { download_pdf } from "../../../../Elements/DescargarDocumentos/PDF_descargar";
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';



// Definición de la interfaz para el tipo de datos de cada libro
interface Libro {
    id: number;
    numero_identidad: string;
    primer_nombre: string;
    segundo_nombre: string | null;
    primer_apellido: string;
    segundo_apellido: string | null;
    edad: number;
    fecha_nacimiento: string;
    correo_electronico: string;
    numero_celular: string;
    pertenece_colegio: boolean;
    tipo_documento: string | null;
    tipo_genero: string | null;
    colegio: string | null;
    id_grado: string | null;
}

// Datos de inicialización del formulario de búsqueda
const initialData = {
    numero_identidad: '',
    edad: '',
    primer_nombre: '',
    primer_apellido: '',
    pertenece_colegio: '',
};

export const BuscarLector = () => {
    // Estado para almacenar los datos del formulario de búsqueda
    const [formData, setFormData] = useState(initialData);
    // Estado para almacenar los libros obtenidos de la API
    const [libros, setLibros] = useState<Libro[]>([]);
    // Hook de navegación para redirigir a otras páginas
    const navigate = useNavigate();

    // Función para manejar cambios en los campos del formulario de búsqueda
    const handleInputChange = (field: keyof typeof initialData, value: string) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };

    // Función para obtener los libros de la API
    const fetchLibros = async () => {
        try {
            // Realizar la petición a la API para obtener los libros
            const res = await api.get('/universidad/obtener_estudiante/');
            // Almacenar los libros obtenidos en el estado correspondiente
            setLibros(res.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    // Definición de las columnas de la tabla de datos
    const columns = [
        { field: 'numero_identidad', headerName: 'Número Identidad', flex: 1 },
        { field: 'primer_nombre', headerName: 'Primer Nombre', flex: 1 },
        { field: 'segundo_nombre', headerName: 'Segundo Nombre', flex: 1 },
        { field: 'primer_apellido', headerName: 'Primer Apellido', flex: 1 },
        { field: 'segundo_apellido', headerName: 'Segundo Apellido', flex: 1 },
        { field: 'edad', headerName: 'Edad', flex: 1 },
        { field: 'fecha_nacimiento', headerName: 'Fecha de Nacimiento', flex: 1 },
        { field: 'correo_electronico', headerName: 'Correo Electrónico', flex: 1 },
        { field: 'numero_celular', headerName: 'Número de Celular', flex: 1 },
        {
            field: 'pertenece_colegio',
            headerName: 'Pertenece a Colegio',
            flex: 1,
            renderCell: (params: any) => (
                <Chip
                    label={params.value ? 'Sí' : 'No'}
                    color={params.value ? 'primary' : 'secondary'}
                />
            ),
        },
        { field: 'tipo_documento', headerName: 'Tipo de Documento', flex: 1 },
        { field: 'tipo_genero', headerName: 'Tipo de Género', flex: 1 },
        { field: 'colegio', headerName: 'Colegio', flex: 1 },
        { field: 'id_grado', headerName: 'ID Grado', flex: 1 },
        {
            field: 'borrar',
            headerName: 'Borrar',
            flex: 1,
            renderCell: (params: any) => (
                <IconButton onClick={() => deleteLibro(params.row.id)}>
                    <DeleteIcon style={{ color: "red" }} />
                </IconButton>
            ),
        },
    ];
    const deleteLibro = async (id: number) => {
        try {
            // Realizar la petición a la API para eliminar el libro con el ID proporcionado
            await api.delete(`/universidad/borrar_estudiante/${id}/`);
            // Una vez eliminado, puedes actualizar la lista de libros llamando a fetchLibros nuevamente o actualizando el estado de libros de alguna otra manera
            // Por ejemplo, puedes volver a cargar los libros
            fetchLibros();
        } catch (error) {
            console.error(error);
        }
    };

    
    // Efecto para cargar los libros al cargar el componente
    useEffect(() => {
        fetchLibros();
    }, []);

    // Función para realizar la búsqueda al hacer clic en el botón
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
                    <Title title="Búsqueda de Lectores" />
                </Grid>

                {/* Campos de búsqueda avanzada */}
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        style={{ marginTop: 15, width: "95%" }}
                        variant="outlined"
                        size="small"
                        label="Número de Identidad"
                        value={formData.numero_identidad}
                        onChange={(e) => handleInputChange('numero_identidad', e.target.value)}
                    />
                </Grid>

                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        style={{ marginTop: 15, width: "95%" }}
                        variant="outlined"
                        size="small"
                        label="Edad"
                        type="number"
                        value={formData.edad}
                        onChange={(e) => handleInputChange('edad', e.target.value)}
                    />
                </Grid>

                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        style={{ marginTop: 15, width: "95%" }}
                        variant="outlined"
                        size="small"
                        label="Primer Nombre"
                        value={formData.primer_nombre}
                        onChange={(e) => handleInputChange('primer_nombre', e.target.value)}
                    />
                </Grid>

                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        style={{ marginTop: 15, width: "95%" }}
                        variant="outlined"
                        size="small"
                        label="Primer Apellido"
                        value={formData.primer_apellido}
                        onChange={(e) => handleInputChange('primer_apellido', e.target.value)}
                    />
                </Grid>

                <Grid item xs={12} sm={4}>
                    <FormControl fullWidth style={{ marginTop: 15, width: "95%" }} size="small">
                        <InputLabel id="pertenece-colegio-label">Pertenece a Colegio</InputLabel>
                        <Select
                            labelId="pertenece-colegio-label"
                            value={formData.pertenece_colegio}
                            onChange={(e) => handleInputChange("pertenece_colegio", e.target.value)}
                        >
                            <option value="true">Sí</option>
                            <option value="false">No</option>
                        </Select>
                    </FormControl>
                </Grid>

                {/* Botón de búsqueda */}
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

                {/* Tabla de datos */}
                <Grid item xs={12} style={{ marginTop: 15 }}>
                    <ButtonGroup style={{ margin: 7, display: 'flex', justifyContent: 'flex-end' }}>
                        {download_xls({ nurseries: libros, columns })}
                        {download_pdf({ nurseries: libros, columns, title: 'Entradas' })}
                    </ButtonGroup>
                    <DataGrid
                        rows={libros}
                        columns={columns}
                        autoHeight
                        getRowId={(row) => row.id}
                    />
                </Grid>

                {/* Botón para redirigir a otra página */}
                <Grid item container justifyContent="flex-end">

                    <Button
                        style={{ marginTop: 15 }}
                        variant="contained"
                        startIcon={<ArrowOutwardIcon />}
                        onClick={() => {
                            navigate(
                                "/Inicio"
                            );
                        }}
                    >
                        Inicio
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};
