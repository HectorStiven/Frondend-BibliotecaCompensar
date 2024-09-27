import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Libros } from '../components/Libros/Libros';
import { PantallaPrincipalUsuario } from '../components/Usuario/PantallaPrincipalUsuario';
import { Inicio } from '../Inicio';
import { PantallaPrincipalBiblioteca } from '../Biblioteca/screens/PantallaPrincipalBiblioteca';
import { ResumenEstadisticoScreen } from '../components/ResumenEstadistivo/ResumenEstadisticoScreen';
// import { MyComponent } from '../Biblioteca/Toolkit/Probarslice';
import { InformacionRowProvider } from '../Biblioteca/context/InformacionRowContext';
import { BusacarLectorScreen } from '../components/BuscarLector/BusacarLectorScreen';
import { Chatbot } from '../../Chatbot/Chatbot';
import { TableroFirma } from '../../BableroFirma/TableroFirma';


export const RoutesInicio = () => {
  return (
    <InformacionRowProvider>
    <Routes>
      <Route path="/*" element={<Inicio />} /> {/* Ruta principal del módulo de Registro */}
      <Route path="/Usuario" element={<PantallaPrincipalUsuario/>} /> {/* Subruta 1 */}
      <Route path="/resumen_estadistico" element={<ResumenEstadisticoScreen/>} /> {/* Subruta 2 */}
      <Route path="/confiduracion_datos" element={<>confiduracion_datos</>} /> {/* Subruta 2 */}
      <Route path="/Libros" element={<Libros />} />
      <Route path="/Biblioteca" element={<PantallaPrincipalBiblioteca />} />
      <Route path="/BuscarLector" element={<BusacarLectorScreen />} />
      <Route path="/PruebaChat" element={<Chatbot />} />
      <Route path="TableroFirma" element={<TableroFirma/>} />
F
    </Routes>
    </InformacionRowProvider>
  );
}
