import React, { useEffect, useState } from 'react';
import { Grid, TextField, Button, Switch, FormControlLabel, Checkbox, InputLabel, Select, MenuItem, Typography, FormControl } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/Save';
import { Title } from '../../../../Elements/Titulo/Titulo';
import { api } from '../../../../api/Axios';

// Definición de las interfaces
interface FormData {
    numero_identidad: string;
    primer_nombre: string;
    segundo_nombre: string;
    primer_apellido: string;
    segundo_apellido: string;
    edad: number;
    fecha_nacimiento: string | null;
    correo_electronico: string;
    numero_celular: string;
}

interface AdditionalFields {
    tipoDocumento: string;
    tipoGenero: string;
    tipoUsuario: boolean;
    colegioSeleccionado: string;
    gradoSeleccionado: string;
}

interface Colegio {
    id: number,
    nombre_colegio: string;
}

interface TipoDocumento {
    id: number;
    nombre_codigo: string;
}

interface Genero {
    id: number;
    nombre_Genero: string;
}

interface Grado {
    nombre_grado: string;
    numero_sub_grado: string;
}

// Estado inicial de los datos del formulario
const initialFormData: FormData = {
    numero_identidad: "",
    primer_nombre: "",
    segundo_nombre: "",
    primer_apellido: "",
    segundo_apellido: "",
    edad: 0,
    fecha_nacimiento: null,
    correo_electronico: "",
    numero_celular: "",
};

// Estado inicial de los campos adicionales
const initialAdditionalFields: AdditionalFields = {
    tipoDocumento: '',
    tipoGenero: '',
    tipoUsuario: false,
    colegioSeleccionado: "",
    gradoSeleccionado: "",
};

export const PantallaPrincipalUsuario = () => {
    
    // Estados del formulario y campos adicionales
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [additionalFields, setAdditionalFields] = useState<AdditionalFields>(initialAdditionalFields);
    const [colegios, setColegios] = useState<Colegio[]>([]);
    const [tiposDocumento, setTiposDocumento] = useState<TipoDocumento[]>([]);
    const [generos, setGeneros] = useState<Genero[]>([]);
    const [grados, setGrados] = useState<Grado[]>([]);
    const [aceptarTerminos, setAceptarTerminos] = useState(false);

    // Función para manejar cambios en los campos del formulario principal
    const handleInputChange = (field: keyof FormData, value: string | Date) => {
        setFormData({ ...formData, [field]: value });
    };

    // Función para manejar cambios en los campos adicionales
    const handleAdditionalFieldsChange = (field: keyof AdditionalFields, value: string | boolean) => {
        setAdditionalFields({ ...additionalFields, [field]: value });
    };

    // Función para enviar el formulario
    const handleSubmit = () => {
        // Validar que todos los campos obligatorios estén llenos
        for (const key in formData) {
            if (!formData[key as keyof FormData]) {
                alert('Todos los campos son obligatorios');
                return;
            }
        }
        // Si pasa todas las validaciones, se envía la solicitud
        crearUsuarioPeticion();
    };

    // Función para enviar la solicitud al servidor
    const crearUsuarioPeticion = async () => {
        try {
            const data = {
                colegio: additionalFields.colegioSeleccionado,
                correo_electronico: formData.correo_electronico,
                edad: formData.edad,
                fecha_nacimiento: formData.fecha_nacimiento,
                id_grado: additionalFields.gradoSeleccionado,
                numero_celular: formData.numero_celular,
                numero_identidad: formData.numero_identidad,
                pertenece_colegio: additionalFields.tipoUsuario,
                primer_apellido: formData.primer_apellido,
                primer_nombre: formData.primer_nombre,
                segundo_apellido: formData.segundo_apellido,
                segundo_nombre: formData.segundo_nombre,
                tipo_documento: additionalFields.tipoDocumento,
                tipo_genero: additionalFields.tipoGenero
              };
            const res = await api.post('/universidad/crear_estudiante/', data);
            console.log(res.data);
        } catch (error) {
            console.error(error);
        }
    };


    // Obtener colegios
    const obtenerColegios = async () => {
        try {
            const res = await api.get('/universidad/obtener_colegio/');
            setColegios(res.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    // Obtener tipos de documento
    const obtenerTiposDocumento = async () => {
        try {
            const res = await api.get('/universidad/listar_tipo_documento/');
            setTiposDocumento(res.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    // Obtener géneros
    const obtenerGeneros = async () => {
        try {
            const res = await api.get('/universidad/listar_genero/');
            setGeneros(res.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    // Obtener grados
    const obtenerGrados = async () => {
        try {
            const res = await api.get('/universidad/obtener_grado/');
            setGrados(res.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    // Obtener datos iniciales al cargar el componente
    useEffect(() => {
        obtenerColegios();
        obtenerTiposDocumento();
        obtenerGeneros();
        obtenerGrados();
    }, []);

    return (
        <Grid
            container
            spacing={0}
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
                <Title title="Registro de Usuario" />
            </Grid>

            {/* Renderizar campos del formulario principal */}
            {Object.entries(formData).map(([key, value]) => (
                <Grid key={key} item xs={12} sm={6} md={4} >
                    {key === 'fecha_nacimiento' ? (
                        <TextField
                            label="Fecha de Nacimiento"
                            type="date"
                            value={typeof value === 'string' ? value : value ? value : ''}
                            onChange={(e) => handleInputChange(key as keyof FormData, e.target.value)}
                            fullWidth
                            style={{ marginTop: 15,width:"95%" }}
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    ) : (
                        <TextField
                            fullWidth
                            style={{ marginTop: 15,width:"95%" }}
                            variant="outlined"
                            label={key.replace(/_/g, ' ')}
                            value={value}
                            onChange={(e) => handleInputChange(key as keyof FormData, e.target.value)}
                        />
                    )}
                </Grid>
            ))}

            {/* Campo para seleccionar el colegio */}
            <Grid item xs={12} sm={6} >
                <FormControl fullWidth variant="outlined" style={{ marginTop: 15 }}>
                    <InputLabel id="select-colegio-label">Colegio</InputLabel>
                    <Select
                        labelId="select-colegio-label"
                        id="select-colegio"
                        value={additionalFields.colegioSeleccionado}
                        onChange={(e) => handleAdditionalFieldsChange('colegioSeleccionado', e.target.value as string)}
                        label="Colegio"
                        style={{width:"95%"}}
                    >
                        {colegios.map((colegio) => (
                            <MenuItem key={colegio.id} value={colegio.id}>{colegio.nombre_colegio}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>

            {/* Campo para seleccionar el grado */}
            <Grid item xs={12} sm={6} >
                <FormControl fullWidth variant="outlined" style={{ marginTop: 15 }}>
                    <InputLabel id="select-grado-label">Grado</InputLabel>
                    <Select
                        labelId="select-grado-label"
                        id="select-grado"
                        value={additionalFields.gradoSeleccionado}
                        onChange={(e) => handleAdditionalFieldsChange('gradoSeleccionado', e.target.value as string)}
                        label="Grado"
                        style={{width:"100%"}}
                    >
                        {grados.map((grado) => (
                            <MenuItem key={grado.numero_sub_grado} value={grado.numero_sub_grado}>{grado.nombre_grado}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>

            {/* Campo para tipo de documento */}
            <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined" style={{ marginTop: 15 }}>
                    <InputLabel id="select-tipo-documento-label">Tipo de Documento</InputLabel>
                    <Select
                        labelId="select-tipo-documento-label"
                        id="select-tipo-documento"
                        value={additionalFields.tipoDocumento}
                        onChange={(e) => handleAdditionalFieldsChange('tipoDocumento', e.target.value as string)}
                        label="Tipo de Documento"
                        style={{width:"95%"}}
                    >
                        {tiposDocumento.map((tipoDocumento) => (
                            <MenuItem key={tipoDocumento.id} value={tipoDocumento.id}>{tipoDocumento.nombre_codigo}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>


            {/* Campo para tipo de género */}
            <Grid item xs={12} sm={6} >
                <FormControl fullWidth variant="outlined" style={{ marginTop: 15 }}>
                    <InputLabel id="select-tipo-genero-label">Tipo de Género</InputLabel>
                    <Select
                        labelId="select-tipo-genero-label"
                        id="select-tipo-genero"
                        value={additionalFields.tipoGenero}
                        onChange={(e) => handleAdditionalFieldsChange('tipoGenero', e.target.value as string)}
                        label="Tipo de Género"
                        style={{width:"100%"}}
                    >
                        {generos.map((genero) => (
                            <MenuItem key={genero.id} value={genero.id}>{genero.nombre_Genero}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>

            {/* Campo para tipo de usuario */}
            <Grid item xs={12}>
                <FormControl style={{ marginTop: 15 }}>
                    <Switch
                        color="primary"
                        checked={additionalFields.tipoUsuario}
                        onChange={(e) => handleAdditionalFieldsChange('tipoUsuario', e.target.checked)}
                    />
                </FormControl>
                <Typography style={{ marginTop: 5 }}> {additionalFields.tipoUsuario ? 'Confirmado' : 'No confirmado'} </Typography>
            </Grid>

            {/* Campo para aceptar términos y condiciones */}
            <Grid item xs={12}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={aceptarTerminos}
                            onChange={(e) => setAceptarTerminos(e.target.checked)}
                            color="primary"
                        />
                    }
                    label="Aceptar Términos y Condiciones"
                />
            </Grid>

            {/* Botón de guardar */}
            <Grid item xs={12} container justifyContent="center">
                <Grid item xs={12} sm={5} md={4}>
                    <Button
                        style={{ margin: 8 }}
                        color="success"
                        variant="contained"
                        startIcon={<ArrowForwardIcon />}
                        onClick={handleSubmit}
                    >
                        Guardar
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};
