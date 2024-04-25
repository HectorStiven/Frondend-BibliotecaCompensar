import './App.css';
import { ResponsiveAppBar } from './Elements/App-Bar/AppBar';
import { BrowserRouter as Router } from 'react-router-dom';
import { RutasPrincipales } from './routes/RutasPrincipales';
import { AlertasContext } from './Elements/Context/ContextModoDark';
import { useContext, useState } from 'react';
import { LoginBase } from './Login/LoginBase';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Grid } from '@mui/material';

export const App = () => {

  const [entrar_aplicacion, set_entrar_aplicacion] = useState<boolean>(true);
  const { modo_dark_numero } = useContext(AlertasContext);

  // Establece el fondo en función del valor de modo_dark_numero
  const appStyle = {
    backgroundColor: modo_dark_numero,
    minHeight: '100vh',

  };

  return (
    <div className="App" style={appStyle}>
      {entrar_aplicacion === false && (
        <LoginBase set_entrar_aplicacion={set_entrar_aplicacion} />
      )}


      {entrar_aplicacion && (
        <Router>
          <Grid container spacing={0} style={{ minHeight: '100vh' }} justifyContent="center" alignItems="center">
            <Grid item xs={12} style={{ minHeight: '70' }}>
              <ResponsiveAppBar set_entrar_aplicacion={set_entrar_aplicacion} />
            </Grid>
            <Grid item xs={11.5} style={{ minHeight: '100vh',marginTop:15}}>
              <RutasPrincipales />
            </Grid>
          </Grid>
        </Router>
      )}
      <ToastContainer />
    </div>
  );
};
