import { useState } from "react";

function Bgcolor(){
    const[bgcolor,setBgcolor]=useState('pink')
    return(
        <>
        <div style={{height:'200px',width:'200px',backgroundColor:bgcolor}}></div>
        <button onClick={()=>setBgcolor('black')}>Change</button>
        </>
    )
}
export default Bgcolor;