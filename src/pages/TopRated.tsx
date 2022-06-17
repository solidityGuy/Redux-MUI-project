import Sidebar from "../components/Sidebar";
import { Box, Stack } from "@mui/material";
import Navbar from "../components/Navbar";
import { useSelector } from 'react-redux';
import Footer from "../components/Footer";
import Feed from "../components/Feed";
import { MovieSearchParameters } from "../requests";

export const TopRated = () => {

    const toggleSide = useSelector((state:RootState) => state.toggler.showSidebar);

    let searchElements:MovieSearchParameters = {query:"", language:"", region:"", year:""}
    return (
        <>
            <Box>
                <Navbar />
                <Stack direction="row" spacing={2} justifyContent="space-evenly">
                <Box sx={{width:300}}>
                    {toggleSide && <Sidebar />}
                </Box>
                <Feed requestType="toprated" searchElements={searchElements}/>
                </Stack>
            </Box>
            <Footer />
        </>
    );
};