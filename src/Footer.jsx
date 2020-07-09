import React from "react";
import "./Footer-styles.scss";

const date =  new Date();
let year = date.getFullYear();

function Footer(){
    return(
        <div>
         <footer><p>RisingStack©{year}</p></footer>  
        </div>      
    ); 
}

export default Footer;