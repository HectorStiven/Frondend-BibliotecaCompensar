import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ImagenPortada } from './ImagenPortada';
import { CustomizedSwitches } from './ModoOscuro';
import { MenuUsuario } from '../MenuUsuario/MenuUsuario';

const pages = ['Inicio', 'Prestamos', "Contacto"];

export const ResponsiveAppBar = ({ set_entrar_aplicacion }: any) => {
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openDrawer_info, setOpenDrawer_info] = useState(false);

    const navigate = useNavigate();


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    // Funciones para abrir/cerrar menú
    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };

    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };


    const handleOpenDrawer = () => {
        setOpenDrawer_info(true); // Abre el cajón
    };

    return (
        < >
            <AppBar position="static" style={{ backgroundColor: "#008e26" }}>
                <Container maxWidth="xl" >
                    <Toolbar disableGutters >
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Compensar B
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

                            <MenuIcon onClick={handleDrawerOpen} />


                            <Drawer
                                open={openDrawer}
                                onClose={handleDrawerClose}
                            >
                                <ImagenPortada />
                                {pages.map((page) => (
                                    <div key={page}>
                                        <List
                                            style={{
                                                width: 250,
                                                borderRadius: 8,
                                                backgroundColor: 'white', /* Color naranja */
                                                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                                                transition: 'background-color 0.3s ease, border 0.3s ease' /* Transición suave */
                                            }}
                                            sx={{
                                                '&:hover': {
                                                    backgroundColor: 'rgba(0,142,38,1)', border: '2px solid #008e26', /* Borde delineado */
                                                }
                                            }}
                                        >
                                            <ListItem
                                                button
                                                onClick={() => navigate(`/${page}`)}
                                                sx={{
                                                    borderRadius: 1,
                                                }}
                                            >
                                                <ListItemText>{page}</ListItemText>
                                            </ListItem>
                                        </List>
                                    </div>
                                ))}
                            </Drawer>

                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Cofrem
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={() => navigate(`/${page}`)}
                                    sx={{ my: 2, color: 'black', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>



                        <Box sx={{ flexGrow: 0 }}>

                            <Tooltip title="Open settings">
                                <>
                                    <IconButton style={{ marginRight: 10 }}>
                                        <CustomizedSwitches />

                                    </IconButton>


                                    <IconButton onClick={handleOpenDrawer} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                    </IconButton>
                                </>
                            </Tooltip>

                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >

                                <Drawer
                                    open={openDrawer_info} // Utiliza un estado booleano para controlar la apertura del Drawer
                                    onClose={() => setOpenDrawer_info(false)} // Función para cerrar el Drawer
                                    anchor="right"

                                >

                                    <MenuUsuario set_entrar_aplicacion={set_entrar_aplicacion} handleCloseUserMenu={handleCloseUserMenu} />
                                </Drawer>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
