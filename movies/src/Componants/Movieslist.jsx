import React from 'react'
import { useContext } from 'react'
import MovieContex from './Context'

function Movieslist() {
  let data =useContext(MovieContex)
   
  return (
    <>
    {
        data.map(ele=> <div className="card">
  <div className="card-body">
    <h1>{ele.name}</h1>
    <h3>{ele.hero}</h3>
    
  </div>
</div>)
    }
    </>
  )
}

export default Movieslist


