import React from "react";
import {FaTrash} from "react-icons/fa";
import StarRating from "./StarRating"

export default function Color({id, title, color, rating, onRemove=(id)=>id,onRate=(params)=>params}){
    return(
        <section>
            <h1>
                {title}
            </h1>
            <div>
            <button onClick={()=> onRemove(id)}><FaTrash/></button>
            <div style={{height:50, backgroundColor:color}}>
            </div>
            <div>
            <StarRating color={color} selectedStar={rating}
            onRate={(rating)=>{onRate(id, rating)}}
            />
            
            </div>

            </div>
        </section>

    );
}