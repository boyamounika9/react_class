

function Navbar({count}) {
  return (

    <>
      <nav className="navbar bg-1 fg-2 bg-warning">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <form className="d-flex" >
            <button className="btn-outline theme-success" type="submit" >Total Tasks: {count}</button>
          </form>
           
        </div>
      </nav>
    </>
  )
}

export default Navbar