import { useRef } from "react";


function Uncontroled() {

    let inputRef=useRef("")
    console.log(inputRef)

    function handlesubmit(e){
        e.preventDefault()
        console.log(inputRef)
        console.log(inputRef.current)
        console.log(inputRef.current.value)


    }

    return (
        <>
            <section className="container-fulid">
                <form action="" className="form-control mb-3" onSubmit={handlesubmit}>
                    <div className="col-3 m-auto mt-5">
                        <div className="card bg-warning p-5">

                            <label htmlFor="">User Name :</label>
                            <input type="text" placeholder="Enter user name" ref={inputRef} />
                            <label htmlFor="">Password :</label>
                            <input type="password" placeholder="Enter Password"/>
                            <label htmlFor="">Email :</label>
                            <input type="email" placeholder="Enter Email" /> 
                            <button className="btn btn-primary mt-2" type="submit">Submit</button>

                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}
export default Uncontroled;