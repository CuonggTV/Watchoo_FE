import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, TextField, Button, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#111', padding: '0 16px' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <PlayCircleOutlineIcon sx={{ color: '#ff4c4c', fontSize: 32, marginRight: 1, animation: 'spin 2s infinite linear' }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }}>
            Fl<span style={{ color: '#ff4c4c' }}>i</span>x
          </Typography>
        </Box>

        {/* Search Bar */}
        <Box
          sx={{
            backgroundColor: '#d1d1d111',
            borderRadius: '60px',
            width: '500px',
            padding: '8px 15px',
            color: '#fff',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            border: '2px solid var(--main-color)',
          }}
        >
          <TextField
            placeholder="Search Your Movie ....."
            variant="outlined"
            size="small"
            sx={{
              backgroundColor: 'transparent',
              width: '80%',
              textTransform: 'capitalize',
              // remove border inside input
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  border: 'none',
                },
                '&:hover fieldset': {
                  border: 'none',
                },
                '&.Mui-focused fieldset': {
                  border: 'none',
                },
                backgroundColor: 'transparent',
                color: '#fff', // sets the input text color
              },
              // style the input itself
              '& .MuiInputBase-input': {
                color: '#fff', // input text color
              },
              // style the placeholder text
              '& .MuiInputBase-input::placeholder': {
                color: '#bbb', // lighter placeholder color
                opacity: 1,
              },
            }}
          />

        </Box>



        {/* Sign In Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#ff4c4c',
            '&:hover': { backgroundColor: '#e63c3c' },
            padding: '6px 16px',
          }}
        >
          Sign in
        </Button>

        {/* Menu Toggle */}
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton sx={{ color: '#fff' }}>
            <MenuIcon />
          </IconButton>
          <IconButton sx={{ color: '#fff' }}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
