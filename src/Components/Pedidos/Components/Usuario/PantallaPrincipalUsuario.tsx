import React from 'react';
import { Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem, InputAdornment, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Title } from '../../../../Elements/Titulo/Titulo';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const PantallaPrincipalUsuario = () => {
    const [formData, setFormData] = React.useState({
        nombres: '', // Nombres del usuario
        apellidos: '', // Apellidos del usuario
        telefono: '', // Teléfono del usuario
        celular: '', // Celular del usuario
        tipoDocumento: '', // Tipo de documento del usuario (ejemplo: cédula, pasaporte)
        numeroDocumento: '', // Número de documento del usuario
        tipoUsuario: '', // Tipo de usuario (ejemplo: estudiante, docente)
        genero: '', // Género del usuario
        ocupacion: '', // Ocupación del usuario (ejemplo: estudiante, empleado)
        fecha_nacimiento: '', // Fecha de nacimiento del usuario
        correoElectronico: '', // Correo electrónico del usuario
        pais: '', // País del usuario
        departamento: '', // Departamento del usuario
        municipio: '', // Municipio del usuario
        codigoPostal: '', // Código postal del usuario
        direccion: '', // Dirección del usuario
        nombreFamiliar: '', // Nombre del familiar de contacto
        celularFamiliar: '', // Celular del familiar de contacto
        parentesco: '', // Parentesco con el familiar de contacto
        crearUsuario: false, // Indica si se debe crear un usuario en el sistema
        crearContrasena: '',
        mostrarContrasena: false
    });

    const handleInputChange = (field: any, value: any) => {
        setFormData({
            ...formData,
            [field]: value
        });
    };

    const toggleMostrarContrasena = () => {
        setFormData({
          ...formData,
          mostrarContrasena: !formData.mostrarContrasena
        });
      };

    const handleSubmit = () => {
        // Aquí puedes enviar formData al servidor o realizar otra acción
        console.log(formData);
    };

    return (
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
                <Title title="Registro de Usuario" />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    style={{ marginTop: 15,width:"95%" }}
                    variant="outlined"
                    label="Nombres"
                    value={formData.nombres}
                    onChange={(e) => handleInputChange('nombres', e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    style={{ marginTop: 15,width:"95%" }}
                    variant="outlined"
                    label="Apellidos"
                    value={formData.apellidos}
                    onChange={(e) => handleInputChange('apellidos', e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    style={{ marginTop: 15,width:"95%" }}
                    variant="outlined"
                    label="Teléfono"
                    value={formData.telefono}
                    onChange={(e) => handleInputChange('telefono', e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    style={{ marginTop: 15,width:"95%" }}
                    variant="outlined"
                    label="Celular"
                    value={formData.celular}
                    onChange={(e) => handleInputChange('celular', e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    style={{ marginTop: 15,width:"95%" }}
                    variant="outlined"
                    label="Tipo de Documento"
                    value={formData.tipoDocumento}
                    onChange={(e) => handleInputChange('tipoDocumento', e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    style={{ marginTop: 15,width:"95%" }}
                    variant="outlined"
                    label="Número de Documento"
                    value={formData.numeroDocumento}
                    onChange={(e) => handleInputChange('numeroDocumento', e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <FormControl fullWidth style={{ marginTop: 15,width:"95%" }}>
                    <InputLabel id="tipo-usuario-label">Tipo de Usuario</InputLabel>
                    <Select
                        labelId="tipo-usuario-label"
                        value={formData.tipoUsuario}
                        onChange={(e) => handleInputChange('tipoUsuario', e.target.value)}
                    >
                        <MenuItem value="estudiante">Estudiante</MenuItem>
                        <MenuItem value="docente">Docente</MenuItem>
                        <MenuItem value="administrativo">Administrativo</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
                <FormControl fullWidth style={{ marginTop: 15,width:"95%" }}>
                    <InputLabel id="genero-label">Género</InputLabel>
                    <Select
                        labelId="genero-label"
                        value={formData.genero}
                        onChange={(e) => handleInputChange('genero', e.target.value)}
                    >
                        <MenuItem value="masculino">Masculino</MenuItem>
                        <MenuItem value="femenino">Femenino</MenuItem>
                        <MenuItem value="otro">Otro</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    style={{ marginTop: 15,width:"95%" }}
                    variant="outlined"
                    label="Ocupación"
                    value={formData.ocupacion}
                    onChange={(e) => handleInputChange('ocupacion', e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    style={{ marginTop: 15,width:"95%" }}
                    variant="outlined"
                    label="Fecha de Nacimiento"
                    type="date"
                    value={formData.fecha_nacimiento}
                    onChange={(e) => handleInputChange('fecha_nacimiento', e.target.value)}
                    InputLabelProps={{ shrink: true }}
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    fullWidth
                    style={{ marginTop: 15,width:"98%" }}
                    variant="outlined"
                    label="Correo Electrónico"
                    value={formData.correoElectronico}
                    onChange={(e) => handleInputChange('correoElectronico', e.target.value)}
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    fullWidth
                    style={{ marginTop: 15,width:"98%" }}
                    variant="outlined"
                    label="País"
                    value={formData.pais}
                    onChange={(e) => handleInputChange('pais', e.target.value)}
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    fullWidth
                    style={{ marginTop: 15,width:"98%" }}
                    variant="outlined"
                    label="Departamento"
                    value={formData.departamento}
                    onChange={(e) => handleInputChange('departamento', e.target.value)}
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    fullWidth
                    style={{ marginTop: 15,width:"98%" }}
                    variant="outlined"
                    label="Municipio"
                    value={formData.municipio}
                    onChange={(e) => handleInputChange('municipio', e.target.value)}
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    fullWidth
                    style={{ marginTop: 15,width:"98%" }}
                    variant="outlined"
                    label="Código Postal"
                    value={formData.codigoPostal}
                    onChange={(e) => handleInputChange('codigoPostal', e.target.value)}
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    fullWidth
                    style={{ marginTop: 15,width:"98%" }}
                    variant="outlined"
                    label="Dirección"
                    value={formData.direccion}
                    onChange={(e) => handleInputChange('direccion', e.target.value)}
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    fullWidth
                    style={{ marginTop: 15,width:"98%" }}
                    variant="outlined"
                    label="Nombre del Familiar"
                    value={formData.nombreFamiliar}
                    onChange={(e) => handleInputChange('nombreFamiliar', e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    style={{ marginTop: 15,width:"98%" }}
                    variant="outlined"
                    label="Celular del Familiar"
                    value={formData.celularFamiliar}
                    onChange={(e) => handleInputChange('celularFamiliar', e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    style={{ marginTop: 15,width:"100%" }}
                    variant="outlined"
                    label="Parentesco"
                    value={formData.parentesco}
                    onChange={(e) => handleInputChange('parentesco', e.target.value)}
                />
            </Grid>

            <Grid item xs={12}>
                <FormControl fullWidth style={{ marginTop: 15,width:"98%" }}>
                    <InputLabel id="crear-usuario-label">Crear Usuario</InputLabel>
                    <Select
                        labelId="crear-usuario-label"
                        value={formData.crearUsuario}
                        onChange={(e) => handleInputChange('crearUsuario', e.target.value)}
                    >
                        <MenuItem value="si">Sí</MenuItem>
                        <MenuItem value="no">No</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={12}>
        <TextField
          fullWidth
          style={{ marginTop: 15 }}
          variant="outlined"
          label="Crear Contraseña"
          type={formData.mostrarContrasena ? 'text' : 'password'} // Tipo de entrada condicional según el estado mostrarContrasena
          value={formData.crearContrasena}
          onChange={(e) => handleInputChange('crearContrasena', e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={toggleMostrarContrasena}
                  edge="end"
                >
                  {formData.mostrarContrasena ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </Grid>

            <Grid item container justifyContent="flex-end">
                <Grid item xs={12} sm={5} md={4}>
                    <Button
                        style={{ margin: 8 }}
                        color="primary"
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
}
