function Arrayofobjects() {
    let names = [{name:"mounika",age:21},{name:"manjula",age:16},{name:"mallika",age:18},{name:"manasa",age:20}]
    return (
        <>
        <h3>============</h3>
        <h1>Array of Objects Rendering</h1>
        <h3>============</h3>
            {
                names.map((list)=>{
                    return (
                        <>
                        <h1> name: {list.name}</h1>
                        <h1>age: {list.age}</h1><br />
                        </>
                    )
                })

            }
        </>
    )
}
export default Arrayofobjects;