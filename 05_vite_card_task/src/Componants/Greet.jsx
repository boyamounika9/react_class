

function Greet(props) {
    console.log(props)
  return (
   <>
   <h1>
    Helloo {props.sname} {props.sage}
   </h1>
   </>
  )
}

export default Greet;