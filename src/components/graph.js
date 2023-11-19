import React from 'react'
import Graph from 'react-vis-network-graph'


// Função para importar todas as imagens da pasta 'img'
const importAll = (context) => context.keys().map(context);

export default function GraphView() {

    const graph = {
        nodes: [
            {id: 1, label: "Dog", title: "Dog", shape: "circularImage", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS90CXTEr2iyiUvjnQnoIt2nBVDzixFy-jn1sz0C-S73RO7kfVWEBAhiZCm9POv"},
            {id: 2, label: "Hause", title: "Hause", shape: "circularImage", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTeSH-YRXQG6pzdmRzn68Sz9oKdEsjfH8vdO0uv0X67FxSc0X8wsT_xhA8nLdbd"},
            {id: 3, label: "Wood", title: "Wood", shape: "circularImage", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQISbUmc6XSYNpXg0gJ6a6f6QDf48dTrzBICGFNUTodYSUAUcrWYoK5fM5BN-OF"},
            {id: 4, label: "Fed", title: "Fed", shape: "circularImage", image: "https://media-lis1-1.cdn.whatsapp.net/v/t61.24694-24/370582283_1463226837551788_1586950722052361677_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTa5jvoY8-6cL10_sc-wQ9NJuW3hfyD_VSfVZ7M6GYj1g&oe=65664578&_nc_sid=e6ed6c&_nc_cat=101"},
            {id: 5, label: "Black Man", title: "Black Man", shape: "circularImage", image: "https://media-lis1-1.cdn.whatsapp.net/v/t61.24694-24/240469717_675582226773161_2376587852206869502_n.jpg?ccb=11-4&oh=01_AdQDkn6G2EGublxLgL-CVjVWkJM78DgBiw6bSzRzWOEbKQ&oe=65663724&_nc_sid=e6ed6c&_nc_cat=103"},
            {id: 6, label: "Fork", title: "Fork", shape: "circularImage", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1n5EUm-bwXeI7ZPR52pWeVYYGI2PZwO6Lq9d82VO_qmr1-iScra0Kr3I33NOu"},
            {id: 7, label: "Cat", title: "Cat", shape: "circularImage", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSag4rs4bgceWDF5hY6KaZeu3HerZ_dCvY_gYdOu0yIDQIrwfL8wOC5No-q81t"},
            {id: 8, label: "Food", title: "Food", shape: "circularImage", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQf2mG4CR4IgrVX-tzXo8sY-5qU5BjkBeTx8yjmg7EnksBek77VxxBFS0IT0vSU"},
            {id: 9,title: "Have", shape: "circularImage", image: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/6666f8bf1d38ded1fc49965fc02fb379.jpg?imageView2/2/w/180/q/70"},
   
        ],
        edges: [
            {from: 1, to: 1, smooth: {type: "curvedCW"}, arrows: {from: {enabled: true, type: "circle"}, to: {enabled: true, type: "circle"}}},
            {from: 1, to: 7, arrows: {from: {enabled: true, type: "vee"}, to: {enabled: true, type: "vee"}}},
            {from: 1, to: 3, arrows: {to: {enabled: true, type: "curve"}}},
            {from: 6, to: 5, color: {highlight: "#000", opacity: 0.2}},
            {from: 6, to: 2},
            {from: 7, to: 2},
            {from: 6, to: 7},
            {from: 6, to: 8},
            {from: 7, to: 8},
            {from: 8, to: 2},
            {from: 3, to: 7},
            {from: 5, to: 3, color: {highlight: "#000", opacity: 0.2}},
            {from: 4, to: 8, color: {highlight: "#000", opacity: 0.2}},
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
            font: {color: "black"}
        },
        edges: {
            color: "black"
        },
        shadow: true,
        smooth: true,
        height: "900px"
    }
    return (
        <div className='container'>
          <h2 style={{ position: 'absolute', top: 0 }}>My Graph</h2>
          <Graph 
            graph={graph}
            options={options}
          />
        </div>
      );
}


