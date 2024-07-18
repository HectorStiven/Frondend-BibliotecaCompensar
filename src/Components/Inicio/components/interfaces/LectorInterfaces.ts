export interface UsuarioRegistrado {
    id: number;
    numero_identidad: string;
    primer_nombre: string;
    segundo_nombre: string | null;
    primer_apellido: string;
    segundo_apellido: string | null;
    edad: number;
    fecha_nacimiento: string;
    correo_electronico: string;
    numero_celular: string;
    pertenece_colegio: boolean;
    tipo_documento: string | null;
    tipo_genero: string | null;
    colegio: string | null;
    id_grado: string | null;
}