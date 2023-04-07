import React, { useEffect, useState } from "react";



//create your first component
const Home = () => {
	const [color, setColor] = useState();
	return (
		<div className="container w-25 m-auto bg-dark" style={{ width: '10rem', height: '10rem' }}>
			
			<div className={`circle ${color==="green"? "lightOn": ""} p-5 bg-success  text-center rounded-circle  mx-auto`}  onClick={() => {
				setColor('green');
			}}></div>
			<div className={`circle ${color==="yellow"? "lightOn": ""} p-5 bg-warning rounded-circle mx-auto`} onClick={() => {
				setColor('yellow');
			}}></div>
			<div className={`circle ${color==="red"? "lightOn": "" } p-5 bg-danger rounded-circle mx-auto`} onClick={() => {
				setColor('red');
			}}></div>
		</div>

	);
};

export default Home;
