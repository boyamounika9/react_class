
function DisplayTasks({ tasks, onToggle, ondelete ,}) {

 

  return (
    <>
      <div className="container-fluid" >
        <div className="row" style={{ display: "grid" }}>
          <div className="row" >
          {
            tasks.map(task => 
              
                <div className={`card m-3 ${task.ischecked ? 'bg-warning ' : 'bg-light'}`} style={{ width: "18rem" }}>
                  <div className="card-body">
                    < div >
                      <input type="checkbox" className="form-check-input" checked={task.ischecked} onChange={() => onToggle(task.id)} />
                      <span className={`h5 mx-2 ${task.ischecked ? 'text-danger text-decoration-line-through' : 'text-success'}`}>{task.inputtext} </span>
                      <p className={`mx-2 ${task.ischecked ? 'text-danger ' : 'text-success'}`}>{task.dis} </p>

                    </div >
                    <button className="btn btn-warning " onClick={() => ondelete(task.id)}>Delete</button>
                  </div>
                </div>
             
          
            )
          }
  </div>
        </div>
      </div>

    </>
  )
}

export default DisplayTasks


