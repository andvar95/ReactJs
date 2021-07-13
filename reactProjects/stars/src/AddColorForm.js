import React,{useRef, useState} from 'react'


export default function AddColorForm({onNewColor=(title,color)=>(title,color)}){

    //const [title,setTitle] = useState("");
    const [titleProps,resetTitle] = useInput("")
    const [colorProps,resetColor] = useInput("blue")

    //const txtTitle = useRef();
 
    const submit= evt =>{
        evt.preventDefault();
        //let title = txtTitle.current.value
        //alert(title)
        //txtTitle.current.value = "blue"
        //console.log(title)
        //onNewColor(title);
        onNewColor(titleProps.value,colorProps.value);
        resetTitle()
        resetColor()

    }
    return(
    <form onSubmit={submit}>
        {/*<input 
        type="text"
        required 
        onChange={
            event=>setTitle(event.target.value)
        }
        value={title}
    placeholer="color" ></input>*/}
    <input 
    {...titleProps}
    type="text" 
    placeholer="color"
    ></input>
    <input
    {...colorProps}
    type="color"
    >
    
    </input>
        <button>Add</button>

    </form>

    );
}

/* custom Hooks*/
export const useInput = initialValue =>{
 const [value,setValue] = useState(initialValue);

 return[
     {value,onChange:event=>setValue(event.target.value)},
     ()=>setValue(initialValue)
 ]
}