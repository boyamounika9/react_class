import { useState } from "react";

function Counter(){
    const[count,setCount]=useState(0);
    function counter(){
        setCount(ref=>ref+1)
        setCount(ref=>ref+1)
        console.log(count)

    }
    return(
        <>
        <h1>
            count:{count}
        </h1>
        <button onClick={counter}>+</button>
        </>
    )
}
export default Counter;