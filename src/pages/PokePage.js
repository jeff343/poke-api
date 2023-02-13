import Grid from "@mui/material/Unstable_Grid2";
import Searchbar from "../components/Searchbar";
import InfoDisplay from "../components/InfoDisplay";
import ListDisplay from "../components/ListDisplay";
import useFetchPokemon from "../hooks/useFetchPokemon";
import useFetchAll from "../hooks/useFetchAll";
import { useState } from "react";



const PokePage = () => {
    const [query, setQuery] = useState('bulbasaur');
    const allQuery = "pokemon?limit=151"

    const [ pokemon, pokeIdx ] = useFetchPokemon(query);
    const allPokemon = useFetchAll(allQuery);

    return (
        <Grid 
            container 
            maxWidth='lg'
            margin='auto'
            spacing={3}
            >
            <Grid item md={8}>
                <Searchbar setQuery={setQuery} autoData={allPokemon}/>
                <InfoDisplay pokemon={pokemon} />
            </Grid>
            <Grid 
                item 
                xs={12}
                md={4}
                display='flex' 
                alignItems='center'
                justifyContent='center'    
            >
                {allPokemon && <ListDisplay active={pokeIdx} allPokemon={allPokemon} setQuery={setQuery} />}
            </Grid>
        </Grid>
    )
};

export default PokePage;