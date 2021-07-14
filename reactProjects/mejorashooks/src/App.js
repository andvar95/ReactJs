import React,{useState, useEffect} from 'react';
import './App.css';

function App() {
  const [val, set] = useState("");
  const [farase,setFrase] = useState("Frase de ejemplo");

  const crearFrase = ()=>{
    setFrase(val);
    set("")
  } 

  //useEffect(()=>alert(`checked: ${checked.toString()}`),[])
  
  //salert(`checked: ${checked.toString()}`)
  
  return (
   <>
   <label>Mi frase fravorita</label>
    <input type="text"
    value={val}
    onChange={(e)=>
    set(e.target.value)}
    ></input>

   </>
  );
}

export default App;
