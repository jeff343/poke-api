import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const ListDisplay = ({ setQuery, active, allPokemon }) => {

    const handleClick = (n) => {
        setQuery(n);
    };


    return (
        <Paper
            component='aside'
            elevation={5}
            sx={{
                display: { xs: 'none', md: 'block' },
                width: '80%',
                minWidth: 300,
                padding: 2,
                margin: 'auto',
                border: '3px solid red',
                bgcolor: 'rgba(242,242,242,0.8)'
            }}
        >
            <Typography 
                component='h2' 
                variant='h4' 
                textAlign='center' 
                padding={2}
            >
                Pokemon:
            </Typography>
            <Box
                sx={{
                    overflow: 'hidden',
                    overflowY: 'scroll',
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    height: '500px'
                }}
            >
                <List>
                    {allPokemon.map((pokemon, index) => {
                        return (
                            <ListItem key={pokemon.name} sx={{ padding: '0'}} >
                                <ListItemText 
                                    sx={{
                                        cursor: 'pointer'
                                    }}
                                    onClick={()=>handleClick(pokemon.name)}
                                    primary={`No ${index + 1}: ${pokemon.name.toUpperCase()}`} 
                                    primaryTypographyProps={{
                                        fontWeight: index===active ? 'bold' : 'none',
                                        marginLeft: 2
                                    }}
                                />
                            </ListItem>
                        )
                    })}
                </List>
            </Box>
        </Paper>
    )
};

export default ListDisplay;