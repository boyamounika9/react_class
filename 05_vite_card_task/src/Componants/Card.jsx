function Card(props) {
    console.log(props)
    return (
        <>

            <div className="col-3 " >
                <div className="card">
                    <div className="card-header">
                        <img src={props.data.imgurl} alt="" className="img-fluid" />

                    </div>
                    <div className="card-body">
                        <h2>Title: {props.data.title} </h2>
                        <p> <b>Description : </b> {props.data.description} </p>
                        <p>ID : {props.data.id}</p>
                        <p>Likes : {props.data.likecount}</p>

                    </div>
                </div>
            </div>


        </>
    )
}
export default Card;