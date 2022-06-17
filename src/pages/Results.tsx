import Sidebar from "../components/Sidebar";
import { Box, Stack } from "@mui/material";
import Navbar from "../components/Navbar";
import { useSelector } from 'react-redux';
import Footer from "../components/Footer";
import Feed from "../components/Feed";
import { useSearchParams } from "react-router-dom";
import { MovieSearchParameters } from "../requests";

export const Results = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const toggleSide = useSelector((state:RootState) => state.toggler.showSidebar);

    let searchElements:MovieSearchParameters = {
        query:searchParams.get('query')!, 
        language:searchParams.get('language')!, 
        region:searchParams.get('region')!, 
        year:searchParams.get('year')!, 
    }

    return (
        <>
            <Box>
                <Navbar />
                <Stack direction="row" spacing={2} justifyContent="space-evenly">
                <Box sx={{width:300}}>
                    {toggleSide && <Sidebar />}
                </Box>
                <Feed requestType="search" searchElements={searchElements}/>
                </Stack>
            </Box>
            <Footer/>
        </>
    );
};