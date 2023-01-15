import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import StatsGrid from './StatsGrid';
import TypeTab from './TypeTab';

const InfoDisplay = () => {

    return (
        <Grid 
            container 
            component='article' 
            sx={{
                maxWidth: 800,
                marginLeft: 0,
                marginTop: 5
            }}    
        >
            <Grid 
                item 
                xs={12} 
                display='flex' 
                alignItems='center'
                justifyContent='space-around'    
            >
                <Typography variant='h3' component='h3'>
                    Pokemon Name
                </Typography>
                <Typography variant='h4' component='h4' display='inline'>
                    #0001
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <p>Image here</p>
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h6' component='h4'>
                    Stats:
                </Typography>
                <StatsGrid />
            </Grid>
            <Grid item display='flex'>
                <Typography variant='h6' component='h4'>
                    Type:
                </Typography>
                <TypeTab type='flying' />
            </Grid>
            <Grid item>
                <Typography variant ='h6' component='h4'>

                </Typography>
            </Grid>
        </Grid>

    )
};

export default InfoDisplay