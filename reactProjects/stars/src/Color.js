import React from "react";
import {FaTrash} from "react-icons/fa";
import StarRating from "./StarRating"
import {useColors} from "./ColorProvider";

export default function Color({id, title, color, rating}){
    const {updateRateColor, removeColor} = useColors();

    return(
        <section>
            <h1>
                {title}
            </h1>
            <div>
            <button onClick={()=> removeColor(id)}><FaTrash/></button>
            <div style={{height:50, backgroundColor:color}}>
            </div>
            <div>
            <StarRating color={color} selectedStar={rating}
            onRate={(rating)=>{updateRateColor(id, rating)}}
            />
            
            </div>

            </div>
        </section>

    );
}