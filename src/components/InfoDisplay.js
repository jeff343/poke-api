import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import StatsGrid from './StatsGrid';
import TypeTab from './TypeTab';
import InfoModal from './InfoModal';
import { firstToUpper } from '../utils/firstToUpper';

const InfoDisplay = ({ pokemon }) => {

    const pokeName = firstToUpper(pokemon.name);

    return (
        <Grid 
            container 
            component='article' 
            spacing={2}
            sx={{
                width: '90%',
                margin: 'auto'
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
                <Typography variant='h4' component='h3' display='inline'>
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
            <Grid item sm={6} md={7}>
                <Typography variant='h6' component='h4'>
                    Stats:
                </Typography>
                <StatsGrid stats={pokemon.stats}/>
            </Grid>
            <Grid item display='flex' sm={6} md={5}>
                <Typography variant='h6' component='h4'>
                    Type:
                </Typography>
                {pokemon.types.map((type) => {
                    return (
                        <TypeTab type={type.type.name} key={type.slot} />
                    )
                })}
            </Grid>
            <Grid 
                item 
                display='flex' 
                justifyContent='start' 
                alignItems='center'
                xs={12}
            >
                <Typography variant ='h6' component='h4'>
                    Abilities:
                </Typography>
                {pokemon.abilities.map((ability) => {
                    return (
                        <InfoModal key={ability.ability.name} marginLeft={3} url={ability.ability.url} />
                    )
                })}
            </Grid>
        </Grid>

    )
};

export default InfoDisplay