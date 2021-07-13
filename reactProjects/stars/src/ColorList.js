import React from "react";
import Color from "./Color";



export default function ColorList({colors=[],onRemoveColor,onRateColor= params=>params}){

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
                onRemove={onRemoveColor}
                onRate={
                    onRateColor
                }
            
                />
                
                </div>
            ))}
         
        </div>
    )



}