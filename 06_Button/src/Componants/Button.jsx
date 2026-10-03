function Button({children,color="dark"}){
    return(
        <>
        
        <button className={`btn btn-${color} m-3`}>{children}</button>
        </>
    )
}
export default Button;