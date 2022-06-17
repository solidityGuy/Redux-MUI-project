import axios from 'axios';

type Page = number
const baseURL = 'https://api.themoviedb.org/3/';

export interface MovieSearchParameters {
    query?: string
    language?: string
    region?: string
    year?: string
}

export async function getTrendy(page: Page) {
    return await axios.get(`${baseURL}trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`);
}

export async function getTopRated(page: Page) {
    return await axios.get(`${baseURL}movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`);
}

export async function search(parameters: MovieSearchParameters, page: Page) {
    let searchString = `${baseURL}search/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`;
    console.log(parameters.query);
    if(parameters.query && parameters.query!==""){
        searchString = searchString+`&query=${parameters.query}`;
    } if(parameters.language && parameters.language!==""){
        searchString = searchString+`&language=${parameters.language}`;
    } if(parameters.region && parameters.region!==""){
        searchString = searchString+`&region=${parameters.region}`;
    } if(parameters.year && parameters.year!==""){
        searchString = searchString+`&year=${parameters.year}`;
    }
    return await axios.get(searchString);
}