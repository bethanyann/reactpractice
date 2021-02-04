import React, { Component } from 'react';

//This is a Stateless Functional Component
//You don't really need the 'class' definition for these type of components - you can make a function that returns a react element 
const NavBar = ({totalCounters}) => {

    console.log('navbar-rendered');
    
    return (  
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar <span className="badge badge-pill badge-secondary">{totalCounters}</span>
            </a>
        </nav>
    );
}
 
export default NavBar;