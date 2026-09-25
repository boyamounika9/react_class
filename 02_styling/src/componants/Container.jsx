function Container(){

    let styleObj ={backgroundColor:'blue',height:'100px',width:'200px',border:'5px solid yellow'};
    return (
        <>

        <div style={{backgroundColor:'red',height:'100px',width:'100px',border:'5px solid black'}}>
            <p>inline</p>
        </div>
        <br />
        <div style={styleObj}>
            <p>writing style out side return and using inside html tag as inline</p>
        </div>

        <h3 className="color" >Componant ends here !</h3>
        <hr />
        </>
    )
}
export default Container;