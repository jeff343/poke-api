import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Unstable_Grid2";
import InfoDisplay from "../components/InfoDisplay";
import BerryDisplay from "../components/BerryDisplay";
import useFetchBerry from "../hooks/useFetchBerry";
import useFetchPokemon from "../hooks/useFetchPokemon";


const HomePage = () => {

    const [ pokemon ] = useFetchPokemon('1')
    const [berry, berryItem] = useFetchBerry('1');

    return (
    <> 
        <Container 
            maxWidth='md' 
            component={Paper}
            align='center'
            sx={{
                marginTop:5,
                marginX: 'auto',
                width: '90%',
                padding: 3
            }}    
        >
            <Typography variant="h3" component="h1">
                Welcome to the Pokemon info site
            </Typography>
            <Typography variant="subtitle1" marginTop={3}>
                This site contains information about the original 151 Pokemon, as well as all the berries from the games.
                The information is gathered from the <Link href="https://pokeapi.co/" target="_blank" rel="noopener">PokeApi</Link>. To get 
                started just naviagate to the Pokemon or Berry page.
            </Typography>
        </Container>
        <Grid container spacing={5}>
            <Grid item xs={12} lg={6} maxWidth={750} marginX='auto'>
                <InfoDisplay pokemon={pokemon} />
            </Grid>
            <Grid item xs={12} lg={6} maxWidth={750} marginX='auto'>
                <BerryDisplay berry={berry} item={berryItem} />
            </Grid>
        </Grid>
    </>
    )
};

export default HomePage;