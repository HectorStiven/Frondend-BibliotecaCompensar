import React, { useState } from 'react';
import { Avatar, Button, Grid, MenuItem, Typography } from '@mui/material';

interface MenuUsuarioProps {
  set_entrar_aplicacion: React.Dispatch<React.SetStateAction<boolean>>;
  handleCloseUserMenu: () => void;
}

export const MenuUsuario: React.FC<MenuUsuarioProps> = ({ set_entrar_aplicacion, handleCloseUserMenu }) => {
  const userData = {
    name: "Nombre de Usuario",
    email: "usuario@example.com",
    role: "Administrador",
    lastLogin: "Último inicio de sesión: 21 de octubre de 2023",
  };

  const settings = ['Configuración', 'Ayuda', 'Notificaciones', 'Perfil', 'Cuenta', 'Dashboard', 'Cerrar Sesión'];
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2}>
      <Grid item>
        <Avatar alt="Usuario" src="/static/images/avatar.jpg" sx={{ width: 120, height: 120 }} />
      </Grid>
      <Grid item>
        <Typography variant="h6" align="center">{userData.name}</Typography>
        <Typography variant="body2" align="center">{userData.email}</Typography>
        <Typography variant="body2" align="center">Rol: {userData.role}</Typography>
        <Typography variant="body2" align="center">{userData.lastLogin}</Typography>
      </Grid>
      <Grid item>
        {settings.map((setting) => (
          <MenuItem
            key={setting}
            onClick={handleCloseUserMenu}
            onMouseEnter={() => setSelectedItem(setting)}
            onMouseLeave={() => setSelectedItem(null)}
            sx={{ boxShadow: selectedItem === setting ? '0px 0px 10px 0px rgba(0,255,0,0.75)' : 'none' }}
          >
            <Typography variant="body1" align="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          style={{ width: 200 ,marginTop:"140%"}}
          color="error"
          onClick={() => set_entrar_aplicacion(false)}
        >
          Salir
        </Button>
      </Grid>
    </Grid>
  );
};
