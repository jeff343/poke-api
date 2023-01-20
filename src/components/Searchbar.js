import Grid from '@mui/material/Unstable_Grid2';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';


const Searchbar = ({ setQuery, allPokemon }) => {
    const [value, setValue] = useState('');

    const handleClick = () => {
        setQuery(value.name);
    };


    return (
        <Grid 
            container 
            component="section"
            spacing={2}
            sx={{
                margin: 'auto',
                marginTop: 5,
                width: 'auto'
            }}
            maxWidth='lg'
        >
            <Grid 
                item 
                xs={12}
                md={6}
                display="flex" 
                justifyContent="center" 
                alignItems="center"
            >
                <FormControl component='form' sx={{ width: 350 }}>
                    <Autocomplete 
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        disablePortal
                        sx={{
                            "& + .MuiAutocomplete-popper .MuiAutocomplete-option[aria-selected='true']":
                            {
                              backgroundColor: "#bbdefb",
                            },
                          }}
                        id="search-box"
                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                        options={allPokemon}
                        getOptionLabel={(option) => option.name.toUpperCase()}
                        renderInput={(params) => <TextField {...params} label="Search" color="secondary"/>}
                    />
                </FormControl>
            </Grid>
            <Grid 
                item 
                xs={12} 
                md={6} 
                display="flex" 
                justifyContent="center" 
                alignItems="center"
            >
                <Button 
                    aria-label="submit-search"
                    variant="outlined" 
                    startIcon={<SearchIcon />}
                    sx={{ 
                        height: 50, 
                        margin: 'auto',
                        marginLeft: {md: 0}
                    }}
                    color='secondary'
                    disabled={!value}
                    onClick={() => handleClick()}
                >
                    Search
                </Button>
            </Grid>
        </Grid>
    )
}

export default Searchbar;