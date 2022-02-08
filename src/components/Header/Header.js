import React from 'react';
import "./Header.css";
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import categories from "../../data/category.js";

const Header = ({setCategory, category, word, setWord}) => {

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
      <span className='title'>{word?word:"dic·tion·ar·y"}</span>
      <div className='inputs'>
        <ThemeProvider theme={darkTheme}>
            <TextField id="outlined-basic" value={word} onChange={(e)=>setWord(e.target.value)} className='search' label="Enter Word here" variant="outlined" style={{margin:"8px"}} />

            <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          style={{margin:'0'}}  
        >
        {categories.map((option) => (
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
