import React, { useEffect, useState } from 'react'
import { Title } from '../../../../Elements/Titulo/Titulo'
import { Button, Grid, IconButton, MenuItem, TextField } from '@mui/material'
import { api } from '../../../../api/Axios';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Chip } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SearchIcon from '@mui/icons-material/Search';


interface Estudiante {
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
    id_grado: number | null;
}


export const BuscadorUsuarios = () => {

    const [form, setForm] = useState({
        tipo_documento: '',
        numero_documento: '',

    });


    const handleInputChange = (field: string, value: string) => {
        setForm({
            ...form,
            [field]: value
        });
    };
    const [estudiantes, setEstudiantes] = useState<Estudiante[]>([]);

    const BuscarUsuarios = async () => {
        try {
            const res = await api.get('/universidad/obtener_estudiante/');
            setEstudiantes(res.data.data);
        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        BuscarUsuarios();
    }, []);

    const columns: GridColDef[] = [
        // { field: 'id', headerName: 'ID',flex:1},
        { field: 'numero_identidad', headerName: 'Número de Identidad', flex: 1 },
        { field: 'primer_nombre', headerName: 'Primer Nombre', flex: 1 },
        { field: 'segundo_nombre', headerName: 'Segundo Nombre', flex: 1 },
        { field: 'primer_apellido', headerName: 'Primer Apellido', flex: 1 },
        { field: 'segundo_apellido', headerName: 'Segundo Apellido', flex: 1 },
        { field: 'edad', headerName: 'Edad', flex: 1 },
        { field: 'fecha_nacimiento', headerName: 'Fecha de Nacimiento', flex: 1 },
        { field: 'correo_electronico', headerName: 'Correo Electrónico', flex: 1 },
        { field: 'numero_celular', headerName: 'Número de Celular', flex: 1 },
        {
            field: 'pertenece_colegio', headerName: 'Pertenece a Colegio', flex: 1, renderCell: (params) => (
                <Chip label={params.value ? 'Sí' : 'No'} color={params.value ? 'primary' : 'secondary'} />
            )
        },
        { field: 'tipo_documento', headerName: 'Tipo de Documento', flex: 1 },
        { field: 'tipo_genero', headerName: 'Tipo de Género', flex: 1 },
        { field: 'colegio', headerName: 'Colegio', flex: 1 },
        { field: 'id_grado', headerName: 'ID de Grado', flex: 1 },
        {
            field: 'acciones', headerName: 'Acciones', flex: 1, renderCell: () => (
                <IconButton>
                    <CheckCircleOutlineIcon />
                </IconButton>
            )
        }
    ];



    return (
        <div>
            <Grid container spacing={2}>


                <Grid item xs={12}>
                    <Title title="Usuario Solicitante" />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        select
                        fullWidth
                        size="small"
                        variant="outlined"
                        value={form.tipo_documento}
                        label="Tipo de documento"
                        onChange={(e) => handleInputChange('tipo_documento', e.target.value)}
                        sx={{ borderRadius: '20px' }}
                    >
                        <MenuItem value="dni">DNI</MenuItem>
                        <MenuItem value="pasaporte">Pasaporte</MenuItem>
                        <MenuItem value="cedula">Cédula</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        size="small"
                        variant="outlined"
                        value={form.numero_documento}
                        label="Número de documento"
                        onChange={(e) => handleInputChange('numero_documento', e.target.value)}
                        sx={{ borderRadius: '20px' }}
                    />
                </Grid>

                <Grid item xs={12} >
                    <Grid container alignItems="center" justifyContent="center">
                        <Grid item xs={12} sm={4}>
                            <Button
                                variant="contained"
                                color="primary"
                                style={{ width: "95%", height: "70%", color: "white", backgroundColor: "green" }}
                                size="small"
                                startIcon={<SearchIcon />}
                                // onClick={handleSearch}
                            >
                                Buscar
                            </Button>
                        </Grid>

                        <Grid item xs={10}  style={{marginTop:15}}>
                            <DataGrid
                                rows={estudiantes}
                                columns={columns}
                                getRowId={(row) => row.id}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
