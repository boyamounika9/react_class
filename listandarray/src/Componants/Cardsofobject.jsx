import { useState } from "react";

function Cardofobject() {
    let initialvalue = [
        {
            id: 1,
            productName: "Laptop",
            price: 55000,
            category: "Electronics",
            quantity: 10
        },
        {
            id: 2,
            productName: "Smartphone",
            price: 25000,
            category: "Electronics",
            quantity: 15
        },
        {
            id: 3,
            productName: "T-Shirt",
            price: 799,
            category: "Clothing",
            quantity: 25
        },
        {
            id: 4,
            productName: "Running Shoes",
            price: 2499,
            category: "Footwear",
            quantity: 12
        },
        {
            id: 5,
            productName: "Backpack",
            price: 1200,
            category: "Bags",
            quantity: 20
        }
    ];

    const [product, setProduct] = useState(initialvalue);

    function handleinc(id) {
        setProduct(prev => prev.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    }

    function handledec(id) {
        setProduct(prev => prev.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
    }

    return (
        <>

            <div className="container-fluid">
                <div className="row">


                    {
                        product.map((item)=> <div className="col-3 m-3 " key={item.id}>
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
                        </div>)

                    }


                </div>
            </div>


        </>
    )
}

export default Cardofobject;