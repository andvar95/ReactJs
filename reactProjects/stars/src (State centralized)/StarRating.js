import React,{useState} from 'react';
import {FaStar} from 'react-icons/fa'
import Star from "./Star";
import { createArray} from "./utils"






export default function StarRating({totalStars=5,color,selectedStar,onRate=index=>index}){
    //const [selectedStar,setSelectedStar] = useState(3);
    return(
        <div>
        {createArray(totalStars).map((n,i)=>(
            <Star 
            key={i}
            selected={i<selectedStar}
            onSelect={()=>onRate(i+1)}
            color={color}
            />
        ))}
        <p>{selectedStar} of {totalStars} </p>
        </div>
    );
}

