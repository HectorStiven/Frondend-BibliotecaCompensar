import React, { useState, useEffect } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { Title } from '../../../Elements/Titulo/Titulo';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { api } from '../../../api/Axios';
import { control_success } from '../../../Elements/alertas/alertaSucces';
import { BuscarLector } from '../../Inicio/components/BuscarLector/BuscarLector';
import { UsuarioRegistrado } from '../../Inicio/components/interfaces/LectorInterfaces';
import { useSelector } from 'react-redux';

const initialForm = {
  fecha_prestamo: "",
  fecha_devolucion_libro: "",
  tiempo_devolucion_dias: 0,
  ya_devuelto: false,
  fecha_devolucion_real: null, // Usar null en lugar de ""
  observaciones_devolucion: "",
  dias_mora: "0",
  libro: "",
  estudiante: 0
};

export const SolicitaLibro: React.FC = () => {
  const [selectedRow, setSelectedRow] = useState<UsuarioRegistrado>();
  const [form, setForm] = useState(initialForm);
  const idLibro = useSelector((state: any) => state.libroPersona.id_libro);
  const nombreLibro = useSelector((state: any) => state.libroPersona.nombre_libro);

  useEffect(() => {
    // Set the current date as the loan date when the component mounts
    const currentDate = new Date().toISOString().split('T')[0];
    setForm(prevForm => ({ ...prevForm, fecha_prestamo: currentDate }));
  }, []);

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
      control_success('Se solicitó correctamente');
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };



  const handleRowSelect = (row: any) => {
    setSelectedRow(row);
    console.log('Información de la fila seleccionada:', row);
    setForm({
      ...form,
      estudiante: row.id // Assuming 'id' is the ID of the selected student
    });
  };


  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Title title="Formulario Solicitud" />
      </Grid>

      <Grid item xs={12}>
        <BuscarLector onRowSelect={handleRowSelect} />
      </Grid>

      {selectedRow && (
        <>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              value={selectedRow.primer_nombre}
              label="Primer Nombre"
              disabled
              sx={{ borderRadius: '20px' }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              value={selectedRow.numero_celular}
              label="Número de Celular"
              disabled
              sx={{ borderRadius: '20px' }}
            />
          </Grid>
        </>
      )}

      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          disabled
          value={idLibro}
          label="ID del libro"
          onChange={(e) => handleInputChange('libro', e.target.value)}
          sx={{ borderRadius: '20px' }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          disabled
          value={nombreLibro}
          label="Nombre del libro"
          // onChange={(e) => handleInputChange('libro', e.target.value)}
          sx={{ borderRadius: '20px' }}
        />
      </Grid>
      
      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          type="date"
          size="small"
          variant="outlined"
          value={form.fecha_prestamo}
          label="Fecha de préstamo"
          onChange={(e) => handleInputChange('fecha_prestamo', e.target.value)}
          InputLabelProps={{ shrink: true }}
          disabled
          sx={{ borderRadius: '20px' }}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
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
      <Grid item xs={12} sm={4}>
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


      <Grid item xs={12}>
        <TextField
          fullWidth
          multiline
          rows={2}
          size="small"
          variant="outlined"
          value={form.observaciones_devolucion}
          label="Observaciones de devolución"
          onChange={(e) => handleInputChange('observaciones_devolucion', e.target.value)}
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
