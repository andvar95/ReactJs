import React,{useState, useEffect, useMemo} from 'react';
import RickAndMorty from './RickAndMorty';
import Navbar from "./Navbar";





export default function App(){
    let [page,setPage] = useState(0);
    const handlePage = (event) =>{
        if(event.target.innerHTML==="Next")page++;
        if(event.target.innerHTML==="Prev")page--;
        if(page<0)page=0
        setPage(page);
    }

return( 
<>
    <Navbar />
    <div className="btn-pages center-all">
    <button
     disabled={!page}
     onClick={handlePage}
    >Prev</button>
    <button
    onClick={handlePage}
    >Next</button>
    </div>
  
<RickAndMorty page={page}/>
</>
);

}