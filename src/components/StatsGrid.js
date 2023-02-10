import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';


const StatsGrid = ({ stats }) => {

    return (
        <Grid 
            container 
            padding={0}
            paddingTop={0.8}
            spacing={2}
            marginLeft={2}
            width='100%'
            >
            <Grid item xs={6} sm={3}>
                <Typography align="left">HP</Typography>
                <Typography align="left">Attack</Typography>
                <Typography align="left">Defense</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Typography align="right">{stats[0].base_stat}</Typography>
                <Typography align="right">{stats[1].base_stat}</Typography>
                <Typography align="right">{stats[2].base_stat}</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Typography align="left">Sp.Att</Typography>
                <Typography align="left">Sp.Def</Typography>
                <Typography align="left">Speed</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Typography align="right">{stats[3].base_stat}</Typography>
                <Typography align="right">{stats[4].base_stat}</Typography>
                <Typography align="right">{stats[5].base_stat}</Typography>
            </Grid>
        </Grid>
    )
};

export default StatsGrid;