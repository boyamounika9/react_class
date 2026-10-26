import { useEffect, useState } from "react"


function Usefetch(url) {

      const [data, setData] = useState([])
       const [isloading, setIsloading] = useState(true)
       const [iserror, setIserror] = useState(false)
   
   
       useEffect(() => {
           fetchusers()
   
       }, [])
   
   
       async function fetchusers() {
   
           try {
               let res = await fetch(url)
               let data = await res.json();
               setData(data);
           }
           catch (error) {
               setIserror(error.message)
   
           }
   
           finally {
               setIsloading(false)
   
           }
        }
           
        return [data,isloading,iserror]

}

export default Usefetch