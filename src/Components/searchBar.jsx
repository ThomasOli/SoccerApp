import React, { useState, useEffect } from 'react';
import { Typography, Box, TextField, Autocomplete } from '@mui/material';

function SearchBar() { // Corrected the component name to start with a capital letter
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const [fromPlayer, setFromPlayer] = useState("");
  const [toPlayer, setToPlayer] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value.toLowerCase());
  };

  useEffect(() => { 
    // Fetch or set your list data here
    // For example, you can set a static list for demonstration purposes
    setList([
      { title: 'Juan Pablo Caffa' },
      { title: 'Jussiê' },
      { title: 'Mark Brown' },
      { title: 'Sammy Clingan' },
      { title: 'Rab Douglas' },
      { title: 'Fernando Belluschi' },
      { title: 'Brad Jones' },
      { title: 'Matty Fryatt' },
      { title: 'Matthew Amoah' },
      { title: 'Georgios Kantimiris' },
      { title: 'Abdurrahman Dereli' },
      { title: 'Alexis Ruano' },
      { title: 'Levan Kenia' },
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
        onChange={(event, newValue) => setInput(newValue.toLowerCase(), setFromPlayer(newValue))}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search From Player"
            sx={{
              width: 290,
              margin: '10px auto',
            }}
          />
        )}
      />

      <br></br>

      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={list.map((item) => item.title)}
        onChange={(event, newValue) => setInput(newValue.toLowerCase(), setToPlayer(newValue))}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search To Player"
            sx={{
              width: 290,
              margin: '10px auto',
            }}
          />
        )}
      />
    </Box>
  );
}

export default SearchBar;