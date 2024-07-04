    // const heading = React.createElement("h1", {id:'heading'}, "Hello World from React");
    // 
    // root.render(heading)
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [
      React.createElement("h1", { key: "h1" }, "I am an H1 tag"),
      React.createElement("h2", { key: "h2" }, "I am an H2 tag")
    ]
  )
);

root.render(parent);

 // package.json is confuguration of npm