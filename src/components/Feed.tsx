import { Box, Button, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

const API_KEY = "7574dfa3f440636c752e8baf90fd52da";
const Feed = () => {

    const[movies, setMovies] = useState([]);
    const[total, setTotal] = useState(10000);
    const[row, setRow] = useState(1);

    const fetchUrl = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=${row}`
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl]);

    const handleClick = () => {
        setRow(row + 1);
    }

    return(
        <>
        <Box flex={9} p={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {movies.map((movie) => {
                            console.log(movie);
                            const{id, title, name, poster_path, overview} = movie;
                            var poster = `https://image.tmdb.org/t/p/original${poster_path}`;
                        return(
                        <Box className="movieBox" key={id} sx={{maxWidth:300, margin:2, padding:2, border:'3px solid #1e1e1e', backgroundColor: '#e1e1e1', borderRadius:10, '&:hover': {
                            border: '3px solid #00ffff'
                          },}}>
                            <Box sx={{height:150, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <Typography variant="h5">{title ? title : name}</Typography>
                            </Box>
                            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                                <img src={poster} alt={title} height="250px" width="250px"/>
                            </Box>
                            <Typography variant="subtitle1" sx={{padding:2, paddingBottom: 0}}>{overview}</Typography>
                        </Box>
                        );
                    })}
            </Box>
            <Button onClick={() => handleClick()} variant="contained">Next page</Button>
        </Box>
            
        </>
    )
}

export default Feed;