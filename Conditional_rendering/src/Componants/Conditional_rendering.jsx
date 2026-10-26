import { useState } from "react";

function Conditional_rendering(){
   const[islogin,setIslogin] =useState(false)
    return(
        <>
        <button onClick={()=>setIslogin(!islogin)}>{islogin?"Logout":"Login"}</button>

        {
            // islogin?<h1>Welcome to Home Page</h1>:<p>Please login ... </p>

            islogin&&<h1>Welcome to Home Page</h1>||<p>Please login ... </p>
        }

        </>
    )

}
export default Conditional_rendering;