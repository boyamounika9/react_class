import { useState } from "react";

function Form(){

    function onchangeevent(e){
        console.log(e.target.value)
        setInput(e.target.value)
    }
   const[input,setInput] =useState("")
    return(
        <>
        <h1>Form handling in controlled way</h1>
        <input type="text"  value={input} onChange={onchangeevent}/>
        </>
    )
}
export default Form;