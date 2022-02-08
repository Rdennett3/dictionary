import React from 'react';
import "./Header.css";
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import category from "../../data/category.js";

const Header = () => {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className='header'>
      <span className='title'>Word Hunt</span>
      <div className='inputs'>
        <ThemeProvider theme={darkTheme}>
            <TextField id="outlined-basic" label="Enter Word here" variant="outlined" style={{margin:"8px"}} />

            <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          style={{margin:'0'}}
        >
        {category.map((option) => (
          <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
        ))}
        </Select>
      </FormControl>
        </ThemeProvider>
        
      </div>
    </div>
  );
};

export default Header;
