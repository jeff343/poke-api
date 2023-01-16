import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import StatsGrid from './StatsGrid';
import TypeTab from './TypeTab';

const InfoDisplay = ({ pokemon }) => {

    const nameToUpper = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const pokeName = nameToUpper(pokemon.name)

    return (
        <Grid 
            container 
            component='article' 
            spacing={3}
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
                justifyContent='space-between'    
            >
                <Typography variant='h3' component='h3'>
                    {pokeName}
                </Typography>
                <Typography variant='h4' component='h4' display='inline'>
                    No: {pokemon.id}
                </Typography>
            </Grid>
            <Grid 
                item 
                xs={12}
                display='flex' 
                alignItems='center'
                justifyContent='space-around'       
            >
                <img 
                    src={pokemon.sprites.front_default} 
                    alt={pokemon.name} 
                    style={{ height: 300, width: 'auto' }}    
                />
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h6' component='h4'>
                    Stats:
                </Typography>
                <StatsGrid stats={pokemon.stats}/>
            </Grid>
            <Grid item display='flex'>
                <Typography variant='h6' component='h4'>
                    Type:
                </Typography>
                {pokemon.types.map((type) => {
                    return (
                        <TypeTab type={type.type.name} key={type.slot} />
                    )
                })}
            </Grid>
            <Grid item>
                <Typography variant ='h6' component='h4'>
                    
                </Typography>
            </Grid>
        </Grid>

    )
};

export default InfoDisplay