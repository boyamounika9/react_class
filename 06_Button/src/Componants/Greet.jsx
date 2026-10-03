

function Greet({datas}) {
   let {c1:{name,age}}=datas;
  return (
   <>
   <h1>
    Helloo {name} {age}
   </h1>
   </>
  )
}

export default Greet;