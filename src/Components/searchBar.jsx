import React, { useState, useEffect } from 'react';
import { Typography, Box, TextField, Autocomplete } from '@mui/material';

function SearchBar({setFromPlayer, setToPlayer}) { // Corrected the component name to start with a capital letter
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value.toLowerCase());
  };

  useEffect(() => { 
    setList([
      { title: 'Hans Henrik Andreasen', id: 20838},
      { title: 'Zdravko Kuzmanovic', id: 25441},
      { title: 'Cristian Rodríguez', id: 33448},
      { title: 'Steffen Rasmussen', id: 22923, },
      { title: 'Liam Rosenior', id: 15166 },
      { title: 'Jan-Ingwer Callsen-Bracker', id: 3851},
      { title: 'Mustapha Oussalah', id: 13483},
      { title: 'Adrian Mutu', id: 5879},
      { title: 'Ciro Polito', id: 22123},
      { title: 'Claudio Terzi', id: 16873},
      { title: 'Zydrunas Karcemarskas', id: 15676},
      { title: 'Marco Soares', id: 33549},
      { title: 'Mikel Labaka', id: 23247}
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
        // setFromPlayer(list.filter(player => player.title === newValue))
        onChange={(event, newValue) => {setInput(newValue.toLowerCase()); 
                                        console.log(list.filter(player => player.title === newValue)[0].id);
                                        setFromPlayer(list.filter(player => player.title === newValue)[0].id)
                                      }}

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
        onChange={(event, newValue) =>  {
            setInput(newValue.toLowerCase()); 
            console.log(list.filter(player => player.title === newValue)[0].id);
            setToPlayer(list.filter(player => player.title === newValue)[0].id);
           }
        }
          // {newValue.toLowerCase(); 
                                        
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