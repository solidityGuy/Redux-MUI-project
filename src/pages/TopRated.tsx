import Sidebar from "../components/Sidebar";
import { Box, Stack } from "@mui/material";
import Navbar from "../components/Navbar";
import { useSelector } from 'react-redux';
import Footer from "../components/Footer";
import Feed from "../components/Feed";

export const TopRated = () => {

    const toggleSide = useSelector((state:RootState) => state.toggler.showSidebar);

    return (
        <>
            <Box>
                <Navbar />
                <Stack direction="row" spacing={2} justifyContent="space-evenly">
                <Box sx={{width:250}}>
                    {toggleSide && <Sidebar />}
                </Box>
                <Feed urlBody="movie/top_rated" queryArgs="" />
                </Stack>
            </Box>
            <Footer />
        </>
    );
};