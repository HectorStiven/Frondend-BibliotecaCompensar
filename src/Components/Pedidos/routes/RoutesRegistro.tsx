import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PedidoPrincipal } from '../Pedido';
import { Libros } from '../Components/Libros/Libros';
import { PantallaPrincipalUsuario } from '../Components/Usuario/PantallaPrincipalUsuario';


export const RoutesRegistro = () => {
  return (
    <Routes>
      <Route path="/*" element={<PedidoPrincipal />} /> {/* Ruta principal del módulo de Registro */}
      <Route path="/Usuario" element={<PantallaPrincipalUsuario/>} /> {/* Subruta 1 */}
      <Route path="/resumen_estadistico" element={<>resumen_estadistico</>} /> {/* Subruta 2 */}
      <Route path="/confiduracion_datos" element={<>confiduracion_datos</>} /> {/* Subruta 2 */}
      <Route path="/Libros" element={<Libros />} />

    </Routes>
  );
}
