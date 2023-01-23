import Container from "@mui/material/Container";
import BerryDisplay from "../components/BerryDisplay";
import Searchbar from "../components/Searchbar";
import { baseUrl } from "../data/baseUrl";
import { useState, useEffect } from "react";

const BerryPage = () => {
    const [query, setQuery] = useState('cheri');
    const [berry, setBerry] = useState();
    const [berryItem, setBerryItem] = useState();
    const [allBerries, setAllBerries] = useState();

    useEffect(() => {
        const getBerry = async() => {
            try {
                const res = await fetch(baseUrl + "berry/" + query);
                const data = await res.json();
                setBerry(data);
                const itemRes = await fetch(data.item.url);
                const itemData = await itemRes.json();
                setBerryItem(itemData);
                console.log('fetched');
            } catch (error) {
                console.log(error);
            };
        };
        getBerry();
    }, [query]);

    useEffect(() => {
        const getAllBerries = async() => {
            try {
                const res = await fetch("https://pokeapi.co/api/v2/berry?limit=64");
                const data = await res.json();
                setAllBerries(data.results);
            } catch (error) {
                console.log(error);
            };
        };
        
        getAllBerries();
    }, []);

    return (
        <>
            {berry && berryItem && allBerries &&
                <Container maxWidth='lg'>
                    <Searchbar setQuery={setQuery} autoData={allBerries}/>
                    <BerryDisplay berry={berry} item={berryItem} />
                </Container>
                
            }
        </>
    )
};

export default BerryPage;