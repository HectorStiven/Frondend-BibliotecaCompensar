import { TextField, MenuItem, Grid, Button, FormGroup, Switch , Stack, Typography  } from "@mui/material";
import { useState, useEffect } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Title } from "../../Elements/Titulo/Titulo";
import { api } from "../../api/Axios";
import { control_success } from "../../Elements/alertas/alertaSucces";
import { control_error } from "../../Elements/alertas/alertaError";

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

    const initialFormState = {
        idISBN: '',
        titulo: '',
        categoriaLibro: '',
        disponibleEnBiblioteca: false,
        Editorial: '',
        id_Autor: '',
        agno_publicacion: '',
        cantidad_copias: '',
        descripcion: '',
        estado_libro: '',
        id_estante: ''
    };
    
    const [form, setForm] = useState(initialFormState);

    const handleInputChange = (field: string, value: any) => {
        setForm({
            ...form,
            [field]: value
        });
    }

    const handleSave = async () => {
        try {
            await api.post('/universidad/crear_libros/', form);
            control_success("Libro creado correctamente");
            setForm(initialFormState);
        } catch (error) {
            console.error(error);
            control_error("Error al crear el libro");
        }
    }

    return (
        <>
            <Grid 
                container
                sx={{
                    position: 'relative',
                    background: '#FAFAFA',
                    borderRadius: '15px',
                    p: '20px',
                    mb: '20px',
                    boxShadow: '0px 3px 6px #042F4A26',
                }}
            >
                
                <Grid item xs={12}>
                    <Title title="Libro" />
                </Grid>
                <Grid item xs={12}>
                    <FormGroup
                        style={{ marginTop: 20, marginLeft: 10, width: "95%" }}
                        >
                        <Stack direction="row" spacing={1} alignItems="center" justifyContent="end">
                            <Typography>No Disponible</Typography>
                            <Switch
                            onChange={(e) => handleInputChange('disponibleEnBiblioteca', e.target.value === "on" ? true : false)} 
                            inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <Typography>Disponible</Typography>
                        </Stack>
                    </FormGroup>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        style={{ marginTop: 15, width: "95%" }}
                        size="small"
                        variant="outlined"
                        value={form.idISBN}
                        label="ID del ISBN"
                        onChange={(e) => handleInputChange('idISBN', e.target.value)}
                        sx={{ borderRadius: '20px' }}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        style={{ marginTop: 15, width: "95%" }}
                        size="small"
                        variant="outlined"
                        value={form.titulo}
                        label="Título"
                        onChange={(e) => handleInputChange('titulo', e.target.value)}
                        sx={{ borderRadius: '20px' }}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        select
                        fullWidth
                        style={{ marginTop: 15, width: "95%" }}
                        size="small"
                        variant="outlined"
                        value={form.categoriaLibro}
                        label="Categoria"
                        onChange={(e) => handleInputChange('categoriaLibro', e.target.value)}
                        sx={{ borderRadius: '20px' }}
                    >
                        {categoria.map((item) => (
                            <MenuItem key={item.id} value={item.id}>
                                {item.nombre_categoria}
                            </MenuItem>
                        ))}

                    </TextField>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        select
                        fullWidth
                        style={{ marginTop: 15, width: "95%" }}
                        size="small"
                        variant="outlined"
                        value={form.Editorial}
                        label="Editorial"
                        onChange={(e) => handleInputChange('Editorial', e.target.value)}
                        sx={{ borderRadius: '20px' }}
                    >
                        {editorial.map((item) => (
                            <MenuItem key={item.id} value={item.id}>
                                {item.nombre}
                            </MenuItem>
                        ))}

                    </TextField>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        select
                        fullWidth
                        style={{ marginTop: 15, width: "95%" }}
                        size="small"
                        variant="outlined"
                        value={form.id_Autor}
                        label="Autores"
                        onChange={(e) => handleInputChange('id_Autor', e.target.value)}
                        sx={{ borderRadius: '20px' }}
                    >
                        {autor.map((item) => (
                            <MenuItem key={item.id} value={item.id}>
                                {item.primer_nombre} {item.segundo_nombre} {item.primer_apellido}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        style={{ marginTop: 15, width: "95%" }}
                        type="number"
                        size="small"
                        variant="outlined"
                        value={form.agno_publicacion}
                        label="Año"
                        onChange={(e) => handleInputChange('agno_publicacion', e.target.value)}
                        sx={{ borderRadius: '20px' }}
                    >
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        style={{ marginTop: 15, width: "95%" }}
                        type="number"
                        size="small"
                        variant="outlined"
                        value={form.cantidad_copias}
                        label="Número de copias"
                        onChange={(e) => handleInputChange('cantidad_copias', e.target.value)}
                        sx={{ borderRadius: '20px' }}
                    >
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <TextField
                        fullWidth
                        style={{ marginTop: 15, width: "97.5%" }}
                        size="small"
                        variant="outlined"
                        value={form.descripcion}
                        label="Descripción"
                        onChange={(e) => handleInputChange('descripcion', e.target.value)}
                        sx={{ borderRadius: '20px' }}
                    >
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        style={{ marginTop: 15, width: "95%" }}
                        size="small"
                        variant="outlined"
                        value={form.estado_libro}
                        label="Estado"
                        onChange={(e) => handleInputChange('estado_libro', e.target.value)}
                        sx={{ borderRadius: '20px' }}
                    >
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        select
                        fullWidth
                        style={{ marginTop: 15, width: "95%" }}
                        size="small"
                        variant="outlined"
                        value={form.id_estante}
                        label="Estantes"
                        onChange={(e) => handleInputChange('id_estante', e.target.value)}
                        sx={{ borderRadius: '20px' }}
                    >
                        {estantes.map((item) => (
                            <MenuItem key={item.id_estante} value={item.id_estante}>
                                {item.identificacion_estante}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>

                <Grid item xs={12} >
                    <Grid container alignItems="center" justifyContent="center">
                        <Grid item xs={12} sm={4}>
                            <Button
                                variant="contained"
                                color="primary"
                                style={{ marginTop: 15, width: "95%", height: "70%", color: "white", backgroundColor: "green" }}
                                size="small"
                                startIcon={<AddCircleIcon />}
                                onClick={handleSave}
                            >
                                Guardar
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};