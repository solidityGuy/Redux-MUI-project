import { alpha, AppBar, Box, IconButton, InputBase, styled, Toolbar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useSelector, useDispatch } from 'react-redux';
import { show } from '../features/toggler';
import { useNavigate } from 'react-router-dom';
import { flexbox } from '@mui/system';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  const FilterIconWrapper = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    height: 40,
    marginLeft: 10
  }));


const Navbar = () => {

    const toggleSide = useSelector((state:RootState) => state.toggler.showSidebar);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleChange(e: React.KeyboardEvent<HTMLInputElement>) {
      if(e.key==='Enter'){
        const movie=e.currentTarget.value;
        navigate({
          pathname: '/results',
          search: `?query=${movie}`,
        })
      }
    }

    return (
        <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
          <AppBar position="sticky">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                onClick={() => dispatch(show())}>
                {toggleSide ? <CloseIcon/> : <MenuIcon/>} 
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                Movie app
              </Typography>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  onKeyDown={handleChange}
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
              <FilterIconWrapper>
                <FilterAltIcon/>
              </FilterIconWrapper>
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export default Navbar;