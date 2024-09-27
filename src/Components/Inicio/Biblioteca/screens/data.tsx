import { Chip } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";

// export const columns: GridColDef[] = [
//   { field: "idProducto", headerName: "ID Producto", flex: 1 },
//   { field: "nombreProducto", headerName: "Nombre Producto", flex: 2 },
//   { field: "cantidad", headerName: "Cantidad", flex: 1, type: "number" },
//   {
//     field: "activo",
//     headerName: "Activo",
//     flex: 1,
//     renderCell: (params) => (
//       <Chip
//         label={params.value ? "Sí" : "No"}
//         color={params.value ? "success" : "error"}
//       />
//     ),
//   },
//   {
//     field: "cantidadEnBodega",
//     headerName: "Cantidad en Bodega",
//     flex: 1,
//     type: "number",
//   },
//   { field: "empresa", headerName: "Empresa", flex: 2 },
//   { field: "region", headerName: "Región", flex: 2 },
// ];

// const productNames = [
//   "Laptop",
//   "Mouse",
//   "Teclado",
//   "Monitor",
//   "Impresora",
//   "Disco Duro",
//   "Memoria USB",
//   "Cámara Web",
//   "Auriculares",
//   "Altavoces",
//   "Cable HDMI",
//   "Router",
//   "Modem",
//   "Cargador",
//   "Smartphone",
//   "Tablet",
//   "Proyector",
//   "Batería Externa",
//   "Silla de Oficina",
//   "Escritorio",
//   "Switch de Red",
//   "Repetidor WiFi",
//   "Escáner",
//   "Micrófono",
//   "Joystick",
//   "Control Remoto",
//   "Tarjeta Gráfica",
//   "CPU",
//   "Placa Base",
//   "Memoria RAM",
//   "Fuente de Alimentación",
//   "Ventilador",
//   "Cinta Adhesiva",
//   "Calculadora",
//   "Tijeras",
//   "Grapadora",
//   "Lápiz",
//   "Bolígrafo",
//   "Cuaderno",
//   "Agenda",
//   "Cinta Correctora",
//   "Papel A4",
//   "Archivador",
//   "Pizarra",
//   "Marcadores",
//   "Carpeta",
//   "Tarjeta de Red",
//   "Disco SSD",
//   "Torre de PC",
//   "Soporte de Monitor",
//   "Enrutador VPN",
//   "Cinta de Impresora",
//   "Reloj Inteligente",
//   "Adaptador USB",
//   "Ratón Inalámbrico",
//   "Cargador Rápido",
//   "Power Bank",
//   "Pantalla Táctil",
//   "Monitor Curvo",
//   "Webcam HD",
//   "Altavoz Bluetooth",
//   "Micrófono Inalámbrico",
//   "Pendrive",
//   "Unidad DVD",
//   "Placa Arduino",
//   "Cable Ethernet",
//   "Estación de Carga",
//   "Teclado Mecánico",
//   "Soporte de Portátil",
//   "Base de Refrigeración",
//   "Mochila para Laptop",
//   "Bolso para Cámara",
//   "Proyector 4K",
//   "Cámara de Seguridad",
//   "Kit de Herramientas",
//   "Lector de Tarjetas",
//   "Termómetro Digital",
//   "Lámpara de Escritorio",
//   "Balanza Digital",
//   "Teléfono Fijo",
//   "Micrófono de Solapa",
//   "Auricular Bluetooth",
//   "Teclado Inalámbrico",
//   "Hub USB",
//   "Gafas VR",
//   "Disco NAS",
//   "Lápiz Óptico",
//   "Soporte de Teclado",
//   "Microscopio Digital",
//   "Parlante Portátil",
//   "Proyector de Diapositivas",
//   "Cable VGA",
//   "Mini PC",
//   "Monitor 4K",
//   "Smartwatch",
//   "Teclado RGB",
//   "Reloj de Pared",
//   "Termostato Inteligente",
//   "Teléfono IP",
//   "Cámara Digital",
//   "Router 5G",
//   "Receptor de Audio",
//   "Impresora 3D",
// ];

// const generateProducts = (numProducts: any) => {
//   const products = [];
//   for (let i = 1; i <= numProducts; i++) {
//     products.push({
//       idProducto: i,
//       nombreProducto: productNames[i % productNames.length] + ` ${i}`, // Nombres variados y únicos
//       cantidad: Math.floor(Math.random() * 100), // Cantidad aleatoria entre 0 y 100
//       activo: Math.random() > 0.5, // Valor booleano aleatorio
//       cantidadEnBodega: Math.floor(Math.random() * 500), // Cantidad en bodega entre 0 y 500
//       empresa: "MASTER SOUND",
//       region: "COLOMBIA",
//     });
//   }
//   return products;
// };

// export const data = generateProducts(1000);
export const columns: GridColDef[] = [
    { field: "cedula", headerName: "Cédula", flex: 1 },
    { field: "nombre", headerName: "Nombre", flex: 2 },
    { field: "telefono", headerName: "Teléfono", flex: 1 },
    { field: "correo", headerName: "Correo", flex: 2 },
    { field: "cuenta", headerName: "Cuenta", flex: 2 },
  ];

  const names = [
    "Juan Pérez", "María López", "Carlos Gómez", "Ana Torres",
    "Luis Martínez", "Laura Sánchez", "Jorge Ramírez", "Patricia Díaz",
    "Andrés Herrera", "Carmen Ruiz", "Fernando Morales", "Lucía Romero",
    "Diego Castro", "Sofía Jiménez", "Felipe Mendoza", "Claudia Vargas",
    "Oscar Salazar", "Natalia Reyes", "Ricardo Soto", "Valentina Delgado",
    "Miguel Ángel", "Isabella Ortega", "Julian Pineda", "Sara Gutiérrez",
    "Emilio Acosta", "Paola Ríos", "Arturo Salinas", "Silvia Castro",
    "David Rojas", "Gina Herrera", "Nicolás Torres", "Karina Medina",
    "Rafael Ocampo", "Mónica Camacho", "Hugo Acuña", "Gabriela Salas",
    "Esteban Palacios", "Diana López", "Mauricio Aguirre", "Sara Muñoz",
    "Julián Caballero", "Angela Cortés", "Leonardo Martínez", "Juliana León",
    "Camilo Castaño", "Evelyn Salazar", "Fernando Álvarez", "Alba Jiménez",
    "Fabián Castro", "Laura Muñoz", "Ricardo Ortega", "Paula Cordero",
    "Isabel Salinas", "Julio Vallejo", "Tatiana Rodríguez", "Diego Aguirre",
    "Marcela Hernández", "Julio Carrillo", "Nicolás Ramos", "Adriana Pineda",
    "Cristian Torres", "Katherine Rodríguez", "Julián Mendoza", "Gabriel Díaz",
    "Luciana Ortega", "Joaquín Salazar", "Florencia Castro", "Milagros Torres",
    "Ignacio Medina", "Inés Barrera", "José Castillo", "Martín Cuervo",
    "Valeria Galindo", "Nadia Espinoza", "Hernán Vega", "Estefanía Miranda",
    "Mario Sánchez", "Tamara Pérez", "Esteban Guerra", "Fabiola Correa",
    "Santiago Buitrago", "Valentina Araujo", "Laura Caicedo", "Fernando Quintero",
    "Matías López", "Gabriela Cardona", "Martha Villalba", "Diego Muñoz",
    "Cristina Morales", "Leonardo Figueroa", "Adriana Castro", "Gustavo León",
    "Angélica Gómez", "Claudio Arrieta", "Diana Figueroa", "Mario Quintero",
    "Lina Pérez", "Samuel Martínez", "Sofia García", "Alejandro Jiménez",
    "Natalia Torres", "Camilo Medina", "Sebastián Ríos", "Marisol Salcedo",
    "Silvana Delgado", "Hugo Sánchez", "Julián López", "David García",
    "Ricardo Suárez", "Valeria Pérez", "César Morales", "Patricia Espinosa",
    "Alejandra López", "Cristian Lizarazo", "Jaime Cárdenas", "Claudia Ruiz",
    "Valentina Mendoza", "Rafael Castro", "Juliana Cuervo", "Milena Gómez",
    "Jairo Salazar", "Fabiola Romero", "Mauricio Gallego", "Nina Castaño",
    "Cristian López", "Yuliana Ríos", "Luis Fernando", "Silvia Pacheco",
    "Adrián Muñoz", "Ruth Zambrano", "Marco Romero", "Luisa Méndez",
    "Gabriel Camacho", "Manuela González", "Katherine Vargas", "Héctor Álvarez",
    "Angélica Pulido", "Jhonatan Martínez", "Ximena López", "Daniela Torres",
    "Emilio Castaño", "Victor Ortega", "Mariana Cárdenas", "Valery Martínez",
    "Fernando Ramos", "Alejandro Ceballos", "Gloria Castro", "Natalia López",
    "Ezequiel Herrera", "Silvia Restrepo", "Alfonso Acosta", "Diana Giraldo",
    "José García", "Lucas Medina", "Felipe Gutiérrez", "Ana Múnera",
    "Estefanía Arévalo", "Cristina Romero", "Juan Carlos", "Diana Arango",
    "Santiago Cuervo", "Laura Salas", "Ricardo Durán", "Diego Velásquez",
    "Patricia Mendoza", "Sebastián Pérez", "Luis Eduardo", "Daniela Medina",
    "Alejandra Jiménez", "Santiago Robles", "Juliana Ceballos", "Julio Suárez",
    "Catalina Rodríguez", "Carmen Pineda", "Oscar Ávila", "Sebastián Muñoz",
    "Laura López", "Andrés Sanabria", "María Ruiz", "Alejandro García",
    "Adriana Vargas", "Emilio Rivera", "David Montoya", "Margarita López",
    "José Fernando", "Rafael Téllez", "Ana Beatriz", "Cristian Salas",
    "Hugo Garcés", "David Pineda", "Martín Ruiz", "Eliana Rojas",
    "Ricardo Mejía", "Miguel Gómez", "Fabiana Cárdenas", "Jairo Muñoz",
    "Felipe González", "Cecilia Pérez", "Lucas Cordero", "Angélica Palacios",
    "Sergio Vargas", "María Clara", "Andrés Acevedo", "César González",
    "Lucía Herrera", "David Daza", "Fernando Castro", "Sofía Guerrero",
    "Fernando Silva", "Valentina Salazar", "Samuel Gutiérrez", "César Ramírez",
    "Carolina Acevedo", "Mauricio Rodríguez", "Mariana Jiménez", "Julian Aguirre",
    "José Cuervo", "Esteban Martínez", "Héctor Barrera", "Manuela López",
    "Leonardo López", "Carlos Cárdenas", "Natalia Castro", "Ricardo Acosta",
    "Martha Rodríguez", "Patricia Ceballos", "Gabriel Pérez", "Diana Ramírez",
    "Cristian Sánchez", "Milena López", "Juan Pablo", "Karla Sarmiento",
    "David Cárdenas", "Natalia Suárez", "Miguel Rodríguez", "Felipe Álvarez",
    "José Manuel", "Natalia Guerrero", "Sebastián Figueroa", "Julián Ríos",
    "Sofía Martínez", "Lucía Pérez", "Victor Hugo", "Carmen Rodríguez",
    "Fernando Jiménez", "Katherine López", "Esteban Reyes", "Oscar Rojas",
    "Sara García", "Diego García", "José Miguel", "Fernando Pérez",
    "Carlos Alberto", "María Fernanda", "Diego Suárez", "Andrés Valdés",
    "Santiago Muñoz", "Milena López", "Manuel Vargas", "Sara Torres",
    "Juliana Henao", "Luis Felipe", "Mariana Acuña", "Adriana Marín",
    "Patricia González", "Luis Eduardo", "Daniel Pérez", "Fernando Cuervo",
    "Santiago Guzmán", "Fernando Salinas", "Diego Muñoz", "Valentina Salcedo",
    "Samuel Castro", "Sofía Carrillo", "Ricardo Soto", "Carmen Álvarez",
    "Jorge Pérez", "Juanita López", "Hugo Suárez", "Juan Carlos",
    "Natalia Gutiérrez", "Juliana Pineda", "Sara Ríos", "Adriana García",
    "Álvaro González", "Julián González", "Patricia Valdés", "Isabel Ortiz",
    "Francisco Martínez", "Fernando Acosta", "Lucía Silva", "Daniel Rincón",
    "Tatiana Ríos", "Luis Enrique", "Diana Aguirre", "Andrés Cuervo",
    "Martín Medina", "María Fernanda", "Ana Marcela", "Ricardo León",
    "Gustavo Ríos", "Juan Carlos", "Miguel Ángel", "Gabriel Ramos",
    "Claudia Palacios", "David García", "Paola Pérez", "Fernando Muñoz",
    "Cristian Mendoza", "María José", "Julián López", "José Alberto",
    "Adriana Valencia", "Patricia Salazar", "Juliana Salcedo", "Andrés Camacho",
    "María Camila", "Juan Sebastián", "Oscar Ocampo", "Andrés Giraldo",
    "David Gutiérrez", "Silvia López", "Diana Ruiz", "Fernando Ramos",
    "Santiago Castro", "Gabriela Salazar", "Laura Londoño", "Felipe Marín",
    "Luis Miguel", "José Daniel", "Andrés Buitrago", "Gabriela Quintero",
    "Julián Rojas", "Martha López", "Valeria Zamora", "David Martínez",
    "Hugo Aponte", "Ana Pérez", "Cristian Gómez", "María José"];  

const generateData = (numRecords:any) => {
    const records = [];
    for (let i = 0; i < numRecords; i++) {
      const nameIndex = i % names.length; // Cycle through names
      records.push({
        cedula: 100000000 + i, // Example ID generation
        nombre: names[nameIndex],
        telefono: `300${Math.floor(Math.random() * 10000000)}`, // Random phone number
        correo: `${names[nameIndex].replace(/\s+/g, "").toLowerCase()}@gmail.com`, // Email based on name
        cuenta: `300${Math.floor(Math.random() * 10000000)}`, // Random phone number
  
    });
    }
    return records;
  };
  
  export const data = generateData(1000);