import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { firstToUpper } from "../utils/firstToUpper";
import LoadSkeleton from "./LoadSkeleton";


const BerryDisplay = ({ berry, item }) => {

    return(
        <>
            {berry && item ?
                <Grid container marginTop={5}>
                    <Grid item xs={12} md={6} textAlign='center'>
                        <Typography component="h2" variant='h2'>
                            {firstToUpper(berry.name)}
                        </Typography>
                        <img style={{ height: 100, width: 'auto' }} src={item.sprites.default} alt={berry.name}/>
                        <Typography variant="subtitle1">
                            Size: {berry.size}
                        </Typography>
                        <Typography variant="subtitle1">
                            Smoothness: {berry.smoothness}
                        </Typography>
                        <Typography paragraph padding={3}>
                            {item.effect_entries[0].effect}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TableContainer component={Paper} sx={{ maxWidth: 500, margin: 'auto' }}>
                            <Table sx={{ minWidth: 200 }} aria-label="flavor table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Flavor</TableCell>
                                        <TableCell align='right' >Potency</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {berry.flavors.map((flavor) => (
                                        <TableRow
                                            key={flavor.flavor.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component='th' scope='row'>
                                                {firstToUpper(flavor.flavor.name)}
                                            </TableCell>
                                            <TableCell align='right'>{flavor.potency}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            :
                <LoadSkeleton />
            }
        </>
    )
};

export default BerryDisplay