import { createTheme } from "@mui/material/styles";
import { red, blue, yellow } from "@mui/material/colors"; 

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: red[500],
        },
        secondary: {
            main: blue[500],
        },

    },
    typography: {
        h3: {
            '@media (max-width: 500px)': {
                fontSize: '2rem',
            },
        },
        h4: {
            '@media (max-width: 500px)': {
                fontSize: '1.5rem',
            },
        },
    },
});



export default theme