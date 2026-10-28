import React from 'react'

function Movieslist() {
    let movies = [
  { id: 1, name: "Pushpa 2", hero: "Allu Arjun" },
  { id: 2, name: "RRR", hero: "Ram Charan" },
  { id: 3, name: "Baahubali", hero: "Prabhas" },
  { id: 4, name: "Salaar", hero: "Prabhas" },
  { id: 5, name: "Devara", hero: "Jr. NTR" },
  { id: 6, name: "Kalki 2898 AD", hero: "Prabhas" },
  { id: 7, name: "Arjun Reddy", hero: "Vijay Deverakonda" },
  { id: 8, name: "Jersey", hero: "Nani" },
  { id: 9, name: "Magadheera", hero: "Ram Charan" },
  { id: 10, name: "Ala Vaikunthapurramuloo", hero: "Allu Arjun" }
];
  return (
    <>
    {
        movies.map(ele=><div style={{height:"150px", width:"150px", display:"inline-block" , padding:"30px", border:"solid 2px", margin:"40px"}}>
            <h2>{ele.name}</h2>
            <h3>{ele.hero}</h3>
        </div>)
    }
    </>
  )
}

export default Movieslist

