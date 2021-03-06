import logo from './logo.svg';
import './App.css';
import StarRating from "./StarRating"
import ColorList from "./ColorList"
import React,{useState} from "react";
import colorData from "./color-data.json"
import AddColorForm from "./AddColorForm";
import {v4} from "uuid";

function App() {
  const [colors,setColors] = useState(colorData);
  return (
    <div className ="content">
     
     
    <AddColorForm onNewColor={(title,color)=>{
    const newColor =[...colors,{
     id:v4(),
     rating:0,
     title,
     color
    }]
    setColors(newColor)
     }}/> 
    <ColorList  colors ={colors} onRemoveColor={id=>
    {const newColors = colors.filter(color=>color.id !== id)
    setColors(newColors);}}

    onRateColor ={(id,rating)=>{
      const  newColors = colors.map((color)=>(
        color.id === id ?{...color,rating}:color
      ))
      setColors(newColors)

    }}
  
   
     />


</div>
  );
 
  
   

}

export default App;
