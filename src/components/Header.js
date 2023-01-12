import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import CatchingPokemon from '@mui/icons-material/CatchingPokemon';
import SearchIcon from '@mui/icons-material/Search';

// TODO: get search bar size and alignment right


const Search = styled.div`
    position: relative;
    display: flex;
    border-radius: 5px;
    background: rgba(0,0,0,0.5);
    margin: auto 0 auto auto;
    width: 300px;
`;

const SearchIconWrapper = styled.div`
    padding: 10px;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledInputBase = styled(InputBase)`
    color: inherit;
    margin: auto;
    width: 75%;
`;


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
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase 
                                placeholder='Search...'
                                inputProps={{'aria-label': 'search'}}
                            />
                        </Search>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}

export default Header