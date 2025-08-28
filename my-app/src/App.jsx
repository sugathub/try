
function App() {
  
let name ="sugat";

let reverceName= (name) =>{
  return name.split("").reverse().join("");

} ;
  return (
    <>
    <h1>my name is {name}</h1>
    <button onClick={reverceName(name)}> click me</button>
    </>
  )
}

export default App
