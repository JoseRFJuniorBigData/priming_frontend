# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# priming_frontend


import React from 'react'
import Graph from 'react-vis-network-graph'
var DIR = "../img/";
export default function GraphView() {
    var DIR = "../img/";
    const graph = {
        nodes: [
            {id: 1, label: "Node 1", title: "node 1 tooltip text",
            shape: "box"},
            {id: 2, label: "Node 2", title: "node 2 tooltip text",
            shape: "circle"},
            {id: 3, label: "Node 3", title: "node 3 tooltip text",
            shape: "circle"},
            {id: 4, label: "Node 4", title: "node 4 tooltip text",
            shape: "circle"},
            {id: 5, label: "Node 5", title: "node 5 tooltip text", shape: "circle", image: DIR + "eu.png"},
            {id: 6, label: "Node 6", title: "node 6 tooltip text", shape: "circle", image: DIR + "eu.png"},
            {id: 7, label: "Node 7", title: "node 7 tooltip text", shape: "circle", image: DIR + "eu.png"},
            {id: 8, label: "Node 8", title: "node 8 tooltip text"},
            {id: 9, label: "Node 9", title: "node 9 tooltip text"},
            {id: 10,title: "Have", shape: "circularImage", image: DIR + "eu.png"}
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


