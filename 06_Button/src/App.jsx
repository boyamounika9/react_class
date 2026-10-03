// import Defult from "./Componants/Defult";

// import Button from "./Componants/Button";

import Greet from "./Componants/Greet";
function App() {
  let data={
   c1:{name:"mouni",age:18}
  }
  return (
    <>
{/* 
      <Greet sname="mounika" sage={21}/>
   <Greet sname="manasa" sage={20}/> */}
   <Greet datas={data}/>



{/* 
<Defult title="Rose" des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, iste.
" id="01" likes="10"/> */}

{/* 
<Button color="warning"> Buy now</Button>
<Button color="danger"> Add to cart</Button>
<Button>add to wish list</Button> */}

 




    </>
  )
}
export default App;