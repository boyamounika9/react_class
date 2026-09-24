
import "./home.css"
import styleobj from "./home.module.css"

function Home() {
  return (
    <>

    <h1 id="bg-color">Welcome to my home !!!</h1>
    <p className={styleobj.pColor}>this style is comming from home.module.css</p>
    <p  className="color"> this style is comming from home.css</p>
    
    </>
  )
}

export default Home