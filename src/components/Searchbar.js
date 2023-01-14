import Grid from '@mui/material/Unstable_Grid2';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';


const Searchbar = () => {


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
                >
                    Search
                </Button>
            </Grid>
        </Grid>
    )
}

export default Searchbar


