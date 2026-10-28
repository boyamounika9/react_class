import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
    let lists = [{ id: 1, title: "mobile" }, { id: 2, title: "laptop" }, { id: 3, title: "dress" }, { id: 4, title: "pen" },]
    return (
        <>
            {
                lists.map(ele =>
                    <Link to={`productdetails/${ele.id}`}>
                        <h4>{ele.title}</h4>
                    </Link>
                )
            }

            <Outlet/>
        </>
    )
}

export default Products