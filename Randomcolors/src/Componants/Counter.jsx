import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0)

    function handledec() {
        if(count>0)
        setCount(count - 1)
    }
    return (
        <>
            <div className="card col-3 m-auto mt-5">
                <div className="card-header">
                    <h1>Count:{count}</h1>
                </div>
                <div className="card-body">
                    <button onClick={handledec} className="m-3">dec-1</button>
                    <button onClick={() => setCount(count + 1)} >inc+1</button><br />
                    <button onClick={() => setCount(count + 2)} className="m-3">inc+2</button> 
                    <button onClick={() => setCount(count + 5)}>inc+5</button><br />
                    <button onClick={() => setCount(0)} className="m-5">Reset</button>



                </div>
            </div>


        </>
    )
}
export default Counter;