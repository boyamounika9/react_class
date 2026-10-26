import { useState } from "react"
import DisplayTasks from "./DisplayTasks"
import FormDisplay from "./FormDisplay"
import Navbar from "./Navbar"
import State from "./State"



function TodoApp() {

  let Listitems =[{id:101,inputtext:"Task1",dis:"Lorem ipsum dolor sit amet.",ischecked:false},
                  {id:102,inputtext:"Task2", dis:"Lorem ipsum dolor sit amet.",ischecked:true},
                  {id:103,inputtext:"Task3", dis:"Lorem ipsum dolor sit amet.",ischecked:false}]
  const [item, setItem] = useState(Listitems)

  function handlinginput(data) {
  setItem(prevItems => [
    ...prevItems,
    {
      id:Math.trunc(Math.random()*1000),
      inputtext: data.inputtext,
      dis: data.dis,
      ischecked: false
    }
  ]);
}

function handleToggle(id){
  
  setItem(pre=>pre.map(ele=>ele.id==id?{...ele,ischecked:!ele.ischecked}:ele))

}

function handledelete(id){
  setItem(pre=>pre.filter(ele=>ele.id!==id))

}

  return (
    <>
    <Navbar count={item.length}/>
    <FormDisplay display={handlinginput}/>
    <DisplayTasks tasks={item} onToggle={handleToggle} ondelete={handledelete}/>
    <State />
    </>
  )
}

export default TodoApp


