import React, { useEffect, useState } from 'react';
import { Grid, TextField, Button, Switch, FormControlLabel, FormControl, Checkbox, InputAdornment, IconButton, InputLabel, Select, MenuItem, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/Save';
import { Title } from '../../../../Elements/Titulo/Titulo';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { api } from '../../../../api/Axios';

// Definición de los campos adicionales
interface AdditionalFields {
    crearContrasena: string;
    confirmarContrasena: string;
    tipoUsuario: boolean;
    colegioSeleccionado: string;
    gradoSeleccionado: string; // Nuevo campo para el grado seleccionado
}

export const PantallaPrincipalUsuario = () => {
    // Estado del formulario
    const [formData, setFormData] = useState({
        numero_identidad: "",
        primer_nombre: "",
        segundo_nombre: "",
        primer_apellido: "",
        segundo_apellido: "",
        edad: 0,
        fecha_nacimiento: "",
        correo_electronico: "",
        numero_celular: "",
    });

    // Estado de los campos adicionales
    const [additionalFields, setAdditionalFields] = useState<AdditionalFields>({
        crearContrasena: '',
        confirmarContrasena: '',
        tipoUsuario: false,
        colegioSeleccionado: "",
        gradoSeleccionado: "", // Inicializar el estado del grado seleccionado
    });

    // Estado para mostrar la contraseña
    const [mostrarContrasena, setMostrarContrasena] = useState(false);

    // Estado para aceptar términos
    const [aceptarTerminos, setAceptarTerminos] = useState(false);

    // Manejar cambios en los campos del formulario principal
    const handleInputChange = (field: string, value: string) => {
        setFormData({
            ...formData,
            [field]: value
        });
    };

    // Manejar cambios en los campos adicionales
    const handleAdditionalFieldsChange = (field: keyof AdditionalFields, value: string | boolean) => {
        setAdditionalFields({
            ...additionalFields,
            [field]: value
        });
    };

    // Alternar la visibilidad de la contraseña
    const toggleMostrarContrasena = () => {
        setMostrarContrasena(!mostrarContrasena);
    };

    // Manejar envío del formulario
    const handleSubmit = () => {
        // Validar si las contraseñas coinciden
        if (additionalFields.crearContrasena !== additionalFields.confirmarContrasena) {
            alert('Las contraseñas no coinciden');
            return;
        }

        // Validar que todos los campos obligatorios estén llenos
        for (const key in formData) {
            if (Object.prototype.hasOwnProperty.call(formData, key)) {
                if ((formData as any)[key] === '') {
                    alert('Todos los campos son obligatorios');
                    return;
                }
            }
        }

        // Si pasa todas las validaciones, se envía la solicitud
        crearUsuarioPeticion();
    };

    // Enviar solicitud al servidor
    const crearUsuarioPeticion = async () => {
        try {
            const res = await api.post('/universidad/crear_estudiante/', { ...formData, ...additionalFields });
            console.log(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    interface Colegio {
        id: number,
        nombre_colegio: string;
        direccion: string;
        telefono_contacto: string;
        correo_electronico: string;
        direccion_web: string;
        cod_departamento: string;
        cod_municipio: string;
    }

    const [colegios, setColegios] = useState<Colegio[]>([]);

    const ObtenerColeguios = async () => {
        try {
            const res = await api.get('/universidad/obtener_colegio/');
            setColegios(res.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    interface Grado {
  
        nombre_grado: string;
        numero_sub_grado:string
    }

    const [grados, setGrados] = useState<Grado[]>([]);

    const ObtenerGrados = async () => {
        try {
            const res = await api.get('/universidad/obtener_grado/');
            setGrados(res.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        ObtenerColeguios();
        ObtenerGrados(); // Obtener los grados al montar el componente
    }, []);

    return (
        <Grid
            container
            spacing={2}
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
                    <TextField
                        fullWidth
                        style={{ marginTop: 15 }}
                        variant="outlined"
                        label={key.replace(/_/g, ' ')}
                        value={value}
                        onChange={(e) => handleInputChange(key, e.target.value)}
                    />
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
                    >
                        {grados.map((grado) => (
                            <MenuItem key={grado.numero_sub_grado} value={grado.numero_sub_grado}>{grado.nombre_grado}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>

            {/* Campo para crear contraseña */}
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    style={{ marginTop: 15, width: "80%" }}
                    variant="outlined"
                    label="Crear Contraseña"
                    type={mostrarContrasena ? 'text' : 'password'}
                    value={additionalFields.crearContrasena}
                    onChange={(e) => handleAdditionalFieldsChange('crearContrasena', e.target.value)}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={toggleMostrarContrasena}
                                    edge="end"
                                >
                                    {mostrarContrasena ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </Grid>

            {/* Campo para confirmar contraseña */}
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    style={{ marginTop: 15, width: "80%" }}
                    variant="outlined"
                    label="Confirmar Contraseña"
                    type="password"
                    value={additionalFields.confirmarContrasena}
                    onChange={(e) => handleAdditionalFieldsChange('confirmarContrasena', e.target.value)}
                />
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
                <Typography style={{marginTop:5}}> {additionalFields.tipoUsuario ? 'Confirmado' : 'No confirmado'} </Typography>
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
