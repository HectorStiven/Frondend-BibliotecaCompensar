import { createSlice } from "@reduxjs/toolkit";

// Estado inicial del slice
const initialState = {
  id_libro: null,
  id_persona: null,
  nombre_libro:""
};

export const libroPersonaSlice = createSlice({
  name: "libroPersona",
  initialState,
  reducers: {
    setIdLibro: (state, action) => {
      state.id_libro = action.payload;
    },
    setIdPersona: (state, action) => {
      state.id_persona = action.payload;
    },
    setNombre: (state, action) => {
      state.nombre_libro = action.payload;
    },
    clearIds: (state) => {
      state.id_libro = null;
      state.id_persona = null;
      state.nombre_libro = "";

    },
  },
});

// Exportar acciones
export const { setIdLibro, setIdPersona, clearIds ,setNombre} = libroPersonaSlice.actions;

// Exportar el reducer
export default libroPersonaSlice.reducer;
