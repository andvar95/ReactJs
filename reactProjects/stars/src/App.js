import './App.css';
import ColorList from "./ColorList"
import React from "react";
import AddColorForm from "./AddColorForm";


function App() {
  return (
    <div className ="content">
      <AddColorForm /> 
      <ColorList />
    </div>
  );
 
  
   

}

export default App;
