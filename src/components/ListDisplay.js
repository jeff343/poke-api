import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const ListDisplay = ({ setQuery, active, allPokemon }) => {

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

    const handleClick = (n) => {
        setQuery(n)
    }
    const pokeArr = pokeSlice(allPokemon);

    return (
        <Paper
            component='aside'
            sx={{
                display: { xs: 'none', md: 'block' },
                width: '80%',
                minWidth: 300,
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
                                onClick={()=>handleClick(pokemon.name)}
                                primary={`No:${pokemon.num + 1} ${pokemon.name.toUpperCase()}`} 
                                primaryTypographyProps={{
                                    fontWeight: pokemon.num===active ? 'bold' : 'none',
                                    marginLeft: 2
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