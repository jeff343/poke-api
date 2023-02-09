import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const LoadSkeleton = () => {

    return (
        <Stack 
            spacing = {2} 
            sx={{
                width: '90%',
                marginX: 'auto',
                marginTop: '20px'
            }}   
        >
            <Skeleton variant="h2" />
            <Skeleton 
                variant="circular" 
                width={80} 
                height={80}   
            />
            <Skeleton variant="text" />
            <Skeleton 
                variant="rectangle" 
                height={100}    
            />
        </Stack>
    )
};

export default LoadSkeleton;