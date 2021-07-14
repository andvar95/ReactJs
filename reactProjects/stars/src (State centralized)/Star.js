import React from 'react';
import {FaStar} from "react-icons/fa";

export default function Star({selected=false, onSelect =(nothing)=>nothing,color}){
    console.log(color)
return(
   
    <FaStar color = {selected? color:'gray'} onClick={onSelect} />
    );
}