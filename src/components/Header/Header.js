import React from 'react';
import "./Header.css";
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Header = () => {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <div className='header'>
      <span className='title'>Word Hunt</span>
      <div className='inputs'>
        <ThemeProvider theme={darkTheme}>
            <TextField id="outlined-basic" label="Enter Word here" variant="outlined" />

            <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Age"
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
        </ThemeProvider>
        
      </div>
    </div>
  );
};

export default Header;
