import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SearchBar from "./Searchbar";
import Selection from "./selection";
import BFS from "../app/algorithms/BFS";
import { Typography } from "@mui/material";
import { edges, nodes } from "./dataNew";
import DFS from "../app/algorithms/DFS"
const Menu = ({ children }) => {
  const startNodeId = 3788;
  const endNodeId = 14555;
  const [visitedNodes, setVisitedNodes] = useState([]);
  const [generatePathClicked, setGeneratePathClicked] = useState(false);

  const handleAlgoInitiated = (nodes) => {
    // Update the state or perform any action when BFS is initiated
    setVisitedNodes(nodes);
  };


  useEffect(() => {
    if (generatePathClicked) {
      // Run BFS when the button is clicked
      setVisitedNodes([]); // Reset visitedNodes state
    }
  }, [generatePathClicked]);

  const [selectedAlgorithm, setSelectedAlgorithm] = useState("BFS");

  const handleAlgorithmChange = (algorithm) => {
    // Update the selected algorithm in the main component
    setSelectedAlgorithm(algorithm);
  };

  const handleReset = () => {
    setGeneratePathClicked(false);
    };

  return (
    <Paper
      style={{
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
        <div
          style={{
            marginTop: "1px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "300px", // Adjust the minimum height as needed
          }}
        >
          <Selection  onReset = {handleReset} onAlgorithmChange={handleAlgorithmChange} ></Selection>
        </div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          {generatePathClicked && selectedAlgorithm == "BFS" && (
            <BFS
              nodes={nodes}
              edges={edges}
              startNodeId={startNodeId}
              endNodeId={endNodeId}
              onBFSInitiated={handleAlgoInitiated}
            />
          )}
          
          {generatePathClicked && selectedAlgorithm == "DFS" && (
            <DFS
              nodes={nodes}
              edges={edges}
              startNodeId={startNodeId}
              endNodeId={endNodeId}
              onDFSInitiated={handleAlgoInitiated}
            />
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "90px",
          }}
        >
          {/* Add more buttons as needed */}

          <Button
            onClick={() => {
              setGeneratePathClicked(true);
            }}
            variant="contained"
          >
            Generate Path
          </Button>
          {/* Add more buttons as needed */}
        </div>
      </div>
    </Paper>
  );
};

export default Menu;
