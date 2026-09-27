import Navbar from "./componants/Navbar";
import image from "./asserts/img3.avif"
function App(){
  return(
    <>
    <Navbar />

  <section className="container-fluid">
    <div className="row m-3">
      <div className="col-3">
        <div className="card">
          <div className="card-header">
            <img src="https://tse1.mm.bing.net/th/id/OIP.rTk8r6ZUf6CpDhAhtj6SYgHaFj?r=0&pid=Api&h=220&P=0" alt="" className="img-fluid" />
            
          </div>
          <div className="card-body">
            <p>image from absolute path </p>
          </div>
        </div>
      </div>

          <div className="col-3">
        <div className="card">
          <div className="card-header">
            <img src={require("./asserts/img2.jpg" )}alt="" className="img-fluid" />
            
          </div>
          <div className="card-body">
            <p>from asserts/using require</p>
          </div>
        </div>
      </div>

          <div className="col-3">
        <div className="card">
          <div className="card-header">
            <img src="img1.jpg" alt="" className="img-fluid" />
            
          </div>
          <div className="card-body">
            <p>from public folder</p>
          </div>
        </div>
      </div>

          <div className="col-3">
        <div className="card">
          <div className="card-header">
            <img src={image} alt="" className="img-fluid" />
            
          </div>
          <div className="card-body">
            <p>from imported</p>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
export default App;