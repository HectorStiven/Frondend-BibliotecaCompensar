import React, { useState, useEffect } from "react";
import {
    Button, ButtonGroup, FormControl, Grid, InputLabel, Select, TextField,
    Dialog, DialogActions, DialogContent, InputAdornment
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import AccountCircle from '@mui/icons-material/AccountCircle';
import BadgeIcon from '@mui/icons-material/Badge';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Title } from "../../../../Elements/Titulo/Titulo";
import { api } from "../../../../api/Axios";
import { download_xls } from "../../../../Elements/DescargarDocumentos/XLS_descargar";
import { download_pdf } from "../../../../Elements/DescargarDocumentos/PDF_descargar";
import Chip from '@mui/material/Chip';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import SelectIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { UsuarioRegistrado } from "../interfaces/LectorInterfaces";
import SearchIcon from '@mui/icons-material/Search';


// Definición de la interfaz para el tipo de datos de cada libro


// Datos de inicialización del formulario de búsqueda
const initialData = {
    numero_identidad: '',
    edad: '',
    primer_nombre: '',
    primer_apellido: '',
    pertenece_colegio: '',
};


interface BuscarLectorProps {
    onRowSelect: (row: UsuarioRegistrado) => void;
}


export const BuscarLector: React.FC<BuscarLectorProps> = ({ onRowSelect }) => {
    const [formData, setFormData] = useState(initialData);
    const [usuarios, setUsuarios] = useState<UsuarioRegistrado[]>([]);
    const [open, setOpen] = useState(false);

    const handleInputChange = (field: keyof typeof initialData, value: string) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };

    // Función para obtener los libros de la API
    const fetchUsuarios = async () => {
        try {
            // Realizar la petición a la API para obtener los libros
            const res = await api.get('/universidad/obtener_estudiante/');
            // Almacenar los libros obtenidos en el estado correspondiente
            setUsuarios(res.data.data);
        } catch (error) {
            console.error(error);
        }
    };


    // Definición de las columnas de la tabla de datos
    const columns: GridColDef[] = [
        // {
        //     field: 'id',
        //     headerName: 'Número',
        //     flex: 1,
        //     renderHeader: () => (
        //         <div>
        //             <BadgeIcon style={{ marginRight: 5 }} />
        //             Número
        //         </div>
        //     ),
        // },
        {
            field: 'numero_identidad',
            headerName: 'Número Identidad',
            flex: 1,
            renderHeader: () => (
                <div>
                    <BadgeIcon style={{ marginRight: 5 }} />
                    Número Identidad
                </div>
            ),
        },
        {
            field: 'primer_nombre',
            headerName: 'Primer Nombre',
            flex: 1,
            renderHeader: () => (
                <div>
                    <AccountCircle style={{ marginRight: 5 }} />
                    Primer Nombre
                </div>
            ),
        },
        // {
        //     field: 'segundo_nombre',
        //     headerName: 'Segundo Nombre',
        //     flex: 1,
        //     renderHeader: () => (
        //         <div>
        //             <AccountCircle style={{ marginRight: 5 }} />
        //             Segundo Nombre
        //         </div>
        //     ),
        // },
        {
            field: 'primer_apellido',
            headerName: 'Primer Apellido',
            flex: 1,
            renderHeader: () => (
                <div>
                    <AccountCircle style={{ marginRight: 5 }} />
                    Primer Apellido
                </div>
            ),
        },
        {
            field: 'pertenece_colegio',
            headerName: 'Pertenece',
            flex: 0.6,
            renderCell: (params: any) => (
                <Chip
                    label={params.value ? 'Sí' : 'No'}
                    color={params.value ? 'success' : 'error'}
                    style={{ borderRadius: '8px' }} // Ejemplo de aplicación de border-radius
                />
            ),
        },
        {
            field: 'edad',
            headerName: 'Edad',
            flex: 0.7,
            renderCell: (params: any) => {
                // Asegurarse de que params.value sea un número válido antes de operar
                const edad = typeof params.value === 'number' ? params.value : parseInt(params.value as string, 10);
                return (
                    <Chip
                        label={`${params.value || ''}`}
                        icon={edad < 18 ? <ChildCareIcon /> : <PersonIcon />}
                        color={edad < 18 ? 'secondary' : 'primary'}
                        style={{ borderRadius: '8px' }}
                    />
                );
            },
            renderHeader: () => (
                <div>
                    <CalendarTodayIcon style={{ marginRight: 5 }} />
                    Edad
                </div>
            ),
        },
        {
            field: 'correo_electronico',
            headerName: 'Correo Electrónico',
            flex: 1,
            renderHeader: () => (
                <div>
                    <EmailIcon style={{ marginRight: 5 }} />
                    Correo Electrónico
                </div>
            ),
        },
        {
            field: 'numero_celular',
            headerName: 'Número de Celular',
            flex: 1,
            renderHeader: () => (
                <div>
                    <PhoneIcon style={{ marginRight: 5 }} />
                    Número de Celular
                </div>
            ),
        },
  
        {
            field: 'acciones',
            headerName: 'Acciones',
            flex: 1,
            renderCell: (params: any) => (
                <div>
                    <Button
                        variant="contained"
                        style={{ backgroundColor: "green",marginInlineEnd:4 }}
                        onClick={() => handleRowSelect(params.row)}>
                        <SelectIcon />
                    </Button>


                    <Button
                        variant="contained"
                        style={{ backgroundColor: "red" }}
                    
                    onClick={() => deleteLibro(params.row.id)}>
                        <DeleteIcon/>
                    </Button>
                </div>
            ),
        },
    ];

    const deleteLibro = async (id: number) => {
        try {
            // Realizar la petición a la API para eliminar el libro con el ID proporcionado
            await api.delete(`/universidad/borrar_estudiante/${id}/`);
            // Una vez eliminado, actualizar la lista de libros
            setUsuarios((prevLibros) => prevLibros.filter((libro) => libro.id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    const handleRowSelect = (row: UsuarioRegistrado) => {
        onRowSelect(row);
        handleClose(); // Cerrar el modal al seleccionar una fila
    };

    // Efecto para cargar los libros al cargar el componente
    useEffect(() => {
        fetchUsuarios();
    }, []);

    // Función para realizar la búsqueda al hacer clic en el botón
    const handleSearch = () => {
        fetchUsuarios();
    };

    // Función para manejar la apertura del modal
    const handleClickOpen = () => {
        setOpen(true);
    };

    // Función para manejar el cierre del modal
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
                startIcon={<SearchIcon />}
            >
                Abrir Búsqueda de Lectores
            </Button>
            <Dialog open={open}
                onClose={handleClose}
                maxWidth="lg"
                fullWidth
                sx={{
                    "& .MuiPaper-root": {
                        borderRadius: '16px'
                    }
                }}>
                <DialogContent>
                    <Grid container>
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
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <BadgeIcon />
                                        </InputAdornment>
                                    ),
                                }}
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
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <CalendarTodayIcon />
                                        </InputAdornment>
                                    ),
                                }}
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
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
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
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
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


                        <Grid item xs={12} style={{ marginTop: 15 }}>
                            <ButtonGroup style={{ margin: 7, display: 'flex', justifyContent: 'flex-end' }}>
                                {download_xls({ nurseries: usuarios, columns })}
                                {download_pdf({ nurseries: usuarios, columns, title: 'Entradas' })}
                            </ButtonGroup>
                            <DataGrid
                                rows={usuarios}
                                columns={columns}
                                autoHeight
                                getRowId={(row) => row.id}
                            />
                        </Grid>



                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                </DialogActions>
            </Dialog>



        </>
    );
};
