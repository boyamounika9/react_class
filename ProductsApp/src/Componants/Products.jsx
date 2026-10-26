import Usefetch from "./Usefetch";


function Products() {

    const [data, isloading, iserror] = Usefetch("https://fakestoreapi.com/products")
    return (

        <>

            {
                isloading && <div className="container-fluid mt-4">
                    <div className="row">

                        {Array(8).fill("").map((_, index) => (
                            <div className="col-12 col-sm-6 col-lg-3 mb-4" key={index}>
                                <div className="card" style={{ height: "550px" }}>

                                    {/* Image placeholder */}
                                    <div className="placeholder-glow">
                                        <span
                                            className="placeholder col-12 bg-secondary"
                                            style={{ height: "300px" }}
                                        ></span>
                                    </div>

                                    {/* Product details placeholders */}
                                    <div className="card-body placeholder-glow">

                                        {/* Title */}
                                        <span className="placeholder col-10 mb-3"></span>

                                        {/* Category */}
                                        <span className="placeholder col-6 mb-3"></span>

                                        {/* Price */}
                                        <span className="placeholder col-5 mt-5 mb-3"></span>

                                        {/* Button */}
                                        <span className="placeholder col-4"></span>

                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            }


            {
                iserror && <div className="col-3 m-auto mt-5 ">
                    <div className="card p-3" style={{border:"solid 2px red"}}>
                        <h5 className="text-danger"> {iserror}</h5>
                    </div>
                </div>
            }

            {!isloading && !iserror &&
                <div className="container-fluid">
                    <div className="row">
                        {data.map(pro => (
                            <div className="col-3 mb-4" key={pro.id}>
                                <div
                                    className="card m-2"
                                    style={{
                                        height: "550px",
                                        overflow: "hidden"
                                    }}
                                >
                                    {/* Image container */}
                                    <div
                                        className="bg-light"
                                        style={{
                                            height: "300px",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            flexShrink: 0
                                        }}
                                    >
                                        <img
                                            src={pro.image}
                                            alt={pro.title}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "contain",
                                                padding: "5px"
                                            }}
                                        />
                                    </div>

                                    {/* Card body */}
                                    <div
                                        className="card-body bg-secondary text-light d-flex flex-column"
                                    >
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

                                        <p>Category: {pro.category}</p>

                                        <h3 className="mt-auto">
                                            Price: {pro.price}
                                        </h3>

                                        <button className="btn btn-warning align-self-start">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            }

        </>
    );
}

export default Products;