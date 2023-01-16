import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useState } from "react";


const ListDisplay = ({ allPokemon }) => {
    const [listStart, setListSlice] = useState(0);
    const pokeSlice = (arr) => {
        return arr.slice(listStart, 10);
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
                {pokeArr.map((pokemon, idx) => {
                    return (
                        <ListItem>
                            <ListItemText primary={`No ${idx+1}: ${pokemon.name.toUpperCase()}`} key={pokemon.name} />
                        </ListItem>
                    )
                })}
            </List>
        </Paper>
    )
};

export default ListDisplay;