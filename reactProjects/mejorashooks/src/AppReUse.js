import React from 'react';


const tahoe_peaks = [
  {name:"as",elevation:12}
  
];


function List({data=[],renderItem,renderEmpty}){


  return !data.length?(
    <>
    {renderEmpty()}
    </>
  ):(
    <ul>
      {data.map((item,i)=>(
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  );
      }
  
const RenderItem = (item)=>{
  return(
    <>
    {item.name} - {item.elevation.toLocaleString()}
    </>
  );
}
    
const RenderEmpty = () =>{
  return(
    <p>Lista Vacia</p>
  );
}


export default function App(){
  return(
    <List data = {tahoe_peaks} renderItem = {RenderItem} renderEmpty = {RenderEmpty} />
  )
}