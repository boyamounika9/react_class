function Childcomp({city,funinparent}){
    function handleclick(){
        funinparent("hello")
    }
    return(
        <>
        <div style={{backgroundColor:"yellow"}}>
            <h1>Child Component</h1>
            <h3>getting city from parent comp:{city}</h3>
            <button onClick={handleclick}>click me</button>

        </div>
        </>
    )
}
export default Childcomp;