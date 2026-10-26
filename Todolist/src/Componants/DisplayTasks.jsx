
function DisplayTasks({tasks,onToggle,ondelete}) {

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-5 m-auto">
            <ul className="list-group">{

              tasks.map(task => <li className="list-group-item d-flex justify-content-between">
                <div>
                  <input type="checkbox" className="form-check-input" checked={task.ischecked} onChange={()=>onToggle(task.id)}/>
                  <span className={`h5 mx-2 ${task.ischecked?'text-danger text-decoration-line-through':'text-success'}` }>{task.inputtext} </span>
                  <span className={`mx-2 ${task.ischecked?'text-danger ':'text-success'}` }>{task.dis} </span>

                </div>
                <button className="btn btn-warning " onClick={()=>ondelete(task.id)}>Delete</button>
              </li>
              )
            }

            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default DisplayTasks


