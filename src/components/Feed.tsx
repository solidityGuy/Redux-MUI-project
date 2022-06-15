import { Box, Button } from '@mui/material';
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
            console.log(movies);
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
                            const{id, title, poster_path, overview} = movie;
                            var poster = `https://image.tmdb.org/t/p/original${poster_path}`;
                        return(
                        <div className="movieBox" key={id} style={{maxWidth:300, padding:20, margin:20, display: 'flex', flexDirection: 'column', justifyContent:'space-between', border:'1px solid #1e1e1e', borderRadius: '5px'}}>
                            <h1>{title}</h1>
                            <img src={poster} alt={title} height="250px" width="250px"/>
                            <p>{overview}</p>
                        </div>
                        );
                    })}
            </Box>
            <Button onClick={() => handleClick()} variant="contained">Next page</Button>
        </Box>
            
        </>
    )
}

export default Feed;