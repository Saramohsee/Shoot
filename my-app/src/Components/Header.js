import React from "react";
import style from "./Header.module.css"

export default function Header () {
    return (
      
           <div className="headerNav">
                <div className="logo">
                    <img 
                    src={require("../Images/YG - logo.jpg")} alt='Logo'
        
                    />
                </div>
                    
                    <ul className="headerButtons">
                        <li className={style.quizNav}>Quiz</li>
                        <li className="blogNav">Blog</li>
                        <li className="glowingProductsNav">Glowing Products</li>

                    </ul>

                
            </div> 
       
    )
};


