import { useState, useEffect } from "react";
import { baseUrl } from "../data/baseUrl";

const useFetchPokemon = (query) => {
    const [ pokemon, setPokemon ] = useState();
    const [ pokeIdx, setPokeIdx] = useState();

    useEffect(() => {
        setPokemon();
        setPokeIdx();

        const getPokemon = async() => {
            try {
                const res = await fetch(baseUrl + "pokemon/" + query);
                const data = await res.json();
                setPokemon(data);
                setPokeIdx(data.id - 1);
            } catch (error) {
                console.log(error);
            };
        };

        getPokemon();

    }, [query])

    return [ pokemon, pokeIdx ];
};

export default useFetchPokemon;