import React, { useState } from 'react';
import { Button, Grid, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Title } from '../../../Elements/Titulo/Titulo';
import { BuscadorUsuarios } from './BuscadorUsuarios/BuscadorUsuarios';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { api } from '../../../api/Axios';
import { control_success } from '../../../Elements/alertas/alertaSucces';

// Estado inicial del formulario
const initialForm = {
  fecha_prestamo: "",
  fecha_devolucion_libro: "",
  tiempo_devolucion_dias: 0,
  ya_devuelto: true,
  fecha_devolucion_real: "",
  observaciones_devolucion: "",
  dias_mora: "0",
  libro: "100001",
  estudiante: 0
};


export const SolicitaLibro: React.FC = () => {
  const [form, setForm] = useState(initialForm);

  const handleInputChange = (field: string, value: any) => {
    setForm({
      ...form,
      [field]: value
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await api.post('/universidad/crear_prestamo/', form);
      console.log('Respuesta del servidor:', res.data);
      control_success('Se solicito correctamente');

      // Maneja la respuesta del servidor aquí, como mostrar un mensaje de éxito
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      // Maneja el error aquí, como mostrar un mensaje de error
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <BuscadorUsuarios />
      </Grid>
      <Grid item xs={12}>
        <Title title="Formulario Solicitud" />
      </Grid>

      {/* Campos del formulario */}
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          type="date"
          size="small"
          variant="outlined"
          value={form.fecha_prestamo}
          label="Fecha de préstamo"
          onChange={(e) => handleInputChange('fecha_prestamo', e.target.value)}
          InputLabelProps={{ shrink: true }}
          sx={{ borderRadius: '20px' }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          type="date"
          size="small"
          variant="outlined"
          value={form.fecha_devolucion_libro}
          label="Fecha de devolución libro"
          onChange={(e) => handleInputChange('fecha_devolucion_libro', e.target.value)}
          InputLabelProps={{ shrink: true }}
          sx={{ borderRadius: '20px' }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          type="number"
          size="small"
          variant="outlined"
          value={form.tiempo_devolucion_dias}
          label="Tiempo de devolución (días)"
          onChange={(e) => handleInputChange('tiempo_devolucion_dias', e.target.value)}
          sx={{ borderRadius: '20px' }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth size="small" variant="outlined">
          <InputLabel>Ya devuelto</InputLabel>
          <Select
            value={form.ya_devuelto}
            label="Ya devuelto"
            onChange={(e) => handleInputChange('ya_devuelto', e.target.value === 'true')}
            sx={{ borderRadius: '0px' }}
          >
            <MenuItem value="true">Sí</MenuItem>
            <MenuItem value="false">No</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          type="date"
          size="small"
          variant="outlined"
          value={form.fecha_devolucion_real}
          label="Fecha de devolución real"
          onChange={(e) => handleInputChange('fecha_devolucion_real', e.target.value)}
          InputLabelProps={{ shrink: true }}
          sx={{ borderRadius: '20px' }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          value={form.observaciones_devolucion}
          label="Observaciones de devolución"
          onChange={(e) => handleInputChange('observaciones_devolucion', e.target.value)}
          sx={{ borderRadius: '20px' }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          type="number"
          size="small"
          variant="outlined"
          value={form.dias_mora}
          label="Días de mora"
          onChange={(e) => handleInputChange('dias_mora', e.target.value)}
          sx={{ borderRadius: '20px' }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          value={form.libro}
          label="ID del libro"
          onChange={(e) => handleInputChange('libro', e.target.value)}
          sx={{ borderRadius: '20px' }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          type="number"
          size="small"
          variant="outlined"
          value={form.estudiante}
          label="ID del estudiante"
          onChange={(e) => handleInputChange('estudiante', e.target.value)}
          sx={{ borderRadius: '20px' }}
        />
      </Grid>

      <Grid item xs={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Button
              variant="contained"
              color="primary"
              style={{ width: "95%", height: "70%", color: "white", backgroundColor: "green" }}
              size="small"
              startIcon={<AddCircleIcon />}
              onClick={handleSubmit}
            >
              Solicitar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
