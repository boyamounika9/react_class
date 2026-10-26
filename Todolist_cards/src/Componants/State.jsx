
function State({ tasks }) {

  let totaltasks = tasks.length;

  let completedtasks = tasks.filter(
    (task) => task.ischecked
  ).length;

  let pendingtasks = totaltasks - completedtasks;

  let completedpercentage =
    totaltasks === 0
      ? 0
      : Math.round((completedtasks / totaltasks) * 100);

  return (
    <div className="container my-4">
      <div className="row g-3">

        <div className="col-md-3">
          <div className="card p-3 text-center">
            <h5>Total Tasks</h5>
            <h2>{totaltasks}</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3 text-center">
            <h5>Completed Tasks</h5>
            <h2 className="text-success">{completedtasks}</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3 text-center">
            <h5>Pending Tasks</h5>
            <h2 className="text-danger">{pendingtasks}</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3 text-center">
            <h5>Completion</h5>
            <h2 className="text-primary">
              {completedpercentage}%
            </h2>
          </div>
        </div>

      </div>

      <div className="progress mt-4" style={{ height: "25px" }}>
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: `${completedpercentage}%` }}
          aria-valuenow={completedpercentage}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {completedpercentage}%
        </div>
      </div>

    </div>
  );
}

export default State;

