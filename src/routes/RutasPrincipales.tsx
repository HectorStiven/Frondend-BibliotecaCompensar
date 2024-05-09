import { Routes, Route } from 'react-router-dom';
import { Productos } from '../Components/Productos/Productos';
import { Contacto } from '../Components/Contacto/Contacto';
import { Page404 } from '../Elements/Pag404/Pag404';
import { RoutesInicio } from '../Components/Inicio/routes/RoutesRegistro';
import { ImagenfONDO } from '../Elements/App-Bar/ImagenPortada';

export const RutasPrincipales = () => {
  return (
    <Routes >
      <Route path="/" element={<ImagenfONDO/>} />

      <Route path="/Inicio/*" element={<RoutesInicio />} />
      <Route path="/Prestamos" element={<Productos />} />
      <Route path="/Contacto" element={<Contacto />} />
      <Route path="*" element={<Page404 />} />

    </Routes>
  );
}
