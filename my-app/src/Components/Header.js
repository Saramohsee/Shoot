import React from "react";
import Style from "./Header.module.css"

export default function Header () {
    return (
      
           <header className={Style.header}>
            
                    <img 
                    className={Style.logo}
                    src={require("../Images/YG - logo.png")} 
                    alt='Logo'
                    />
           
                    <ul>
                        <li className={Style.quizNav}>Quiz</li>
                        <li className={Style.blogNav}>Blog</li>
                        <li className={Style.glowingProducts}>Glowing Products</li>

                    </ul>

                   
                  

                
            </header> 
       
    )
};


