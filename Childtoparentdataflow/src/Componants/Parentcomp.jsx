import { useState } from "react";
import Childcomp from "./Childcomp";

function Parentcomp(){
    const[city,setCity]=useState("bng")
    const[data,setData]=useState("")
    function funinparent(data){
        setData(data) 
    }

   return(
    <>
    <div style={{backgroundColor:"pink"}}>
        <h1>Parent Component</h1>
        <h1>data from child: {data}</h1>

        <Childcomp city={city} funinparent={funinparent}/>
        
    </div>
    </>
   )
}
export default Parentcomp;