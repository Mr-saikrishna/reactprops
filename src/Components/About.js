import {useState} from 'react'
function About(){
	const [village,setVillage]=useState("USA")
	const [country,setCountry]=useState("India")
	return(
		<div>
		{/*<h1>{country}</h1>
		<p>{village}</p>*/}
		<input onChange={(e)=>setVillage(e.target.value)}/>
		<input onChange={(e)=>setCountry(e.target.value)}/>
		<button onClick={()=>console.log(village,country)}>submit</button>
		</div>
	)
}
export default About