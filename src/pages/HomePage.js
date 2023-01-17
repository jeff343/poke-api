import Grid from "@mui/material/Unstable_Grid2";
import Searchbar from "../components/Searchbar";
import InfoDisplay from "../components/InfoDisplay";
import ListDisplay from "../components/ListDisplay";
import { useEffect, useState } from "react";



const HomePage = () => {
    
    const [pokemon, setPokemon] = useState();
    const [allPokemon, setAllPokemon] = useState();


    useEffect(() => {
        const getPokemon = async() => {
            try {
                const res = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");
                const data = await res.json();
                setPokemon(data);
                console.log('fetched');
            } catch (error) {
                console.log(error);
            };
        };
        const getAllPokemon = async() => {
            try {
                const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
                const data = await res.json();
                setAllPokemon(data.results);
            } catch (error) {
                console.log(error);
            };
        };

    
        getPokemon();
        getAllPokemon();
    }, []);



    return (
        <>
            {pokemon && allPokemon &&
                <Grid 
                    container 
                    maxWidth='lg'
                    margin='auto'
                    spacing={3}
                    >
                    <Grid item md={8}>
                        <Searchbar allPokemon={allPokemon}/>
                        <InfoDisplay pokemon={pokemon} />
                    </Grid>
                    <Grid 
                        item 
                        md={4}
                        display='flex' 
                        alignItems='center'
                        justifyContent='center'    
                    >
                        <ListDisplay allPokemon={allPokemon} />
                    </Grid>
                </Grid>
            }
        </>
    )
};

export default HomePage;