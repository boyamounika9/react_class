import { useEffect } from "react"
import { useState } from "react"

function Users() {
    const [user, setUser] = useState([])
    const [isloading, setIsloading] = useState(true)
    const [iserror, setIserror] = useState(false)


    useEffect(() => {
        fetchusers()

    }, [])


    async function fetchusers() {

        try {
            let res = await fetch('https://fakestoreapi.com/users')
            let data = await res.json();
            setUser(data);
        }
        catch (error) {
            setIserror(error.message)

        }

        finally {
            setIsloading(false)

        }
    }



    return (
        <>
            {
                iserror && <h1 className="text-danger">{iserror}</h1>
            }
            
            {/* {
                isloading && <h1 className="m-auto m-3 bg-primary text-warning">page is Loading Please wait !!!!!!!</h1>
            } */}



            {
                isloading && (
                    <>
                        <style>
                            {`
                    @keyframes shimmer {
                        0% {
                            background-position: 200% 0;
                        }
                        100% {
                            background-position: -200% 0;
                        }
                    }
                `}
                        </style>

                        <table border="1" cellPadding="5" cellSpacing="5">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>username</th>
                                    <th>email</th>
                                    <th>password</th>
                                </tr>
                            </thead>

                            <tbody>
                                {Array.from({ length: 10 }).map((_, index) => (
                                    <tr key={index}>
                                        {[1, 2, 3, 4].map((item) => (
                                            <td key={item}>
                                                <div
                                                    style={{
                                                        height: "20px",
                                                        width: item === 1 ? "25px" : "150px",
                                                        borderRadius: "4px",
                                                        background: "linear-gradient(90deg, #eeeeee 25%, #dddddd 50%, #eeeeee 75%)",
                                                        backgroundSize: "200% 100%",
                                                        animation: "shimmer 1.5s infinite linear"
                                                    }}
                                                />
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )
            }


            {
                !isloading && !iserror && <table border="1" cellPadding="5" cellSpacing="5">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>username</th>
                            <th>email</th>
                            <th>password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map(users => {
                                return (
                                    <>
                                        <tr>
                                            <td>{users.id}</td>
                                            <td>{users.username}</td>
                                            <td>{users.email}</td>
                                            <td>{users.password}</td>
                                        </tr>

                                    </>
                                )
                            }
                            )
                        }
                    </tbody>

                </table>
            }


        </>
    )
}

export default Users