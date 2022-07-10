import React from "react";

//include images into your bundle

//create your first component
const Home = (props) => {
	return (
	  <div className="container-fluid bg-black">
		<div className="container align-items-center text-light display-1 d-flex justify-content-center">
		  <i className="fa-solid fa-stopwatch mx-1"></i>
		  <div>
			<b className="border border-white mx-1">{props.sixth}</b>
			<b className="border border-white mx-1">{props.fifth}</b>
			<b className="border border-white mx-1">{props.fourth}</b>
			<b className="border border-white mx-1">{props.third}</b>
			<b className="border border-white mx-1">{props.second}</b>
			<b className="border border-white mx-1">{props.first}</b>
		  </div>
		</div>
	  </div>
	);
  };

  
export default Home;

