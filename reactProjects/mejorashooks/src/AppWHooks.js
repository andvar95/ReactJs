import React,{useState, useEffect, useMemo} from 'react';
import useFetch from "./hooks"
import './App.css';

function GitHubUser({user}){

        const {loading,data,error} = useFetch(`https://api.github.com/users/${user}`)
    

        console.log(data)

        if(loading) return (<div>CARGANDO</div>);

        if(error){
            return(
                <p>error</p>
            )
        }

        if(!data) return null

        
        return (
        <div className="center-all">
        <GitProfile data={data}/>
        </div>
        );
}


function GitProfile({data}){

    return(
        <div className="container">
            <div>
                <img alt ="avatar" src={data.avatar_url}></img>
            </div>
            
            <div className="center bd-bottom">
               <div><a href={data.url}>Username: {data.login}</a></div>
                </div>

            <div className="center bd-bottom">
                <div><a href={data.followers_url}>Followers: {data.followers}</a></div>

            </div>

            <div className="center bd-bottom">
               <div>Following: {data.following}</div> 

            </div>

            <div className="center bd-bottom">
                <div>Public Repositories: {data.public_repos}</div>

            </div>


        </div>
    )

}

export default function App(){
    return(
        <GitHubUser user="andvar95"/>
    );


}