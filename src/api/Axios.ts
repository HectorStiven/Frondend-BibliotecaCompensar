import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://backend-bibliotecacompensar-production-8ff5.up.railway.app', // Reemplaza con la URL base de tu API
  });