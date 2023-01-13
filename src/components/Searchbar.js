// import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Unstable_Grid2';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
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

        if (value.length < 3) {
            setTypes(value);
        };
    };

    return (
        <Grid 
            container 
            component="section"
            spacing={2}
            sx={{
                margin: 'auto',
                marginTop: 10,
                width: 'auto'
            }}
            maxWidth='lg'
        >
            <Grid 
                item 
                xs={12}
                md={6} 
                lg={5}
                display="flex" 
                justifyContent="center" 
                alignItems="center"
            >
                <FormControl component='form' sx={{ width: 350 }}>
                        <TextField 
                            id="filled-search"
                            label="Search"
                            type="Search"
                            variant="standard"
                            color="secondary"
                        />
                        <FormHelperText>Search by name or number</FormHelperText>
                </FormControl>
            </Grid>
            <Grid 
                item 
                xs={12}
                md={6}  
                lg={5} 
                display="flex" 
                justifyContent="center" 
                alignItems="center"
            >
                <FormControl component="form" variant="standard" sx={{ width: 350 }} color="secondary">
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
                    <FormHelperText>Select up to 2 types</FormHelperText>
                </FormControl>
            </Grid>
            <Grid 
                item 
                xs={12} 
                lg={2}  
                display="flex" 
                justifyContent="center" 
                alignItems="center"
            >
                <Button 
                    aria-label="submit-search"
                    variant="outlined" 
                    startIcon={<SearchIcon />}
                    sx={{ height: 50, margin: 'auto' }}
                    color='secondary'
                >
                    Search
                </Button>
            </Grid>
        </Grid>
    )
}

export default Searchbar


