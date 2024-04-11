import React, { useState } from "react";
import { TextField, Button, IconButton, Grid, FormControl, Box, Typography, InputLabel, Input, Link } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { control_success } from "../Elements/alertas/alertaSucces";
import { ImagenFondo } from "../Elements/App-Bar/ImagenPortada";
import { useDispatch } from "react-redux";
import { login } from "./toolkit/slice/LoginSlice";
import { Card, TextFieldCompleto, buttonMax, footerSpacing, formControl, mtComponent } from "./Styles/StyleInicio";
import RegistrarUser from "./Registrarse";


export const LoginBase = ({ set_entrar_aplicacion }: any) => {
  const dispatch = useDispatch();

  const [usuario, setUsuario] = useState<string>("");
  const [contrasena, setContrasena] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const usuariosYContrasenas = [
    { usuario: "miguel", contrasena: "1234" },
    { usuario: "stiven", contrasena: "1234" },
    { usuario: "jhon", contrasena: "1234" },
    { usuario: "Gxrman.exe", contrasena: "DevHome" },
  ];


  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      login({
        usuario,
        contrasena,
      })
    );

    const usuarioValido = usuariosYContrasenas.find(
      (user) => user.usuario === usuario && user.contrasena === contrasena
    );

    if (usuarioValido) {
      set_entrar_aplicacion(true);
      control_success("Bienvenido" + " " + usuario);
    } else {
      console.log("Credenciales incorrectas");
    }
  };

  return (
    <div>
      <ImagenFondo />
      <form onSubmit={handleLogin}>
        <Grid alignItems={"center"} container spacing={0} justifyContent={"center"} direction={"column"}>
          <Grid alignItems={"center"} item xs={11} sm={11} md={5}>
            <Box sx={Card}>
              <Grid alignItems={"center"} container spacing={0} justifyContent={"space-between"}>
                <Grid alignItems={"center"} item xs={6} sm={5} md={5} sx={mtComponent}>
                  <Typography variant="h5">
                    Bienvenido,
                    Por favor inicie sesion
                  </Typography>
                </Grid>
                <Grid alignItems={"center"} item xs={6} sm={6} md={5} sx={mtComponent}>
                  <img src="../image/Logo-Compensar.png"
                    alt="Logo UCompensar"
                    style={{ width: '100%' }} />
                </Grid>
              </Grid>
              <Grid alignItems={"center"} container spacing={0} justifyContent={"center"}>
                <Grid alignItems={"center"} item xs={10} sm={8} md={7}>
                  <TextField id="standard-basic" label="Usuario" value={usuario}
                    onChange={(e) => setUsuario(e.target.value)} variant="standard" sx={TextFieldCompleto} />
                </Grid>
                <Grid alignItems={"center"} item xs={10} sm={8} md={7}>

                  <FormControl sx={formControl} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Contraseña</InputLabel>
                    <Input
                      id="standard-adornment-password"
                      type={showPassword ? 'text' : 'password'}
                      value={contrasena}
                      onChange={(e) => setContrasena(e.target.value)}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid alignItems={"center"} container spacing={1} justifyContent={"space-evenly"} sx={mtComponent}>
                <Grid alignItems={"center"} item xs={8} sm={5} md={5}>
                  <Button variant='contained' type="submit" sx={buttonMax}>
                    INGRESAR
                  </Button>
                </Grid>
                <Grid alignItems={"center"} item xs={8} sm={5} md={5}>
                  <RegistrarUser />
                </Grid>
              </Grid>
              <Grid alignItems={"center"} container spacing={1} justifyContent={"center"} sx={footerSpacing}>
                <Grid alignItems={"center"} item xs={6}>
                  <Link href="#" underline="none">
                    {'¿Olvido su contraseña?'}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
