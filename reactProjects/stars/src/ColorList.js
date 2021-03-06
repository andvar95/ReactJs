import React from "react";
import Color from "./Color";
import {useColors} from "./ColorProvider"


export default function ColorList(){
    const {colors} = useColors();
  

    if(!colors.length){
        return (
            <div>
                No hay Colores
            </div>

        )
    }

    return(
        <div>
            {colors.map(color=>(
                <div>
                <Color key={color.id} 
                {...color}
                />
                
                </div>
            ))}
         
        </div>
    )



}