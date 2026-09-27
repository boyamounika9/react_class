function Card(props) {
    console.log(props)
    return (
        <>

            <div className="col-3">
                <div className="card">
                    <div className="card-header">
                        <img src={props.src} alt="" className="" />

                    </div>
                    <div className="card-body">
                        <p> </p>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Card;