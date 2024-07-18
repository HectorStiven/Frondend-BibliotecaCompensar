
export interface Libro {
    idISBN: string;
    titulo: string;
    disponibleEnBiblioteca: boolean;
    agno_publicacion?: number | null;
    descripcion?: string | null;
    estado_libro: boolean;
    cantidad_copias: number;
    categoriaLibro?: {
      id: number;
      nombre_categoria: string;
      otra_categoria_cual: string;
    } | null;
    Editorial?: {
      id: number;
      nombre: string;
    } | null;
    id_Autor?: {
      id: number;
      primer_nombre: string;
      segundo_nombre?: string | null;
      primer_apellido: string;
      fecha_nacimiento: string; // O puedes usar Date si prefieres
      correo_electronico: string;
      numero_celular: string;
    } | null;
    id_estante: {
      id_estante: string;
      identificacion_estante: string;
      identificacion_por_estante: string;
      orden_ubicacion_estante: number;
    } | null;
  }
  
  