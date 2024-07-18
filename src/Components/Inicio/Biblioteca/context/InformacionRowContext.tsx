import React, { createContext, useState, useContext } from 'react';
import { Libro } from '../interface/LibroInterfaz';

// Define el tipo para la información de la fila seleccionada
interface InformacionRow {
  libroSeleccionado: Libro | null;
  setLibroSeleccionado: React.Dispatch<React.SetStateAction<Libro | null>>;
}

// Crea el contexto
export const InformacionRowContext = createContext<InformacionRow>({
  libroSeleccionado: null,
  setLibroSeleccionado: () => {},
});

// Proveedor del contexto para manejar el estado de la fila seleccionada
export const InformacionRowProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [libroSeleccionado, setLibroSeleccionado] = useState<Libro | null>(null);

  return (
    <InformacionRowContext.Provider value={{ libroSeleccionado, setLibroSeleccionado }}>
      {children}
    </InformacionRowContext.Provider>
  );
};


export const useInformacionRowContext = () => {
    const context = useContext(InformacionRowContext);
    if (!context) {
      throw new Error('useInformacionRowContext debe ser usado dentro de un InformacionRowProvider');
    }
    return context;
  };