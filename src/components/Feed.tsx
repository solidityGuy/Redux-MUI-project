import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import MovieBox from './MovieBox';
import { getTopRated, getTrendy, MovieSearchParameters, search } from '../requests';
import { useLocation } from 'react-router-dom';

const Feed = ({requestType, searchElements}: {requestType: string, searchElements: MovieSearchParameters}) => {

    let location = useLocation();
    const[movies, setMovies] = useState([]);
    const[total, setTotal] = useState(10000);
    const[row, setRow] = useState(1);
    useEffect(() => {
        switch(requestType) {
            
            case 'trend':
                getTrendy(row).then((res) => {
                    setMovies(res.data.results);
                    setTotal(res.data.total_results);
                });
                break;
            case 'toprated':
                getTopRated(row).then((res) => {
                    setMovies(res.data.results);
                    setTotal(res.data.total_results);
                });
                break;
            case 'search':
                search(searchElements, row).then((res) => {
                    setMovies(res.data.results);
                    setTotal(res.data.total_results);
                });
                break;
        }
    }, [row, location]);

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