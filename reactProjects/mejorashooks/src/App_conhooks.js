import React,{useState, useEffect, useMemo} from 'react';
import './App.css';
import GitHubUser from "./GitHubUser";

export default function App(){

    const [searchUser,setSearchUser] = useState("");
    const handleChange = (event)=>{
        setSearchUser(event.target.value);
    };

    return(
        <> 
        <input type="text" placeholder="search" value={searchUser} onChange={handleChange}></input>      
        <GitHubUser user={searchUser}/>
        </>
    );

    }