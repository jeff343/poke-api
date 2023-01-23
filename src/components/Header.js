import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CatchingPokemon from '@mui/icons-material/CatchingPokemon';
import { useState } from 'react';




const Header = () => {

    const [anchorElNav, setAnchorElNav] = useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <IconButton sx={{ display: { xs: 'none', md: 'flex'}}}>
                        <CatchingPokemon />
                    </IconButton>
                    <Typography
                        sx={{ display: { xs: 'none', md: 'flex'}}}
                        variant="h5"
                        component="h1"
                        marginLeft={1}
                        marginRight={5}
                    >
                        PokeAPI
                    </Typography>
                    <Typography 
                        sx={{ display: { xs: 'none', md: 'flex'}}}
                        variant="h6"
                        component="h2"
                        marginRight={5}
                    >
                        Pokemon
                    </Typography>
                    <Typography
                        sx={{ display: { xs: 'none', md: 'flex'}}}
                        variant="h6"
                        component="h2"
                    >
                        Berries
                    </Typography>

                    <Box sx={{flexGrow: 1, display: { xs: 'flex', md: 'none'}}}>
                        <IconButton 
                            size="large"
                            aria-label="menu open"
                            aria-controls="manu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu 
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left'
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Pokemon</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Berries</Typography>
                            </MenuItem>
                        </Menu>
                        <IconButton 
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                marginY: 'auto',
                                marginLeft: '30%'
                            }}
                        >
                            <CatchingPokemon />
                        </IconButton>
                        <Typography
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                marginY: 'auto'
                            }}
                            variant="h5"
                            component="h1"
                            marginLeft={1}
                            marginRight={5}
                        >
                            PokeAPI
                        </Typography>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header