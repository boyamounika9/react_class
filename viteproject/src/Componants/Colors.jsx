import { useState } from "react";

function Colors() {
    const [color, setColor] = useState("red")
    function randomcolors() {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        return `rgb(${red},${green},${blue})`;
    }
    return (
        <>
            <div className="container-fluid m-5 ">
                <div style={{ height: "200px", width: "200px", backgroundColor: color }}></div><br />
                <button onClick={() => setColor(randomcolors)}>Click to change color</button>

            </div>

        </>
    )
}
export default Colors;