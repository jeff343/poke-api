import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";

const DisplayCard = () => {

    return (
        <Card sx={{ maxWidth: 600 }}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item md={6}>                
                        <Typography variant="h4" component="h3">
                            Pokemon.Name
                        </Typography>
                    </Grid>
                    <Grid item md={6}>
                        <Typography  
                            variant="h6" 
                            component="h3"
                            align="right"    
                        >
                            No: Id
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack 
                            direction='row' 
                            spacing={2} 
                            alignItems='center'
                        >
                            <Typography variant="h6" component="h4">
                                Type:
                            </Typography>
                            <Typography>
                                Fire
                            </Typography>
                            <Typography>
                                Water
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" component="h4">
                            Stats:
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={3}>
                                <Typography align="center">HP</Typography>
                                <Typography align="center">Attack</Typography>
                                <Typography align="center">Defense</Typography>
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <Typography>100</Typography>
                                <Typography>100</Typography>
                                <Typography>100</Typography>
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <Typography align="center">Sp. Att</Typography>
                                <Typography align="center">Sp. Def</Typography>
                                <Typography align="center">Speed</Typography>
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <Typography>100</Typography>
                                <Typography>100</Typography>
                                <Typography>100</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Button size="small">See More Info</Button>
            </CardActions>
        </Card>
    )
}

export default DisplayCard;

