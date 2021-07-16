import Home from "./Components/Home";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


export default function App(){
    return(
        <>
            <Router> 
                <div>
                    <ul>
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        
                    </ul>
                </div>

                <Switch>
                    <Route path="/about" >
                        <About/>
                    </Route>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route path="/gallery" >
                        <Gallery/>
                    </Route>
                </Switch>

         
            <footer>Pequeño Footer</footer>
            </Router>

           

        </>

    );
}


