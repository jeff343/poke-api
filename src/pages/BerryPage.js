import Container from "@mui/material/Container";
import BerryDisplay from "../components/BerryDisplay";
import { baseUrl } from "../data/baseUrl";
import { useState, useEffect } from "react";

const BerryPage = () => {
    const [query, setQuery] = useState('cheri');
    const [berry, setBerry] = useState();
    const [berryItem, setBerryItem] = useState();

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

    return (
        <>
            {berry && berryItem &&
                <Container maxWidth='lg'>
                    <BerryDisplay berry={berry} item={berryItem} />
                </Container>
                
            }
        </>
    )
};

export default BerryPage;