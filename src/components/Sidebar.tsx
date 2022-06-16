import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import { Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
      setOpen(!open);
    };

    return(
        <Box
        flex={3}
        p={2} 
        sx={{ display: { xs: "none", sm: "block" } }}
        >
            <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                </ListSubheader>
            }
            >
            <ListItemButton component={Link} to="/">
                <ListItemIcon>
                <CameraRollIcon />
                </ListItemIcon>
                <ListItemText primary="All movies" />
            </ListItemButton>
            <ListItemButton component={Link} to="/toprated">
                <ListItemIcon>
                <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Top rated" />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Other category" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                </ListItemButton>
                </List>
            </Collapse>
            </List>
        </Box>
    )
}

export default Sidebar;