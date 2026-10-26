import { useState } from "react";
import Card from "./Card";

function Productapp() {
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
                        product.map((item)=><Card item={item} handleinc={handleinc} handledec={handledec} /> )

                    }


                </div>
            </div>


        </>
    )
}

export default Productapp;