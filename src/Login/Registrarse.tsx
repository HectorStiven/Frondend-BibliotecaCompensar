// import { Grid, TextField } from "@mui/material"
// import Button from '@mui/material/Button';
// import Modal from '@mui/material/Modal';
// import { useState } from "react";
// import { control_success } from "../Elements/alertas/alertaSucces";




// export const Registrarse = () => {


//     const [open, setOpen] = useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);

//     const [usuario, setUsuario] = useState("");


//     const Guardar_registrar_perosna=()=>{

//         control_success("se registro correctamente")

//     }

//     return (

//         <div>
//             <Button
//                 variant="contained"
//                 style={{ marginTop: 15, width: "100%" }}
//                 color="secondary"
//                 onClick={handleOpen}

//             >
//                 Registrarse
//             </Button>
//             <Modal
//                 open={open}
//                 // onClose={handleClose}
//                 aria-labelledby="modal-modal-title"
//                 aria-describedby="modal-modal-description"
//             >
//                 <Grid container alignItems="center" justifyContent="center">



//                     <Grid item style={{ marginTop: 400, position: "absolute" }}>
//                         <div style={{ padding: 14, marginLeft: -18, borderRadius: 50, border: '1px solid black', width: 450, height: 459, marginTop: 350, backgroundColor: "white" }}>
//                             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                                 <h1 className="login-heading" >Registrarse</h1>
//                             </div>
//                             <form>



//                                 <Grid container spacing={1}  >
//                                     <Grid item xs={6}>
//                                         <TextField
//                                             id="input-with-icon-textfield"
//                                             label="Primer Nombre"
//                                             style={{ marginTop: 15, width: 200 }}
//                                             value={usuario}
//                                             onChange={(e) => setUsuario(e.target.value)}
//                                             InputProps={{

//                                                 style: { borderRadius: 20 }
//                                             }}
//                                             variant="outlined"
//                                         />
//                                     </Grid>
//                                     <Grid item xs={6}>
//                                         <TextField
//                                             id="input-with-icon-textfield"
//                                             label="Segundo Nombre"
//                                             style={{ marginTop: 15, width:200 }}
//                                             value={usuario}
//                                             onChange={(e) => setUsuario(e.target.value)}
//                                             InputProps={{

//                                                 style: { borderRadius: 20 }
//                                             }}
//                                             variant="outlined"
//                                         />
//                                     </Grid>
//                                     <Grid item xs={6}>
//                                         <TextField
//                                             id="input-with-icon-textfield"
//                                             label="Primer Apellido"
//                                             style={{ marginTop: 15, width:200 }}
//                                             value={usuario}
//                                             onChange={(e) => setUsuario(e.target.value)}
//                                             InputProps={{

//                                                 style: { borderRadius: 20 }
//                                             }}
//                                             variant="outlined"
//                                         />
//                                     </Grid>
//                                     <Grid item xs={6}>
//                                         <TextField
//                                             id="input-with-icon-textfield"
//                                             label="Segundo Apellido"
//                                             style={{ marginTop: 15, width:200 }}
//                                             value={usuario}
//                                             onChange={(e) => setUsuario(e.target.value)}
//                                             InputProps={{

//                                                 style: { borderRadius: 20 }
//                                             }}
//                                             variant="outlined"
//                                         />
//                                     </Grid>
//                                     <Grid item xs={6}  >
//                                         <TextField
//                                             id="input-with-icon-textfield"
//                                             label="Telefono"
//                                             style={{ marginTop: 15, width:200 }}
//                                             value={usuario}
//                                             onChange={(e) => setUsuario(e.target.value)}
//                                             InputProps={{

//                                                 style: { borderRadius: 20 }
//                                             }}
//                                             variant="outlined"
//                                         />
//                                     </Grid>
//                                     <Grid item xs={6} >
//                                         <TextField
//                                             id="input-with-icon-textfield"
//                                             label="Conrreo Electronico"
//                                             style={{ marginTop: 15, width:200 }}
//                                             value={usuario}
//                                             onChange={(e) => setUsuario(e.target.value)}
//                                             InputProps={{

//                                                 style: { borderRadius: 20 }
//                                             }}
//                                             variant="outlined"
//                                         />
//                                     </Grid>

//                                 </Grid>


//                                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 35 }}>
//                                     <Button
//                                         variant="contained"
//                                         style={{  width:190, margin: 'auto' }}
//                                         color="success"
//                                         onClick={Guardar_registrar_perosna}
//                                     >
//                                         Guardar
//                                     </Button>
//                                     <Button
//                                         variant="contained"
//                                         style={{ width: 190, margin: 'auto' }}
//                                         color="error"
//                                         onClick={handleClose}
//                                     >
//                                         salir
//                                     </Button>
//                                 </div>



//                             </form>
//                         </div>
//                     </Grid>
//                 </Grid>
//             </Modal>
//         </div>
//     )
// }








// //   return (
// //     <div>
// //       <Button onClick={handleOpen}>Open modal</Button>
// //       <Modal
// //         open={open}
// //         onClose={handleClose}
// //         aria-labelledby="modal-modal-title"
// //         aria-describedby="modal-modal-description"
// //       >
// //         <Box sx={style}>
// //           <Typography id="modal-modal-title" variant="h6" component="h2">
// //             Text in a modal
// //           </Typography>
// //           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
// //             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
// //           </Typography>
// //         </Box>
// //       </Modal>
// //     </div>
// //   );

import { Backdrop, Box, Button, Fade, FormControl, Grid, InputAdornment, MenuItem, Modal, OutlinedInput, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import { TextFieldCompleto, buttonMax } from "./Styles/StyleInicio";
import { boxFooter, boxHeader, boxMain, maxButton, modalStyle } from "./Styles/StyleRegistro";

export default function RegistrarUser() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [edad, setEdad] = useState('');
    const [celular, setCelular] = useState('');
    const [tipoDocumento, setTipoDocumento] = useState('');
    const [numeroDocumento, setNumeroDocumento] = useState('');
    const [tipoUsuario, setTipoUsuario] = useState('');
    const [gmail, setGmail] = useState('');
    const handleLimpiarCampos = () => {
        setNombres('');
        setApellidos('');
        setEdad('');
        setCelular('');
        setTipoDocumento('');
        setNumeroDocumento('');
        setTipoUsuario('');
        setGmail('');
    };

    return (

        <div>
            <Button onClick={handleOpen} variant='outlined' sx={buttonMax}>
                REGISTRARSE
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={modalStyle}>
                        <Grid alignItems={"center"} container spacing={0} justifyContent={"center"}>
                            <Grid alignItems={"center"} item xs={10} sm={8} md={12}>
                                <Box sx={boxHeader}>
                                    <Grid alignItems={"center"} container spacing={0} justifyContent={"center"}>
                                        <Grid alignItems={"center"} item xs={10} sm={8} md={11}>
                                            <Typography>
                                                POR FAVOR, REGISTRARSE
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>

                        <Grid alignItems={"center"} container spacing={1} justifyContent={"center"} sx={{ mt: 2, }}>
                            <Grid alignItems={"center"} item xs={10} sm={8} md={12}>
                                <Box sx={boxMain}>
                                    <Grid alignItems={"center"} container spacing={1} justifyContent={"center"}>
                                        <Grid alignItems={"center"} item xs={10} sm={8} md={3}>
                                            <TextField id="standard-basic" size='small' label="Nombres" variant="outlined"
                                                value={nombres}
                                                onChange={(e) => setNombres(e.target.value)}
                                                sx={TextFieldCompleto} />
                                        </Grid>
                                        <Grid alignItems={"center"} item xs={10} sm={8} md={3}>
                                            <TextField id="standard-basic" size='small' label="Apellidos" variant="outlined"
                                                value={apellidos}
                                                onChange={(e) => setApellidos(e.target.value)}
                                                sx={TextFieldCompleto} />
                                        </Grid>
                                        <Grid alignItems={"center"} item xs={10} sm={8} md={3}>
                                            <TextField id="standard-basic" type='number' size='small' label="Edad" variant="outlined"
                                                value={edad}
                                                onChange={(e) => setEdad(e.target.value)}
                                                sx={TextFieldCompleto} />
                                        </Grid>
                                        <Grid alignItems={"center"} item xs={10} sm={8} md={3}>
                                            <TextField id="standard-basic" size='small' label="Celular" variant="outlined"
                                                value={celular}
                                                onChange={(e) => setCelular(e.target.value)}
                                                sx={TextFieldCompleto} />
                                        </Grid>
                                        <Grid alignItems={"center"} item xs={10} sm={8} md={3}>
                                            <TextField select label="Tipo de Documento" size='small'
                                                value={tipoDocumento}
                                                onChange={(e) => setTipoDocumento(e.target.value)} sx={TextFieldCompleto}>
                                                <MenuItem value="option1">Tarjeta de Identidad</MenuItem>
                                                <MenuItem value="option2">Cedula de Ciudadania</MenuItem>
                                                <MenuItem value="option3">Cedula de Extranjeria</MenuItem>
                                            </TextField>
                                        </Grid>
                                        <Grid alignItems={"center"} item xs={10} sm={8} md={3}>
                                            <TextField id="standard-basic" size='small' label="Numero Documento" variant="outlined"
                                                value={numeroDocumento}
                                                onChange={(e) => setNumeroDocumento(e.target.value)}
                                                sx={TextFieldCompleto} />
                                        </Grid>
                                        <Grid alignItems={"center"} item xs={10} sm={8} md={3}>
                                            <TextField select label="Tipo de Usuario" size='small'
                                                value={tipoUsuario}
                                                onChange={(e) => setTipoUsuario(e.target.value)}
                                                sx={TextFieldCompleto}>
                                                <MenuItem value="option1">Estudiante</MenuItem>
                                                <MenuItem value="option2">Universitario</MenuItem>
                                                <MenuItem value="option3">Docente</MenuItem>
                                            </TextField>
                                        </Grid>
                                        <Grid alignItems={"center"} item xs={10} sm={8} md={3}>
                                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                                <OutlinedInput
                                                    value={gmail}
                                                    onChange={(e) => setGmail(e.target.value)}
                                                    id="outlined-adornment-weight"
                                                    size='small'
                                                    endAdornment={<InputAdornment position="end">@gmail.com</InputAdornment>}
                                                    aria-describedby="outlined-weight-helper-text"
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>

                        <Grid alignItems={"center"} container spacing={0} justifyContent={"center"}>
                            <Grid alignItems={"center"} item xs={10} sm={8} md={12}>
                                <Box sx={boxFooter}>
                                    <Grid alignItems={"center"} container spacing={1} justifyContent={"flex-end"}>
                                        <Grid alignItems={"center"} item xs={10} sm={8} md={2}>
                                            <Button startIcon={<CloseIcon />} variant='contained'
                                                onClick={handleClose} color='error' sx={maxButton}>
                                                CANCELAR
                                            </Button>
                                        </Grid>
                                        <Grid alignItems={"center"} item xs={10} sm={8} md={3}>
                                            <Button startIcon={<CleaningServicesIcon />} onClick={handleLimpiarCampos} variant='contained' color='warning' sx={maxButton}
                                            >
                                                LIMPIAR CAMPOS
                                            </Button>
                                        </Grid>
                                        <Grid alignItems={"center"} item xs={10} sm={8} md={2}>
                                            <Button startIcon={<SaveIcon />} variant='contained' color='success' sx={maxButton}>
                                                REGISTRAR
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}