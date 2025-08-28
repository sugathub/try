import {useState} from "react";
function App() {
  
let [Name ,setName]=useState("sugat");

let reverceName= () =>{
  return setName(Name.split("").reverse().join(""));

} ;
  return (
    <>
    <h1>my name is {Name}</h1>
    <button onClick={reverceName}> click me</button>
    </>
  )
}

export default App
