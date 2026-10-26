
import { useState, useEffect } from "react";

function Shoppingapp() {
    const [data, setData] = useState([]);
    const [liked, setLiked] = useState([]);
    const [cart, setCart] = useState([]);

   
    useEffect(() => {
        fetchusers();
    }, []);

    async function fetchusers() {
        try {
            let res = await fetch("https://fakestoreapi.com/products");
            let products = await res.json();
            setData(products);
        } catch (error) {
            console.log(error);
        }
    }

    function handleLike(id) {
        if (liked.includes(id)) {
            setLiked(liked.filter(item => item !== id));
        } else {
            setLiked([...liked, id]);
        }
    }

    function addToCart(product) {
        const existingProduct = cart.find(
            item => item.id === product.id
        );

        if (existingProduct) {
            setCart(
                cart.map(item =>
                    item.id === product.id
                        ? { ...item, count: item.count + 1 }
                        : item
                )
            );
        } else {
            setCart([
                ...cart,
                { ...product, count: 1 }
            ]);
        }
    }

    // Total quantity of all products in cart
    const cartCount = cart.reduce(
        (sum, item) => sum + item.count,
        0
    );

    return (
        <>
          
            <nav
                className="navbar bg-warning p-3"
                style={{
                    display: "flex",
                    justifyContent: "space-between"
                }}
            >
                <h1>M ~ Shopy 🛍️</h1>

                <div>
                    <button className="btn btn-light me-2">
                        ❤️ {liked.length}
                    </button>

                    <button className="btn btn-dark">
                        🛒 Cart ({cartCount})
                    </button>
                </div>
            </nav>

           
            <div className="container-fluid mt-4">
                <div className="row">

                
                    <div className="col-lg-9">
                        <div className="row">

                            {data.map(pro => (
                                <div
                                    className="col-12 col-sm-6 col-md-4 col-xl-3 mb-4"
                                    key={pro.id}
                                >
                                    <div
                                        className="card h-100"
                                        style={{ minHeight: "500px" }}
                                    >

                                      
                                        <div
                                            className="bg-light p-3"
                                            style={{
                                                height: "250px",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center"
                                            }}
                                        >
                                            <img
                                                src={pro.image}
                                                alt={pro.title}
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "contain"
                                                }}
                                            />
                                        </div>

                                      
                                        <div className="card-body bg-secondary text-light d-flex flex-column">

                                            <h5
                                                style={{
                                                    height: "48px",
                                                    overflow: "hidden",
                                                    display: "-webkit-box",
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: "vertical"
                                                }}
                                            >
                                                {pro.title}
                                            </h5>

                                            <p>
                                                Category: {pro.category}
                                            </p>

                                            <h4 className="mt-auto">
                                                ${pro.price.toFixed(2)}
                                            </h4>

                                           
                                            <div className="d-flex gap-2 mt-3">

                                                <button
                                                    className={`btn ${
                                                        liked.includes(pro.id)
                                                            ? "btn-danger"
                                                            : "btn-light"
                                                    }`}
                                                    onClick={() =>
                                                        handleLike(pro.id)
                                                    }
                                                >
                                                    {liked.includes(pro.id)
                                                        ? "❤️ Liked"
                                                        : "🤍 Like"}
                                                </button>

                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() =>
                                                        addToCart(pro)
                                                    }
                                                >
                                                    🛒 Add
                                                </button>

                                            </div>

                                            <button className="btn btn-dark mt-2">
                                                Buy Now
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* RIGHT SIDE: CART */}
                    <div className="col-lg-3">

                        <div
                            className="card shadow"
                            style={{
                                position: "sticky",
                                top: "20px"
                            }}
                        >

                            <div className="card-header bg-dark text-white">
                                <h4 className="mb-0">
                                    🛒 My Cart ({cartCount})
                                </h4>
                            </div>

                            <div
                                className="card-body"
                                style={{
                                    maxHeight: "75vh",
                                    overflowY: "auto"
                                }}
                            >

                                {cart.length === 0 ? (
                                    <p className="text-muted">
                                        Your cart is empty! 🛍️
                                    </p>
                                ) : (

                                    cart.map(item => (
                                        <div
                                            key={item.id}
                                            className="border-bottom pb-3 mb-3"
                                        >

                                            <div className="d-flex align-items-center gap-2">

                                                {/* CART IMAGE */}
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    style={{
                                                        width: "60px",
                                                        height: "60px",
                                                        objectFit: "contain"
                                                    }}
                                                />

                                                {/* CART DETAILS */}
                                                <div>
                                                    <h6>
                                                        {item.title}
                                                    </h6>

                                                    <p className="mb-1">
                                                        Price: ${item.price.toFixed(2)}
                                                    </p>

                                                    <span className="badge bg-warning text-dark">
                                                        Quantity: {item.count}
                                                    </span>
                                                </div>

                                            </div>

                                        </div>
                                    ))

                                )}

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default Shoppingapp;
