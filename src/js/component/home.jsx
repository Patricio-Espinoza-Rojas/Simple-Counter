import React from "react";
import PropTypes from "prop-types";

//include images into your bundle

//create your first component
const Home = (props) => {
	return (
	  <div className="container-fluid bg-black">
		<div className="container align-items-center text-light display-1 d-flex justify-content-center">
		  <i className="fa-solid fa-stopwatch mx-1"></i>
		  <div>
			<b className="border border-white mx-1">{props.first}</b>
			<b className="border-white mx-1">{props.second}</b>
			<b className="border border-white mx-1">{props.third}</b>
			<b className="border-white mx-1">{props.fourth}</b>
			<b className="border border-white mx-1">{props.fifth}</b>
			
		  </div>
		</div>
	  </div>
	);
  };

 Home.propTypes = {
	sixth: PropTypes.number,
	fifth: PropTypes.number,
	fourth: PropTypes.number,
	third: PropTypes.number,
	second: PropTypes.number,
	
  };
    
export default Home;

