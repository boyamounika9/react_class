
import Axios from "axios";
import { useEffect } from "react";

function Axiostask() {
    useEffect(() => {
        fetchpost();
    }, []);

    async function fetchpost() {
        let res = await Axios.get("https://jsonplaceholder.typicode.com/posts");

        console.log(res.data);
    }

    return (
        <>
            <h1>Axios Task</h1>
        </>
    );
}

export default Axiostask;

