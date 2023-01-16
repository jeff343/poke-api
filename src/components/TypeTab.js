import { typesArr } from "../data/typesArr";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography"


const TypeTab = ({ type }) => {

    const pokeType = typesArr.find((t) => t.type.toLowerCase() === type)

    return (
        <Box
            sx= {{
                width: 100,
                height: 30,
                background: pokeType.bg,
                borderRadius: 10,
                border: '3px solid black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 3
            }}
        >
            <Typography component='p' color='white'>
                {pokeType.type}
            </Typography>
        </Box>
    )
}

export default TypeTab