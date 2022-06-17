import { alpha, AppBar, Box, FormControl, IconButton, InputBase, InputLabel, MenuItem, Select, SelectChangeEvent, styled, Toolbar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useSelector, useDispatch } from 'react-redux';
import { show } from '../features/toggler';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

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
    marginLeft: 10,
    cursor: 'pointer'
  }));

  const FilterModal = styled(Box)(() => ({
    marginLeft: 'auto',
    marginRight: 'auto',
    left: 0,
    right: 0,
    position: 'absolute',
    textAlign: 'center',
    top:400,
    maxWidth: '60%',
    zIndex: 10,
    backgroundColor: 'white',
    border: '1px solid #1e1e1e',
    borderRadius: 10,
    height: 400,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 20
  }));


const Navbar = () => {

    const toggleSide = useSelector((state:RootState) => state.toggler.showSidebar);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [language, setLanguage] = useState("en-US");
    const [region, setRegion] = useState("");
    const [year, setYear] = useState("");
    const [isOpen, setIsOpen] = useState(true);
    let filterRef = useRef<HTMLDivElement>(null);

    function handleChange(e: React.KeyboardEvent<HTMLInputElement>) {
      if(e.key==='Enter'){
        let redirectString = `?query=${e.currentTarget.value}&language=${language}`;
        if(region!=="") {
          redirectString = redirectString+`&region=${region}`;
        } if(year!=="") {
          redirectString = redirectString+`&year=${year}`;
        }
        navigate({
          pathname: '/results',
          search: redirectString,
        })
      }
    }

    useEffect(() => {
      document.addEventListener("click", (event) => {
        if(filterRef.current && !filterRef.current.contains(event.target as Node)){
          setIsOpen(false);
        }
      });
    }, []);

    const chooseLanguage = (event: SelectChangeEvent<string>) => {
      setLanguage(event.target.value as string);
    };

    const chooseRegion = (event: SelectChangeEvent<string>) => {
      setRegion(event.target.value as string);
    };

    const chooseYear = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if(event.key==='Enter'){
        setYear(event.currentTarget.value as string);
      }
    };

    return (
        <>
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
                    <FilterAltIcon onClick={() => {setIsOpen(true)}}/>
                </FilterIconWrapper>
              </Toolbar>
            </AppBar>
          </Box>
          {isOpen && <FilterModal ref={filterRef}>
            <Typography variant="h6">Search filters</Typography>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Language</InputLabel>
              <Select
                defaultValue = ""
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language}
                label="Language"
                onChange={chooseLanguage}
              >
                <MenuItem value={"en-US"}>English</MenuItem>
                <MenuItem value={"de-DE"}>Deutsch</MenuItem>
                <MenuItem value={"pt-BR"}>Português</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Region</InputLabel>
              <Select
                defaultValue = ""
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={region}
                label="Region"
                onChange={chooseRegion}
              >
                <MenuItem value={"US"}>United Status of America</MenuItem>
                <MenuItem value={"DE"}>Deutschland</MenuItem>
                <MenuItem value={"BR"}>Brazil</MenuItem>
              </Select>
            </FormControl>
            <Box sx={{display: 'flex'}}>
              <Box sx={{border:'1px solid #c4c4c4', width:'100%', display: 'flex', justifyContent: 'flex-start', borderRadius:1, padding:1, '&:hover': {border:'1px solid #1e1e1e'}}}>
                <InputBase sx={{marginLeft:2, width:'100%'}}
                  onKeyDown={chooseYear}
                  placeholder="Year"
                  inputProps={{ maxLength: 4 }}
                />
              </Box>
            </Box>
          </FilterModal>}
        </>
      );
}

export default Navbar;