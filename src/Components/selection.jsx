import React, { useState } from "react";
import Select from "@mui/material/Select";
import {
  Box,
  Button,
  ButtonGroup,
  Slider,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  MenuItem,
  InputLabel,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import {
  FormatBold as FormatBoldIcon,
  FormatItalic as FormatItalicIcon,
  FormatUnderlined as FormatUnderlinedIcon,
} from "@mui/icons-material";

const valuetext = (value) => {
  return `${value}°C`;
};

const Selection = () => {
  const [color, setColor] = React.useState("");

  const handleColor = (event) => {
    setColor(event.target.value);
    
  };
  const handleAlgo  = (event) => {
  setValue(event.target.value);
  };
  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };
  const [value, setValue] = React.useState('BFS');



  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      {/* Elements inside the box */}
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <FormControl>
            <FormLabel  id="demo-controlled-radio-buttons-group">Graph Traversal</FormLabel>
            <RadioGroup
              name="Algo selection"
              value={value}
              onChange={handleAlgo}
              aria-labelledby="demo-controlled-radio-buttons-group"
            >
              <FormControlLabel value="BFS" control={<Radio />} label="BFS" />
              <FormControlLabel value="DFS" control={<Radio />} label="DFS" />
            </RadioGroup>
          </FormControl>
          
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Color</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={color}
                label="color"
                onChange={handleColor}
              >
                <MenuItem value={10}>Red</MenuItem>
                <MenuItem value={20}>Orange</MenuItem>
                <MenuItem value={30}>Yellow</MenuItem>
                <MenuItem value={40}>Green</MenuItem>
                <MenuItem value={50}>Blue</MenuItem>
                <MenuItem value={60}>Purple</MenuItem>
                <MenuItem value={70}>White</MenuItem>
                <MenuItem value={80}>Black</MenuItem>
              </Select>
            </FormControl>
          </Box>
       
        </div>
        <br></br>
      </Box>
      {/* Add more elements as needed */}
    </div>
  );
};

export default Selection;
