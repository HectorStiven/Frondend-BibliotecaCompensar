import { Routes, Route } from 'react-router-dom';
import { Inicio } from '../Components/Inicio/Inicio';
import { Productos } from '../Components/Productos/Productos';
import { Contacto } from '../Components/Contacto/Contacto';
import { PedidoPrincipal } from '../Components/Pedidos/Pedido';
import { Page404 } from '../Elements/Pag404/Pag404';
import { Libros } from '../Components/Libros/Libros';

export const RutasPrincipales = () => {
  return (
    <Routes >
      <Route path="/" element={<>hola perras</>} />

      <Route path="/Inicio" element={<Inicio />} />
      <Route path="/Prestamos" element={<Productos />} />
      <Route path="/Registro" element={<PedidoPrincipal />} />
      <Route path="/Contacto" element={<Contacto />} />
      <Route path="/Libros" element={<Libros />} />
      <Route path="*" element={<Page404 />} />

    </Routes>
  );
}
