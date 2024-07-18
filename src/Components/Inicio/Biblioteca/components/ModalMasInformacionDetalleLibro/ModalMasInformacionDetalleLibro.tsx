import React, { useState } from "react";
import {Button, Grid,Dialog, DialogActions, DialogContent,TextField} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Title } from "../../../../../Elements/Titulo/Titulo";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useInformacionRowContext } from "../../context/InformacionRowContext";






export const ModalMasInformacionDetalleLibro: React.FC = () => {

    const [open, setOpen] = useState(false);
    const { libroSeleccionado } = useInformacionRowContext();





    // Función para manejar la apertura del modal
    const handleClickOpen = () => {
        setOpen(true);
    };

    // Función para manejar el cierre del modal
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button
                variant="contained"
                color="secondary"
                style={{ backgroundColor: "orange" }}
                onClick={handleClickOpen} // Suponiendo que idISBN es el identificador único de cada libro
            >

                <HelpOutlineIcon />

            </Button>
            <Dialog open={open}
                onClose={handleClose}
                maxWidth="lg"
                fullWidth
                sx={{
                    "& .MuiPaper-root": {
                        borderRadius: '16px'
                    }
                }}>
                <DialogContent>



                    <Grid container spacing={2}>


                        <Grid item xs={12}>
                            <Title title="Informacion Libro" />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                size="small"
                                label="Título"
                                value={libroSeleccionado?.titulo || ''}
                                fullWidth
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                size="small"
                                label="ID del ISBN"
                                value={libroSeleccionado?.idISBN || ''}
                                fullWidth
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                size="small"
                                label="Descripción"
                                value={libroSeleccionado?.descripcion || ''}
                                fullWidth
                                multiline
                                rows={4}
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                size="small"
                                label="Estado del Libro"
                                value={libroSeleccionado?.estado_libro ? 'Bueno' : 'Malo'}
                                fullWidth
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                                disabled
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                size="small"
                                label="Año de Publicación"
                                value={libroSeleccionado?.agno_publicacion || ''}
                                fullWidth
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                size="small"
                                label="Categoría"
                                value={libroSeleccionado?.categoriaLibro?.nombre_categoria || ''}
                                fullWidth
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                size="small"
                                label="Editorial"
                                value={libroSeleccionado?.Editorial?.nombre || ''}
                                fullWidth
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                size="small"
                                label="Primer Autor"
                                value={`${libroSeleccionado?.id_Autor?.primer_nombre || ''} ${libroSeleccionado?.id_Autor?.primer_apellido || ''}`}
                                fullWidth
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                size="small"
                                label="Correo Electrónico del Autor"
                                value={libroSeleccionado?.id_Autor?.correo_electronico || ''}
                                fullWidth
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                                disabled
                            />
                        </Grid>


                        <Grid item xs={6}>
                            <TextField
                                size="small"
                                label="Copias Disponibles"
                                value={libroSeleccionado?.cantidad_copias || ''}
                                fullWidth
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                                disabled
                            />
                        </Grid>


                        <Grid item xs={6}>
                            <TextField
                                size="small"
                                label="Primer Autor"
                                value={`${libroSeleccionado?.id_Autor?.primer_nombre || ''} ${libroSeleccionado?.id_Autor?.primer_apellido || ''}`}
                                fullWidth
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                                disabled
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                size="small"
                                label="ID del Estante"
                                value={libroSeleccionado?.id_estante?.identificacion_estante || ''}
                                fullWidth
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                size="small"
                                label="Orden de Ubicación en el Estante"
                                value={libroSeleccionado?.id_estante?.orden_ubicacion_estante || ''}
                                fullWidth
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                size="small"
                                label="Número de Celular del Autor"
                                value={libroSeleccionado?.id_Autor?.numero_celular || ''}
                                fullWidth
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                                disabled
                            />
                        </Grid>

                    </Grid>






                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        color="error"
                        startIcon={<CloseIcon />}
                        onClick={handleClose}>
                        Cerrar
                    </Button>
                </DialogActions>
            </Dialog>



        </>
    );
};
