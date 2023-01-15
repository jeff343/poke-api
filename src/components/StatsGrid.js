import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';


// will destructure pokemon.stats to create grid
const StatsGrid = () => {

    return (
        <Grid 
            container 
            spacing={2}
            paddingTop={{ xs:0, lg: 2 }}
            marginLeft={2}
            >
            <Grid item xs={6} sm={3}>
                <Typography align="center">HP</Typography>
                <Typography align="center">Attack</Typography>
                <Typography align="center">Defense</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Typography align="center">100</Typography>
                <Typography align="center">100</Typography>
                <Typography align="center">100</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Typography align="center">Sp. Att</Typography>
                <Typography align="center">Sp. Def</Typography>
                <Typography align="center">Speed</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Typography align="center">100</Typography>
                <Typography align="center">100</Typography>
                <Typography align="center">100</Typography>
            </Grid>
        </Grid>
    )
};

export default StatsGrid;