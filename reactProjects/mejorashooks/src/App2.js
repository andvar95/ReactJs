import React,{useState, useEffect, useMemo} from 'react';
import './App.css';

const useAnyKeyToRender = () =>{
  const  [,forceRender] = useState(true);
  useEffect(()=>{
    window.addEventListener("keydown",forceRender);
  },
  []);
};

function WordCount({children}) {
  useAnyKeyToRender();
  //children.split(" ");
  const words = useMemo(()=>children.split(" "),[children]);

  useEffect(()=>console.log(" Se ejecuta use effect"),[words])
  /*
  const [val, set] = useState("");
  const [frase,setFrase] = useState("Frase de ejemplo");


  const crearFrase = ()=>{
    setFrase(val);
    set("")

    
    if([1,2,3] === [1,2,3]){
      console.log("entre")
    }
  };


  //callback and ???

  useEffect(
    ()=>console.log(`Escribiendo valor: ${val} : ${frase}`),
    [val,frase]
  )
  /*
  useEffect(
    ()=>console.log(`Escribiendo valor: ${val}`),
    [val]
  ) 

  useEffect(
    ()=>console.log(`Frase enviada: ${frase}`),
    [frase]
  )
*/
  //useEffect(()=>alert(`checked: ${checked.toString()}`),[])
  
  //salert(`checked: ${checked.toString()}`)
  
  return (
   <>
   <p>{children}</p>
   <p>
     <strong>{words.length} - words</strong>
  </p>



   {/*
   <label>Mi frase fravorita</label>
    <input type="text"
    value={val}
    onChange={(e)=>
    set(e.target.value)}
    ></input>
    <button onClick={
      crearFrase
    }> Enviar frase: {} </button>
  */}
   </>
  );
}

export default function App()
{
  return (
    <WordCount>Un texto cualquiera</WordCount>
  );
}
