import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const ListDisplay = ({ active, allPokemon }) => {

    const pokeSlice = (arr) => {
        const poke = [];
        const roundedIndex = Math.floor(active/10) * 10;
        for (let i = roundedIndex; i < (roundedIndex + 10); i++) {
            poke.push({
                name: arr[i].name, 
                num: i});
        };
        return poke;
    };

    const pokeArr = pokeSlice(allPokemon);

    return (
        <Paper
            component='aside'
            sx={{
                width: 300,
                padding: 4,
                margin: 'auto'
            }}
        >
            <Typography component='h2' variant='h4'>
                Pokemon:
            </Typography>
            <List>
                {pokeArr.map((pokemon) => {
                    return (
                        <ListItem key={pokemon.name}>
                            <ListItemText 
                                primary={`No ${pokemon.num}: ${pokemon.name.toUpperCase()}`} 
                                primaryTypographyProps={{
                                    fontWeight: pokemon.num===active ? 'bold' : 'none'
                                }}
                            />
                        </ListItem>
                    )
                })}
            </List>
        </Paper>
    )
};

export default ListDisplay;