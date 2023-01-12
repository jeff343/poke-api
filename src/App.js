import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
