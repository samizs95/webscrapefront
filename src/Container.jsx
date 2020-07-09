import React, { useState } from "react";
import {Route,Switch,BrowserRouter as Router,Link} from 'react-router-dom';
import "./Container-styles.scss";



function Container(){


    const [mousedButton, setMousedButton] = useState(false);
    const [noOfPages, setNoOfPages] = useState(0);

    function handleChange(event){
      setNoOfPages(event.target.value)
    }
    
    function handleClick() {
      
      }
  
    function mouseOver() {
      setMousedButton(true);
      console.log(mousedButton);
    }
  
    function mouseOut() {
      setMousedButton(false);
      console.log(mousedButton);
    }
    console.log(noOfPages) 
    return (
        <div className="container">
            <h1> Pages to scrape</h1>
            <input onChange={handleChange} type="text" placeholder="Write here the number"/>
            <Link to = {"/bloglinks/" + noOfPages}>
            <button
            onMouseOut={mouseOut}
            onMouseOver={mouseOver}
            onClick={handleClick}
            style={{ backgroundColor: mousedButton ? "black" : null }}
            >Provide links</button>
            </Link>
            
        </div>
    );
}
export default Container; 