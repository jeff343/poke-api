import Grid from "@mui/material/Unstable_Grid2";
import Searchbar from "../components/Searchbar";
import InfoDisplay from "../components/InfoDisplay";
import ListDisplay from "../components/ListDisplay";
import { useEffect, useState } from "react";
import { baseUrl } from "../data/baseUrl";



const PokePage = () => {
    const [query, setQuery] = useState('bulbasaur');
    const [pokeIdx, setPokeIdx] = useState(0)
    const [pokemon, setPokemon] = useState();
    const [allPokemon, setAllPokemon] = useState();

    useEffect(() => {
        const getPokemon = async() => {
            try {
                setPokemon()
                const res = await fetch(baseUrl + "pokemon/" + query);
                const data = await res.json();
                setPokemon(data);
                setPokeIdx(data.id - 1);
            } catch (error) {
                console.log(error);
            };
        };
        getPokemon();
    }, [query]);

    useEffect(() => {
        const getAllPokemon = async() => {
            try {
                const res = await fetch(baseUrl + "pokemon?limit=151");
                const data = await res.json();
                setAllPokemon(data.results);
            } catch (error) {
                console.log(error);
            };
        };
        
        getAllPokemon();
    }, []);



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