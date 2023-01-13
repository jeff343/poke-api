// import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

const typesArr = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Electric",
    "Ice",
    "Fighting",
    "Poison",
    "Ground",
    "Flying",
    "Psychic",
    "Bug",
    "Rock",
    "Ghost",
    "Dark",
    "Dragon",
    "Steel",
    "Fairy"
];

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 200,
            width: 250,
        },
    },
};

const Searchbar = () => {

    const [types, setTypes] = useState([])

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;

        setTypes(value);
    };

    return (
        <Stack direction='row'>
            <FormControl 
                component='form' 
                sx={{ 
                    marginTop: 5, 
                    width: 'auto', 
                    marginX: 'auto'
                }}
            >
                    <TextField 
                        id="filled-search"
                        label="Search"
                        type="Search"
                        variant="standard"
                        sx={{ width: 400, marginX: 'auto' }}
                    />
            </FormControl>
            <FormControl 
                variant="standard" 
                sx={{ 
                    m: 5,
                    marginX: 'auto',
                    width: 400
                }}>
                <InputLabel id="pokemon-type-label">Types</InputLabel>
                <Select
                    labelId="pokemon-type-label"
                    id="pokemon-type"
                    multiple
                    value={types}
                    onChange={handleChange}
                    MenuProps={MenuProps}
                >
                    {typesArr.map((type) => (
                        <MenuItem
                            key={type}
                            value={type}
                        >
                            {type}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Stack>
    )
}

export default Searchbar


