import Container from "@mui/material/Container";
import Searchbar from "../components/Searchbar";
import InfoDisplay from "../components/InfoDisplay";
import { useEffect, useState } from "react";



const HomePage = () => {
    
    const [pokemon, setPokemon] = useState()


    useEffect(() => {
        const getPokemon = async() => {
            try {
                const res = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");
                const data = await res.json();
                setPokemon(data);
                console.log('fetched')
            } catch (error) {
                console.log(error)
            };
        };

        getPokemon();
    }, []);



    return (
        <>
            {pokemon &&
            <Container maxWidth="lg">
                <Searchbar />
                <InfoDisplay pokemon={pokemon}/>
            </Container>}
        </>
    )
};

export default HomePage;