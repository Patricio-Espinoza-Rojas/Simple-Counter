//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
// include your styles into the webpack bundle
import "../styles/index.css";
//import your own components
import Home from "./component/home.jsx";


const counter1 = 0;
const counter2 = 0;
const counter3 = 0;
const counter4 = 0;
const counter5 = 0;
const counter6 = 0;

console.log(counter1, counter2, counter3, counter4, counter5, counter6)

    
function Clock () {
    ReactDOM.render(<Home 
        sixth={counter6} 
        fifth={counter5} 
        fourth={counter4} 
        third={counter3} 
        second={counter2} 
        first={counter1} 
        />, document.querySelector("#app"))
("counter1++") ("counter2++") ("counter3++") ("counter4++") ("counter5++") ("counter6++") };
setInterval(Clock, 1000);

//render your react application



