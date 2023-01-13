import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CatchingPokemon from '@mui/icons-material/CatchingPokemon';




const Header = () => {


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <IconButton>
                            <CatchingPokemon />
                        </IconButton>
                        <Typography
                            variant="h5"
                            component="h1"
                            marginLeft={1}
                            marginRight={5}
                        >
                            PokeAPI
                        </Typography>
                        <Typography
                            variant="h6"
                            component="h2"
                        >
                            PlaceHolder
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}

export default Header