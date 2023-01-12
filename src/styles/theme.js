import { createTheme } from "@mui/material/styles";
import { red, blue, yellow } from "@mui/material/colors"; 

const theme = createTheme({
    palette: {
        mode: "light",
        common: {
            yellow: yellow[500],
        },
        primary: {
            main: red[500],
        },
        secondary: {
            main: blue[500],
        },

    },
});

export default theme