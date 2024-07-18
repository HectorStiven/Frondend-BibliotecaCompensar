import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button } from '@mui/material';
import { clearIds, setIdLibro, setIdPersona } from './slice/libroPersonaSlice ';

export const MyComponent = () => {
  const dispatch = useDispatch();
  const idLibro = useSelector((state:any) => state.libroPersona.id_libro);
  const idPersona = useSelector((state:any) => state.libroPersona.id_persona);

  const [libroInput, setLibroInput] = useState('');
  const [personaInput, setPersonaInput] = useState('');

  const handleSetIdLibro = () => {
    dispatch(setIdLibro(libroInput)); // Set id_libro with input value
  };

  const handleSetIdPersona = () => {
    dispatch(setIdPersona(personaInput)); // Set id_persona with input value
  };

  const handleClearIds = () => {
    dispatch(clearIds()); // Clear ids
  };

  return (
    <div>
      <div>ID Libro: {idLibro}</div>
      <div>ID Persona: {idPersona}</div>
      <TextField
        label="ID Libro"
        value={libroInput}
        onChange={(e) => setLibroInput(e.target.value)}
        variant="outlined"
        size="small"
        margin="normal"
      />
      <TextField
        label="ID Persona"
        value={personaInput}
        onChange={(e) => setPersonaInput(e.target.value)}
        variant="outlined"
        size="small"
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSetIdLibro}>
        Set ID Libro
      </Button>
      <Button variant="contained" color="primary" onClick={handleSetIdPersona}>
        Set ID Persona
      </Button>
      <Button variant="contained" color="secondary" onClick={handleClearIds}>
        Clear IDs
      </Button>
    </div>
  );
};

export default MyComponent;
