import React,{useState, useEffect, useMemo} from 'react';
import './App.css';

function GitHubUser({user}){
    const [data,setData] = useState();
    const [error,setError] = useState();
    const [loading,setLoading] = useState(false);

    useEffect(
        ()=>{

            if(!user) return;

            setLoading(true);
            fetch(`https://api.github.com/users/${user}`)
                .then(data=> data.json())
                .then(setData)
                .then(() => setLoading(false))
                .catch(setError);

        },[user])

        console.log(data)

        if(loading) return (<div>CARGANDO</div>);

        if(error){
            return(
                <p>error</p>
            )
        }

        if(!data) return null

        
        return (<h1>{data.login}</h1>);
}


export default function App(){
    return(
        <GitHubUser user="andvar95"/>
    );


}