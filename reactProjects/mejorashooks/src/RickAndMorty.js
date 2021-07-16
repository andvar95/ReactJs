import React,{useState, useEffect, useMemo} from 'react';
import useFetch from "./hooks"
import './App.css';
import Profile from "./Profile"


export default function RickAndMorty({page=0}){

    const {loading,data,error} = useFetch(`https://rickandmortyapi.com/api/character/?page=${page}`);

    if(loading) return (
    
    <div className="loading">
        <div >CARGANDO</div>
        </div>
    
    );

        if(error){
            return(
                <p>error</p>
            )
        }

        if(!data) return null

        
        return(
        <div >
         <div className="container–flex">
          { data.results.map(
               (character,i)=>(
                  
                   <Profile key={i} data = {character}/>         ))
               }
        </div>
        </div>);
}