import React, { useEffect, useState } from "react";



//create your first component
const Home = () => {
	const [color, setColor] = useState();
	const threeColor =["green", "yellow", "red"];
	const [value, setValue] = useState(0);

	useEffect(()=>{
		setInterval(() => {
			setValue((v) => (v === 2 ? 0 : v + 1));
		  }, 2000);
	}, []);
	
	return (
		<div className="mx-auto my-auto">
		<div className="container bg-dark" style={{ width: '7rem', height: '16rem' }}>
			<div className={`circle ${color==="green"? "lightOn": ""} bg-success  text-center rounded-circle  mx-auto`}  onClick={() => {
				setColor('green');
			}}></div>
			<div className={`circle ${color==="yellow"? "lightOn": ""} bg-warning rounded-circle mx-auto`} onClick={() => {
				setColor('yellow');
			}}></div>
			<div className={`circle ${color==="red"? "lightOn": "" } bg-danger rounded-circle mx-auto`} onClick={() => {
				setColor('red');
			}}></div>
			<button className="btn btn-success" onClick={()=>{

				setColor(threeColor[value]);
				console.log(value);

			}}>Run the color</button>
		</div>
		<div className="container bg-dark" style={{ width: '1rem', height: '18rem' }}></div>
		<div className="container bg-dark w-50" style={{height: '5rem' }}></div>
		</div>
	);
};

export default Home;
