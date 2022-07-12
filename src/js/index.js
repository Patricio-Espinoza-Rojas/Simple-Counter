//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
// include your styles into the webpack bundle
import "../styles/index.css";
//import your own components
import Home from "./component/home.jsx";


let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;

    
function Clock () {
    ReactDOM.render(<Home 
        first={counter1} 
        second={counter2} 
        third={counter3} 
        fourth={counter4} 
        fifth={counter5} 
         
        />, document.querySelector("#app"))
counter1++, counter2++, counter3++, counter4++, counter5++};
setInterval(Clock, 10);

//render your react application



