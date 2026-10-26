import { useState } from "react";
import Register from "./Resister";
import Login from "./Login";
function Nav() {

    const[islogin,setIslogin]=useState(false)
    function handlebtn(e){
        e.preventDefault()
        setIslogin(!islogin)
    }


    return (
        <>
            <nav className="navbar bg-1 fg-2 bg-warning">
                <div className="container-fluid">
                    <a className="navbar-brand">Navbar</a>
                    <form className="d-flex" >
                        <button className="btn-outline theme-success" type="submit" onClick={handlebtn }>{islogin ? "Login" :"Resiater"}</button>
                    </form>
                </div>
            </nav>
            {
                islogin? <Register/> :<Login/>
            }

        </>
    )
}
export default Nav;