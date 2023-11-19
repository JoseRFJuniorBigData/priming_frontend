import React from 'react'
import Graph from 'react-vis-network-graph'


// Função para importar todas as imagens da pasta 'img'
const importAll = (context) => context.keys().map(context);

export default function GraphView() {

    const graph = {
        nodes: [
            {id: 1, label: "Dog", title: "Dog", shape: "circularImage", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS90CXTEr2iyiUvjnQnoIt2nBVDzixFy-jn1sz0C-S73RO7kfVWEBAhiZCm9POv"},
            {id: 2, label: "Hause", title: "Hause", shape: "circularImage", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTeSH-YRXQG6pzdmRzn68Sz9oKdEsjfH8vdO0uv0X67FxSc0X8wsT_xhA8nLdbd"},
            {id: 3, label: "Airplane", title: "Airplane", shape: "circularImage", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSG-lCrVAstpixSkLoXqqBCcduNQmydLOYE4JyXVHsqjahjkYH9xCUoGmhh4I4P"},
            {id: 4, label: "Node 4", title: "node 4 tooltip text", shape: "circularImage", image: "eu.png"},
            {id: 5, label: "Node 5", title: "node 5 tooltip text", shape: "circularImage", image: "eu.png"},
            {id: 6, label: "Node 6", title: "node 6 tooltip text", shape: "circularImage", image: "eu.png"},
            {id: 7, label: "Cat", title: "Cat", shape: "circularImage", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSag4rs4bgceWDF5hY6KaZeu3HerZ_dCvY_gYdOu0yIDQIrwfL8wOC5No-q81t"},
            {id: 8, label: "Node 8", title: "node 8 tooltip text", shape: "circularImage", image: "eu.png"},
            {id: 9,title: "Have", shape: "circularImage", image: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/6666f8bf1d38ded1fc49965fc02fb379.jpg?imageView2/2/w/180/q/70"},
   
        ],
        edges: [
            {from: 1, to: 1, smooth: {type: "curvedCW"}, arrows: {from: {enabled: true, type: "circle"}, to: {enabled: true, type: "circle"}}},
            {from: 1, to: 7, arrows: {from: {enabled: true, type: "vee"}, to: {enabled: true, type: "vee"}}},
            {from: 1, to: 3, arrows: {to: {enabled: true, type: "curve"}}},
            {from: 6, to: 5, color: {highlight: "#fff", opacity: 0.2}},
            {from: 6, to: 2},
            {from: 7, to: 2},
            {from: 6, to: 7},
            {from: 6, to: 8},
            {from: 7, to: 8},
            {from: 8, to: 2},
            {from: 3, to: 7},
        ]
    }

    var options = {
        physics: {
            enabled: false
        },
        interaction: {
            navigationButtons: true
        },
        nodes: {
            borderWidth: 2,
            size: 40,
            color: {
                border: "#222222",
                background: "#666666"
            },
            font: {color: "yellow"}
        },
        edges: {
            color: "yellow"
        },
        shadow: true,
        smooth: true,
        height: "900px"
    }
  return (
    <div className='container'>
        <Graph 
            graph={graph}
            options={options}
        />
    </div>
  )
}


