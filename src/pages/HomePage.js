import DisplayCard from "../components/DisplayCard";
import Container from "@mui/material/Container";
import Searchbar from "../components/Searchbar";
import Grid from "@mui/material/Unstable_Grid2";



const HomePage = () => {
    
    return (
        <Container maxWidth="lg">
            <Searchbar />
            <Grid 
                container 
                spacing={10} 
                sx={{margin: 'auto'}}
                display="flex"
                justifyContent="center"
            >
                <Grid item lg={6}>
                    <DisplayCard />
                </Grid>
                <Grid item lg={6}>
                    <DisplayCard />
                </Grid>
                <Grid item lg={6}>
                    <DisplayCard />
                </Grid>
                <Grid item lg={6}>
                    <DisplayCard />
                </Grid>
            </Grid>
        </Container>
    )
};

export default HomePage;