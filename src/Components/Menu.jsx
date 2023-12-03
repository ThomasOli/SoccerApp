import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SearchBar from "./Searchbar";

import { Typography } from "@mui/material";
<<<<<<< HEAD

=======
import Selection from "./selection";
>>>>>>> 4c3b1ba0a2d0c8d0a9751e5ece00d0d9ac1415fd
const Menu = ({ children }) => {
  return (
    <Paper
      style={{
        height: "96.5vh",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
      <div
        style={{
          marginTop: "1px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div>
          <Typography>Search For Players</Typography>
            <br></br>
          <SearchBar></SearchBar>
        </div>

        <Selection></Selection>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "90px",
          }}
        >
          {/* Add more buttons as needed */}
          <Button variant="contained">Generate Path</Button>
          {/* Add more buttons as needed */}
        </div>
      </div>
    </Paper>
  );
};

export default Menu;
