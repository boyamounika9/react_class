function Defult({title,des,id,likes}){

    return (
        <>

         <div className="col-3 " >
                <div className="card">
                    <div className="card-header">
                        <h1>Title:{title} </h1>

                    </div>
                    <div className="card-body">
                        <p> <b>Description : </b> {des}</p>
                        <p>ID : {id}</p>
                        <p>Likes : {likes}</p>

                    </div>
                </div>
            </div>


        </>
    )
}export default Defult; 
