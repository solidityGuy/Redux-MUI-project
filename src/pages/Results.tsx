import Sidebar from "../components/Sidebar";
import { Box, Stack } from "@mui/material";
import Navbar from "../components/Navbar";
import { useSelector } from 'react-redux';
import Footer from "../components/Footer";
import SearchResults from "../components/SearchResults";

export const Results = () => {

    const toggleSide = useSelector((state:RootState) => state.toggler.showSidebar);

    return (
        <>
            <Box>
                <Navbar />
                <Stack direction="row" spacing={2} justifyContent="space-evenly">
                <Box sx={{width:250}}>
                    {toggleSide && <Sidebar />}
                </Box>
                <SearchResults />
                </Stack>
            </Box>
            <Footer/>
        </>
    );
};