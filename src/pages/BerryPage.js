import Container from "@mui/material/Container";
import BerryDisplay from "../components/BerryDisplay";
import Searchbar from "../components/Searchbar";
import { useState } from "react";
import useFetchBerry from "../hooks/useFetchBerry";
import useFetchAll from "../hooks/useFetchAll";

const BerryPage = () => {
    const [query, setQuery] = useState('cheri');
    const allQuery = "berry?limit=64"
    
    const allBerries = useFetchAll(allQuery);
    const [berry, berryItem] = useFetchBerry(query);

    return (
        <Container maxWidth='lg'>
            {allBerries && <Searchbar setQuery={setQuery} autoData={allBerries}/>}
            <BerryDisplay berry={berry} item={berryItem} />
        </Container>
    )
};

export default BerryPage;