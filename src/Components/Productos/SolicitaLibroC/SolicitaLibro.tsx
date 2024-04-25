import { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { Title } from '../../../Elements/Titulo/Titulo';
import { BuscadorUsuarios } from './BuscadorUsuarios/BuscadorUsuarios';
import AddCircleIcon from "@mui/icons-material/AddCircle"; // Importa el icono AddCircle

export const SolicitaLibro: React.FC = () => {
  const [form, setForm] = useState({
    titulo_libro: '',
    fecha_prestamo: '',
    dias_prestamo: '',
    observaciones: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setForm({
      ...form,
      [field]: value
    });
  };

  return (
    <Grid container spacing={2}>

      <Grid item xs={12}>
        <BuscadorUsuarios />
      </Grid>
      <Grid item xs={12}>
        <Title title="Formulario Solicitud" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          value={form.titulo_libro}
          label="Título de libro"
          onChange={(e) => handleInputChange('titulo_libro', e.target.value)}
          sx={{ borderRadius: '20px' }}
        />
      </Grid>
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
          type="number"
          size="small"
          variant="outlined"
          value={form.dias_prestamo}
          label="Días de préstamo"
          onChange={(e) => handleInputChange('dias_prestamo', e.target.value)}
          sx={{ borderRadius: '20px' }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          value={form.observaciones}
          label="Observaciones"
          onChange={(e) => handleInputChange('observaciones', e.target.value)}
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
              startIcon={<AddCircleIcon />}
            // onClick={handleSearch}
            >
              Solicitar
            </Button>
          </Grid>
        </Grid>
      </Grid>


    </Grid>
  );
};
