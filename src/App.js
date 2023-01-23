import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import PokePage from "./pages/PokePage";
import BerryPage from "./pages/BerryPage";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/pokemon' element={<PokePage />} />
        <Route path='/berry' element={<BerryPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
