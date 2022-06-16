import { Box, styled, Typography } from '@mui/material';

const StyledBox = styled(Box)({
    maxWidth: 300,
    margin: 20,
    padding: 10,
    border: '3px solid #1e1e1e',
    backgroundColor: '#e1e1e1',
    borderRadius: 10,
    '&:hover': {
        border: '3px solid #00ffff'
    }
});

const MovieBox = ({id, title, name, poster, overview}: {id: number, title: string, name: string, poster: string, overview: string}) => {

    return(
        <StyledBox className="movieBox" key={id}>
            <Box sx={{height:150, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Typography variant="h5">{title ? title : name}</Typography>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <img src={poster} alt={title} height="250px" width="250px"/>
            </Box>
            <Typography variant="subtitle1" sx={{padding:2, paddingBottom: 0}}>{overview}</Typography>
        </StyledBox>
    );
}

export default MovieBox;