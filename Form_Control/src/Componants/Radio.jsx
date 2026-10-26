import { useState } from "react";

function Radio(){

   const[gender,setGender] =useState("")
   const[toggle,setToggle]=useState(true)
   function handlesubmit(e){
    e.preventDefault()
    alert("form submitted")
   }
    return (
        <>
        
            <div className="container-fluiid col-2 mt-5 ">
                <div className="card p-3">
                <form action="" onSubmit={handlesubmit} className="form-control">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <br />
                    <label htmlFor="">Gender: </label>
                    <input type="radio" name="gender" id="male" value="male" checked={gender=="male"} onChange={(e)=>setGender(e.target.value)}/>
                    <label htmlFor="male">Male</label>
                    <input type="radio" name="gender" id="female" value="female"  checked={gender=="female"} onChange={(e)=>setGender(e.target.value)} />
                    <label htmlFor="female">Female</label><br />
                    <input type="checkbox" checked={toggle} onChange={(e)=>setToggle(e.target.checked)} />
                    <label htmlFor="">Accept Terms and conditions </label>
                    <input type="submit" />
                </form>
                </div>
            </div>

            <h1>gender:{gender}</h1>
            <h1>Terms and Conditions:{JSON.stringify(toggle)}</h1>
       
        </>
    )
}
export default Radio;