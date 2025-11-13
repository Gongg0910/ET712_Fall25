import React from "react";
import '../App.css';
import abouting from '../images/about.jpg'
import contacting from '../images/contact.png'
import { Link } from "react-router-dom";

const Home = function(){
    return(
        <>
            <header className="header">
                <h1 className="headertitle">Welcome to React Routing</h1>
            </header>
            <main className="maincontainer">
                <div className="cardimg">
                    <Link>
                        <img src={abouting}/>
                    </Link>
                    
                </div>

                <div className="cardimg">
                    <img src={contacting}/>
                </div>
            </main>
        </>
    );
}
export default Home