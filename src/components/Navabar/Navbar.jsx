"use client";
import * as React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import AnchorIcon from '@mui/icons-material/Anchor';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


const pages = ["Home", "Football", "Swimming", "Golf", "NBA", "UFC", "F1"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];


function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const isMobile = useMediaQuery("(max-width:820px)");

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


  return (
    
        <AppBar
          position="fixed"
          style={{
            backgroundColor: "rgb(0,0,139, 0.7)",
            boxShadow: "5px 5px 10px 0px rgba(0, 0, 0, 0.5)",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box
                sx={{
                  display: "flex",
                  mr: "auto",
                }}
              >
               <IconButton>
                  <AnchorIcon style={{ color: "white" }}/>
               </IconButton>
              </Box>

              <Box sx={{ display: "flex" }}>
                {isMobile ? (
                  <>
                    <Button
                      
                      size="small"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleOpenNavMenu}
                      variant="contained"
                      style={{
                        color: "whitesmoke",
                        backgroundColor: "gray",
                        fontFamily:"monospace",
                        boxShadow: "0px 0px 0px 0px",
                      }}
                    >
                      Menu
                    </Button>
                  </>
                ) : (
                  <>
                    {pages.map((page) => (
                      <Button
                        
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{
                          mr: 2,
                          textTransform: "none",
                          color: "white",
                          fontFamily:"monospace",
                        }}
                        size="small"
                      >
                        {page}
                      </Button>
                    ))}
                  </>
                )}

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography
                        textAlign="center"
                        style={{
                          fontFamily:"monospace",
                        }}
                      >
                        {page}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box
               sx={{
                ml: "auto",
                display: isMobile ? "none" : "flex",
              }}
            >
              <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              style={{
                fontFamily:"monospace",
              }}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

              </Box>

              <Box
                sx={{
                  ml: "auto",
                  display: isMobile ? "none" : "flex",
                }}
              >
                
                <Tooltip title="Open settings">
                  <IconButton
                    style={{ color: "white" }}
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0, ml: 1 }}
                  >
                    <AccountCircleOutlinedIcon />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography
                        style={{
                          fontFamily:"monospace",
                        }}
                        textAlign="center"
                      >
                        {setting}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
     
  );
}
export default Navbar;
