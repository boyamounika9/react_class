function Card({item,handleinc,handledec}){
    return(
        <>
        <div className="col-3 m-3 " key={item.id}>
                            <div className="card">
                                <div className="card-header bg-warning">
                                    <h1>{item.productName}</h1>
                                </div>
                                <div className="card-body">
                                    <h4>Price: {item.price}</h4>
                                    <h4>Category: {item.category}</h4>
                                    <button className="btn btn-success"onClick={() => handleinc(item.id)}>+</button>
                                    <span className="m-3">{item.quantity}</span>
                                    <button className="btn btn-danger" onClick={() => handledec(item.id)}>-</button>


                                </div>

                            </div>
                        </div>
        </>
    )
}

export default Card;