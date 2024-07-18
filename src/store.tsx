import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import LoginSlice from "./Login/toolkit/slice/LoginSlice";
import libroPersonaSlice from "./Components/Inicio/Biblioteca/Toolkit/slice/libroPersonaSlice ";

/**
 * Configuration object for persisting state in the application.
 * @typedef {Object} PersistConfiguration
 * @property {string} key - The key used to store the state in the storage.
 * @property {Object} storage - The storage object used to persist the state.
 * @property {string[]} whitelist - The list of state properties to be persisted.
 */

const persistConfiguration = {
  key: "Proyecto-inicial",
  storage: sessionStorage,
  whitelist: ["auth", "layout", "login", "libroPersona"], // Añadir libroPersona a la lista blanca
};

const appReducers = combineReducers({
  login: LoginSlice.reducer,
  libroPersona: libroPersonaSlice, // Añadir el nuevo reducer

  // auth: authSlice.reducer,
});

const persistedReducer = persistReducer(persistConfiguration, appReducers);

export const store = configureStore({
  reducer: persistedReducer,
});
