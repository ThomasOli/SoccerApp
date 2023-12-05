import Graph from"react-graph-vis"
import React from 'react'
import {edges, nodes} from './dataNew'
export default function Graphs(){
    var options = {
        nodes:{
            shape: "dot",
            scaling: {
                min: 10,
                max: 30,
                label: {
                    min: 8,
                    max: 30,
                    drawThreshold: 12,
                    maxVisible: 20
                }
            },
            font: {
                size: 12,
                face: "Tahoma",
                color: "White"
            }
        },
        edges: {
            width: 0.15,
            color: {inherit: "from"},
            smooth: {
                type: "continuous"
            }
        },
        physics: false,
        interaction: {
            navigationButtons: true,
            tooltipDelay: 200,
            hideEdgesOnDrag: true,
            hideEdgesOnZoom: true
        },
        height: '1300px'
    }

    var data = {nodes: nodes, edges: edges}
  return (
    <div className='container' style = {{display: "flex"}}>
        <Graph
            graph = {data}
            options={options}
        />
    </div>
  )
}
