import React, { useState } from 'react';
import { Grid, Typography, TextField, Button, List, ListItem, ListItemText, ListItemIcon, Link, Card, CardContent, Accordion, AccordionSummary, AccordionDetails, Avatar } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Geolocalizacion } from './Mapa/Mapa';
import { Title } from '../../Elements/Titulo/Titulo';

export const Contacto = () => {
  const [suggestion, setSuggestion] = useState('');

  const handleSuggestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSuggestion(event.target.value);
  };

  const handleSuggestionSubmit = () => {
    // Aquí puedes manejar el envío de la sugerencia
    console.log('Sugerencia enviada:', suggestion);
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
        <Title title="Contacto" />
      </Grid>

      <Grid item xs={12} sx={{ mb: 4 }}>
        <Geolocalizacion coordenada_x={222} coordenada_y={222} />
      </Grid>

      <Grid item xs={12} sx={{ mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText primary="Teléfono" secondary="+123 456 7890" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary="Email" secondary="biblioteca@ejemplo.com" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Dirección" secondary="Calle Falsa 123, Ciudad, País" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AccessTimeIcon />
                </ListItemIcon>
                <ListItemText primary="Horario" secondary="Lunes a Viernes: 9:00 AM - 6:00 PM" />
              </ListItem>
            </List>
          </Grid>
        </Grid>




      </Grid>

      <Grid item xs={12} sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>Preguntas Frecuentes (FAQ)</Typography>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>¿Cómo puedo registrarme en la biblioteca?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Puedes registrarte en la biblioteca llenando el formulario de inscripción disponible en el sitio web o visitando nuestras instalaciones.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>¿Cuál es el horario de atención?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nuestro horario de atención es de lunes a viernes de 9:00 AM a 6:00 PM.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>¿Cómo puedo donar libros a la biblioteca?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Puedes donar libros contactándonos por teléfono o email, o directamente en nuestras instalaciones.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>

      <Grid item xs={12} sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>Equipo de la Biblioteca</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Avatar src="/images/staff1.jpg" />
                <Typography variant="subtitle1">Juan Pérez</Typography>
                <Typography variant="body2">Director</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Avatar src="/images/staff2.jpg" />
                <Typography variant="subtitle1">María López</Typography>
                <Typography variant="body2">Bibliotecaria</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Avatar src="/images/staff3.jpg" />
                <Typography variant="subtitle1">Pedro Sánchez</Typography>
                <Typography variant="body2">Asistente</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Avatar src="/images/staff4.jpg" />
                <Typography variant="subtitle1">Ana García</Typography>
                <Typography variant="body2">Recepcionista</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>Eventos y Noticias</Typography>
        <Card>
          <CardContent>
            <Typography variant="h6">Próximos Eventos</Typography>
            <Typography variant="body2">Club de Lectura: 20 de Julio, 5:00 PM</Typography>
            <Typography variant="body2">Taller de Escritura: 25 de Julio, 3:00 PM</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>Formulario de Sugerencias</Typography>
        <TextField
          label="Escribe tu sugerencia"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={suggestion}
          onChange={handleSuggestionChange}
        />
        <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleSuggestionSubmit}>
          Enviar Sugerencia
        </Button>
      </Grid>


      <Typography variant="h6" gutterBottom>Redes Sociales</Typography>
      <Grid container spacing={2}>
        <Grid item>
          <Link href="https://www.facebook.com" target="_blank" rel="noopener">
            <FacebookIcon fontSize="large" />
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://www.twitter.com" target="_blank" rel="noopener">
            <TwitterIcon fontSize="large" />
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://www.instagram.com" target="_blank" rel="noopener">
            <InstagramIcon fontSize="large" />
          </Link>
        </Grid>

      </Grid>

    </Grid>
  );
};
