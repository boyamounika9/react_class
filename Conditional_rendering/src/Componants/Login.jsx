import { useRef, useState } from "react"

function Login() {

    let spanRef = useRef("")
    const [input, setInput] = useState({ usn: "", pass: "", email: "" })

    function HandlingInputs(e) {
        let { name, value } = e.target;
        setInput({ ...input, [name]: value })
        if (value.length < 6) {
            spanRef.current.innerText = "* Minimum 6 characters needed *";
        } else {
            spanRef.current.innerText = "";
        }


    }



    return (
        <>
            <section className="container-fulid">
                <form action="" className="form-control mb-3" >
                    <div className="col-3 m-auto mt-5">
                        <div className="card  p-5">

                            <label htmlFor="">User Name :</label>
                            <input type="text" placeholder="Enter user name" value={input.usn} name="usn" onChange={HandlingInputs} /> <span className="text-danger" ref={spanRef}></span>
                            <label htmlFor="">Password :</label>
                            <input type="password" placeholder="Enter Password" value={input.pass} name="pass" onChange={HandlingInputs} /> 
                            <label htmlFor="">Email :</label>
                            <input type="email" placeholder="Enter Email" value={input.email} name="email" onChange={HandlingInputs} />
                            <button className="btn btn-warning mt-2" type="submit">Submit</button>

                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}
export default Login;