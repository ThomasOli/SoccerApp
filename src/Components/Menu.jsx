import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SearchBar from "./Searchbar";
import Selection from "./selection";

import { Typography } from "@mui/material";

const Menu = ({ children }) => {
  return (
    <Paper
      style={{
        height: "100vh",
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