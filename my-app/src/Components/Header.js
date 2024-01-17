import React from "react";
import style from "./Header.module.css"

export default function Header () {
    return (
        <Header> 
           <div className="headerNav">
                <div className="logo">
                    <img 
                    src="../Images/YG - logo.jpg"
                    alt="logo"
                    />
                </div>
                    
                    <ul className="headerButtons">
                        <li className="quiz-nav">Quiz</li>
                        <li className="blog-nav">Blog</li>
                        <li className="glowing-products-nav">Glowing Products</li>

                    </ul>

                
            </div> 
        </Header>
    )
};


