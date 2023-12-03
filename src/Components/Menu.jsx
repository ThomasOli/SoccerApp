import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SearchBar from "./Searchbar";
import { Typography } from "@mui/material";
import Selection from "./selection";
const Menu = ({ children }) => {
  return (
    <Paper
      style={{
        flex: "0 0 100%",
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
