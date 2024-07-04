    // const heading = React.createElement("h1", {id:'heading'}, "Hello World from React");
    // 
    // root.render(heading)
import React from 'react';
import ReactDOM from 'react-dom/client';

// REACT elemnent  => Object => Render(HTML element)
const heading = React.createElement("h1", {id : "heading"}, "Namaste React")

// jsx => html or xml like syntax
// jsx=> ReactCreateELement => ReactElement=>JSobject
// bable transpiles the jsx code to js
const number = 100;
const jsxHeading  = (
<h1>Namaste React using jsx</h1>
)

const newJSX = (
    <h1 className='heading'>Namste Js</h1>
)
// React Component
// React Functional Component is a functions which returns jsx element
// title is react element , basically a javascript
const title = (
    <div id="title">
        <h1>{number}</h1>
        <h1> This is our title</h1>
    </div>
)
const HeadingJSX = () => {
    return (
        <div id='container'>
            {title}
           <h1>Namaste React Functional Component</h1> 
        </div>
        
    )
}
// Rendering one functional component into other is called functional composition in react
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingJSX/>)
// root.render(heading)
// root.render(jsxHeading);
// root.render(newJSX)