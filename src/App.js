import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import PokePage from "./pages/PokePage";
import BerryPage from "./pages/BerryPage";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <ErrorBoundary>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route  path='/pokemon' element={<PokePage />} />
          <Route path='/berry' element={<BerryPage /> } />
        </Routes>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
