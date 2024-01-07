# Football Player Comparison https://www.youtube.com/watch?v=-e-zvkDJkCs
## Problem
Being a football fan can be challenging, especially when searching for information about favorite teams and players scattered across the vastness of the internet. Comparing players from different leagues is a common desire, but the process can be cumbersome and lack directness.

## Motivation
Football fans often follow multiple leagues and have favorite players across various clubs. The motivation behind this project is to facilitate the exploration of connections between players through shared teams or matches played against each other.

## Features Implemented
Our website enables users to compare any two football players directly. The comparison mechanism involves traversing a graph to determine if one player has beaten the other in any common games. If not, the algorithm checks for indirect connections through players who have defeated one another. The result includes the number of nodes traversed, time taken, and maximum memory usage during the pathfinding process.

![image (2)](https://github.com/ThomasOli/SoccerApp/assets/51518411/01e74046-7a34-48a7-8c53-41dd9e11b88c)
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
![image](https://github.com/ThomasOli/SoccerApp/assets/51518411/2cfaa8d8-9947-4283-9a89-b07d3dee0499)
![image (1)](https://github.com/ThomasOli/SoccerApp/assets/51518411/bdb35d26-4431-4330-8c75-ba859c020ebf)

## Description of Data
The dataset utilized encompasses information about soccer clubs worldwide, games played in the last 10 years, and details about players active during the same period. It also includes comprehensive information about player appearances in all games over the specified timeframe.

## Tools/Languages/APIs/Libraries Used
C++: Used for processing CSV files, organizing data into classes, and implementing backend functionalities.
Javascript and React, Vite, React-graph-vis: Employed to build the frontend website and visualize the comparison results.
Algorithms Implemented
Breadth-First Search (BFS) and Depth-First Search (DFS): Utilized on an adjacency list to determine the better player between two individuals.
Additional Data Structures/Algorithms Used
Adjacency List: Stores information about game wins, where each player is a node in the graph, and directed edges represent victories.
Classes: Created for players and clubs, utilizing vectors and unordered_maps to efficiently store and manage data.

## Distribution of Responsibility and Roles
Thomas: Frontend development, website building, and visualization. Implemented BFS and DFS algorithms for pathfinding.
Edward: Backend development in C++, processing CSV files, and creating the adjacency matrix for data storage.
Aryan: Worked on both frontend and backend, transformed C++ generated data into JSON format for website integration.

## Analysis
Changes After Proposal
We scaled back on initially planned algorithms, opting out of Dijkstra's algorithm due to its suitability for weighted graphs, while ours is unweighted.

## Big O Worst Case Time Complexity
Data Processing Functions (e.g., read_CSV): O(m) time, where m is the number of lines in the CSV file.
BFS and DFS: O(V + E), where V and E are the numbers of vertices and edges, respectively, in the graph.
Our project streamlines football player comparisons, offering fans a user-friendly way to explore the connections between their favorite players across different leagues.

![IMG_3312](https://github.com/ThomasOli/SoccerApp/assets/51518411/5377e8a1-ec2c-4b8c-ad3a-ca7acc36ac5e)
![IMG_3313](https://github.com/ThomasOli/SoccerApp/assets/51518411/8e78a41f-5dcd-495a-bb06-26efe1a8e3a9)

