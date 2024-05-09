import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Libros } from '../components/Libros/Libros';
import { PantallaPrincipalUsuario } from '../components/Usuario/PantallaPrincipalUsuario';
import { Inicio } from '../Inicio';
import { PantallaPrincipalBiblioteca } from '../Biblioteca/screens/PantallaPrincipalBiblioteca';


export const RoutesInicio = () => {
  return (
    <Routes>
      <Route path="/*" element={<Inicio />} /> {/* Ruta principal del módulo de Registro */}
      <Route path="/Usuario" element={<PantallaPrincipalUsuario/>} /> {/* Subruta 1 */}
      <Route path="/resumen_estadistico" element={<>resumen_estadistico</>} /> {/* Subruta 2 */}
      <Route path="/confiduracion_datos" element={<>confiduracion_datos</>} /> {/* Subruta 2 */}
      <Route path="/Libros" element={<Libros />} />
      <Route path="/Biblioteca" element={<PantallaPrincipalBiblioteca />} />
      
    </Routes>
  );
}
