import { Routes, Route } from 'react-router-dom';
import { Inicio } from '../Components/Inicio/Inicio';
import { Productos } from '../Components/Productos/Productos';
import { Contacto } from '../Components/Contacto/Contacto';
import { Page404 } from '../Elements/Pag404/Pag404';
import { RoutesRegistro } from '../Components/Pedidos/routes/RoutesRegistro';

export const RutasPrincipales = () => {
  return (
    <Routes >
      <Route path="/" element={<>hola perras</>} />

      <Route path="/Inicio" element={<Inicio />} />
      <Route path="/Prestamos" element={<Productos />} />
      <Route path="/Registro/*" element={<RoutesRegistro />} /> {/* Utilizando la subruta aquí */}
      <Route path="/Contacto" element={<Contacto />} />
      <Route path="*" element={<Page404 />} />

    </Routes>
  );
}
