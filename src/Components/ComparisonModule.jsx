import React, { useState, useEffect } from 'react';
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SearchBar from "./Searchbar";
import { Typography } from "@mui/material";

// const  timer = () =>{
//     var sec = 0;
//     var timer = setInterval(function(){
//         document.getElementById('safeTimerDisplay').innerHTML='00:' + sec;
//         sec++;
//     }, 1000);
// }

const ComparisonModule = ({ children }) => {
    const data = [
        { camparisonPoint: "Time Taken (seconds): ", dfsDatapoint: "10:23", bfsDatapoint: "139:13" },
        { camparisonPoint: "Nodes Traversed: ", dfsDatapoint: "13141", bfsDatapoint: "4123" },
        { camparisonPoint: "Max memory usage (bytes): ", dfsDatapoint: "3141", bfsDatapoint: "41314" },
    ]

    // // Similar to componentDidMount and componentDidUpdate:
    // useEffect(() => {
    //     // Update the document title using the browser API
    //     timer();
    // });

    return (
    <Paper
      style={{
        height: "96.5vh",
        padding: "16px",
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
        <h3>Comparison of DFS / BFS Path Finding</h3>

        <div className="App">
            <table>
                <thead>
                    <th></th>
                    <th>DFS</th>
                    <th>BFS</th>
                </thead>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td style={{marginRight: 23}}>{val.camparisonPoint}</td>
                            <td>{val.dfsDatapoint}</td>
                            <td>{val.bfsDatapoint}</td>
                        </tr>
                    )
                })}
            </table>
        </div>

        {/* <div id="safeTimer">
            <h2>Timer</h2>
            <p id="safeTimerDisplay"></p>
        </div> */}
    </Paper>
  );
};

export default ComparisonModule;
