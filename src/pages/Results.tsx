import Sidebar from "../components/Sidebar";
import { Box, Stack } from "@mui/material";
import Navbar from "../components/Navbar";
import { useSelector } from 'react-redux';
import Footer from "../components/Footer";
import Feed from "../components/Feed";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export const Results = () => {

    const location = useLocation();
    const toggleSide = useSelector((state:RootState) => state.toggler.showSidebar);
    const [query, setQuery] = useState(location.search.replace(/[?]/, "&"));

    return (
        <>
            <Box>
                <Navbar />
                <Stack direction="row" spacing={2} justifyContent="space-evenly">
                <Box sx={{width:250}}>
                    {toggleSide && <Sidebar />}
                </Box>
                <Feed urlBody="search/movie" queryArgs={query} />
                </Stack>
            </Box>
            <Footer/>
        </>
    );
};