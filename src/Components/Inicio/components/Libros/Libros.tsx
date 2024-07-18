import { TextField, MenuItem, InputAdornment, Grid } from "@mui/material";
import { useState } from "react";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { Title } from "../../../../Elements/Titulo/Titulo";
import { api } from "../../../../api/Axios";
import { control_success } from "../../../../Elements/alertas/alertaSucces";
import { control_error } from "../../../../Elements/alertas/alertaError";
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import TitleIcon from '@mui/icons-material/Title';
import CategoryIcon from '@mui/icons-material/Category';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';
import CollectionsIcon from '@mui/icons-material/Collections';
import DescriptionIcon from '@mui/icons-material/Description';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';


interface Categoria {
    id: number;
    nombre_categoria: string;
    otra_categoria_cual: string;

}

interface Editorial {
    id: number;
    nombre: string;
}

interface Autor {
    id: number;
    primer_nombre: string;
    segundo_nombre: string | null;
    primer_apellido: string;
    fecha_nacimiento: string;
    correo_electronico: string;
    numero_celular: string;
}

interface Estantes {
    id_estante: number;
    identificacion_estante: string;
}

export const Libros = () => {
    const [categoria, setCategoria] = useState<Categoria[]>([]);
    const [editorial, setEditorial] = useState<Editorial[]>([]);
    const [autor, setAutores] = useState<Autor[]>([]);
    const [estantes, setEstantes] = useState<Estantes[]>([]);

    const BuscarCategorias = async () => {
        try {
            const res = await api.get('/universidad/listar_categoria_libros/');
            setCategoria(res.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    const BuscarEditorial = async () => {
        try {
            const res = await api.get('/universidad/obtener_editorial/');
            setEditorial(res.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    const BuscarAutores = async () => {
        try {
            const res = await api.get('/universidad/listar_autor/');
            setAutores(res.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    const BuscarEstantes = async () => {
        try {
            const res = await api.get('/universidad/listar_estantes/');
            setEstantes(res.data.data);
        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        BuscarCategorias();
        BuscarEditorial();
        BuscarAutores();
        BuscarEstantes();
    }, []);

    const [form, setForm] = useState({
        idISBN: '',
        titulo: '',
        categoriaLibro: '',
        Editorial: '',
        id_Autor: '',
        agno_publicacion: '',
        cantidad_copias: '',
        descripcion: '',
        estado_libro: '',
        id_estante: ''
    });

    const handleInputChange = (field: string, value: string) => {
        setForm({
            ...form,
            [field]: value
        });
    }

    const handleSave = async () => {
        try {
            const res = await api.post('/universidad/crear_libros/', form);
            control_success("Libro creado correctamente");
            console.log(res.data.data)
        } catch (error) {
            console.error(error);
            control_error("Error al crear el libro");
        }
    }

    return (
        <Grid container
            sx={{
                position: 'relative',
                background: '#FAFAFA',
                borderRadius: '15px',
                p: '20px',
                mb: '20px',
                boxShadow: '0px 3px 6px #042F4A26',
            }}
        >

            <Grid container spacing={2}>

                <Grid item xs={12}>
                    <Title title="Crear Libro" />
                </Grid>

                <Grid item xs={12} sm={12}>
                    <TextField
                        fullWidth
                        size="small"
                        variant="outlined"
                        value={form.titulo}
                        label="Título"
                        onChange={(e) => handleInputChange('titulo', e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <TitleIcon />
                                </InputAdornment>
                            ),
                            sx: { borderRadius: '20px' }
                        }}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        size="small"
                        variant="outlined"
                        value={form.idISBN}
                        label="ID del ISBN"
                        onChange={(e) => handleInputChange('idISBN', e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <ConfirmationNumberIcon />
                                </InputAdornment>
                            ),
                            sx: { borderRadius: '20px' }
                        }}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        select
                        fullWidth
                        size="small"
                        variant="outlined"
                        value={form.categoriaLibro}
                        label="Categoría"
                        onChange={(e) => handleInputChange('categoriaLibro', e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CategoryIcon />
                                </InputAdornment>
                            ),
                            sx: { borderRadius: '20px' }
                        }}
                    >
                        {categoria.map((item) => (
                            <MenuItem key={item.id} value={item.id}>
                                {item.nombre_categoria}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        select
                        fullWidth
                        size="small"
                        variant="outlined"
                        value={form.Editorial}
                        label="Editorial"
                        onChange={(e) => handleInputChange('Editorial', e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LibraryBooksIcon />
                                </InputAdornment>
                            ),
                            sx: { borderRadius: '20px' }
                        }}
                    >
                        {editorial.map((item) => (
                            <MenuItem key={item.id} value={item.id}>
                                {item.nombre}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        select
                        fullWidth
                        size="small"
                        variant="outlined"
                        value={form.id_Autor}
                        label="Autores"
                        onChange={(e) => handleInputChange('id_Autor', e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon />
                                </InputAdornment>
                            ),
                            sx: { borderRadius: '20px' }
                        }}
                    >
                        {autor.map((item) => (
                            <MenuItem key={item.id} value={item.id}>
                                {item.primer_nombre} {item.segundo_nombre} {item.primer_apellido}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        type="number"
                        size="small"
                        variant="outlined"
                        value={form.agno_publicacion}
                        label="Año de Publicación"
                        onChange={(e) => handleInputChange('agno_publicacion', e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EventIcon />
                                </InputAdornment>
                            ),
                            sx: { borderRadius: '20px' }
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        type="number"
                        size="small"
                        variant="outlined"
                        value={form.cantidad_copias}
                        label="Número de Copias"
                        onChange={(e) => handleInputChange('cantidad_copias', e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CollectionsIcon />
                                </InputAdornment>
                            ),
                            sx: { borderRadius: '20px' }
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        size="small"
                        variant="outlined"
                        value={form.descripcion}
                        label="Descripción"
                        multiline
                        rows={4}
                        onChange={(e) => handleInputChange('descripcion', e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <DescriptionIcon />
                                </InputAdornment>
                            ),
                            sx: { borderRadius: '20px' }
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        size="small"
                        variant="outlined"
                        value={form.estado_libro}
                        label="Estado"
                        onChange={(e) => handleInputChange('estado_libro', e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AssignmentIcon />
                                </InputAdornment>
                            ),
                            sx: { borderRadius: '20px' }
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        select
                        fullWidth
                        size="small"
                        variant="outlined"
                        value={form.id_estante}
                        label="Estante"
                        onChange={(e) => handleInputChange('id_estante', e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EventIcon />
                                </InputAdornment>
                            ),
                            sx: { borderRadius: '20px' }
                        }}
                    >
                        {estantes.map((item) => (
                            <MenuItem key={item.id_estante} value={item.id_estante}>
                                {item.identificacion_estante}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                startIcon={<SaveIcon />}
                                onClick={handleSave}
                            >
                                Guardar Libro
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="outlined"
                                color="secondary"
                                size="large"
                                startIcon={<CancelIcon />}
                                onClick={() => setForm({
                                    idISBN: '',
                                    titulo: '',
                                    categoriaLibro: '',
                                    Editorial: '',
                                    id_Autor: '',
                                    agno_publicacion: '',
                                    cantidad_copias: '',
                                    descripcion: '',
                                    estado_libro: '',
                                    id_estante: ''
                                })}
                            >
                                Limpiar Formulario
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    );
}