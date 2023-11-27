import React, { useState, useEffect } from 'react';
import { Typography, Box, TextField, Autocomplete } from '@mui/material';
import FilterProducts from './filterProducts'; // Corrected the import and component name

function SearchBar() { // Corrected the component name to start with a capital letter
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value.toLowerCase());
  };

  useEffect(() => {
    // Fetch or set your list data here
    // For example, you can set a static list for demonstration purposes
    setList([
      { title: 'Zlatan' },
      { title: 'Zidane' },
      { title: 'Zoro' },
    ]);
  }, []);

  return (
    <Box
      className="searchBar"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      }}
    >
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={list.map((item) => item.title)}
        onChange={(event, newValue) => setInput(newValue.toLowerCase())}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search title"
            sx={{
              width: 290,
              margin: '10px auto',
            }}
          />
        )}
      />
      <FilterProducts searchstring={input} list={list} />
    </Box>
  );
}

export default SearchBar;