import { useState } from "react"


function FormDisplay({display}) {
  const [inputtext,setInputtext]=useState("")
  const [destext,setDestext]=useState("")

  function handlesubmit(e){
    e.preventDefault()
     display({
    inputtext: inputtext,
    dis: destext
  })
    setInputtext(" ")
    setDestext(" ")
  }



  return (
    <>
      <div className="container-fluid m-3">
        <div className="row">
          <div className="col-5 m-auto">
            <form action="" onSubmit={handlesubmit}>
              <label htmlFor="">Task: </label>
              <input type="text" name="" id="" value={inputtext} onChange={(e)=>setInputtext(e.target.value)}/>
              <label htmlFor="">Description: </label>
              <input type="text" name="" id="" placeholder="Discription"  value={destext} onChange={(e)=>setDestext(e.target.value)} />
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormDisplay

