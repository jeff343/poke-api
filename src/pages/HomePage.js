import Container from "@mui/material/Container";
import Searchbar from "../components/Searchbar";
import InfoDisplay from "../components/InfoDisplay";



const HomePage = () => {
    
    return (
        <Container maxWidth="lg">
            <Searchbar />
            <InfoDisplay />
        </Container>
    )
};

export default HomePage;