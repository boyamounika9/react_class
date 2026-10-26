function Listrendering() {
    let names = ["mounika", "manasa", "mallika", "manjula"]
    return (
        <>
        <h3>============</h3>
        <h1>List Rendering</h1>
        <h3>============</h3>
            {
                names.map((list)=>{
                    return (
                        <h1>{list}</h1>
                    )
                })

            }
        </>
    )
}
export default Listrendering;