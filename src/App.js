import Header from "./components/Header";
// import PokePage from "./pages/PokePage";
import BerryPage from "./pages/BerryPage";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <BerryPage />
      {/* <PokePage /> */}
    </ThemeProvider>
  );
}

export default App;
