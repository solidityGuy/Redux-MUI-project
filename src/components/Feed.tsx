import { Box, Button } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieBox from './MovieBox';
import { getMovies } from '../requests';

const Feed = ({urlBody, queryArgs}: {urlBody: string, queryArgs: string}) => {

    const[movies, setMovies] = useState([]);
    const[total, setTotal] = useState(20);
    const[row, setRow] = useState(1);
    const fetchUrl = `https://api.themoviedb.org/3/${urlBody}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${row}${queryArgs}`;
    useEffect(() => {
        
        getMovies(fetchUrl).then((res) => {
            setMovies(res.data.results);
            setTotal(res.data.total_results);
        });
        
    }, [fetchUrl]);

    const handleClick = () => {
        setRow(row + 1);
    }

    return(
        <>
        <Box flex={1} p={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {movies.map((movie) => {
                            const{id, title, name, poster_path, overview} = movie;
                            var poster = `https://image.tmdb.org/t/p/original${poster_path}`;
                        return(
                        <MovieBox id={id} title={title} name={name} poster={poster} overview={overview}/>
                        );
                    })}
            </Box>
            <Button onClick={() => handleClick()} variant="contained">Next page</Button>
        </Box>
        </>
    )
}

export default Feed;