import React from "react";
import Style from "./Header.module.css"
import {Link} from 'react-router-dom'

export default function Header () {
    return (
      
           <header className={Style.header}>
            <div className={Style.headerElements}>
                <Link to='/' >
                    <img 
                    className={Style.logo}
                    src={require("../Images/YG - logo.png")} 
                    alt='Logo'
                    />
                    </Link>
           
                    <ul className={Style.headerButtons}>
                        <li className={Style.quizNav}><Link to='quiz' style={{ textDecoration: 'none', color: '#50544F' }}>Quiz</Link></li>
                        <li className={Style.blogNav}><Link to='blog'style={{ textDecoration: 'none', color: '#50544F' }}>Blog</Link></li>
                        <li className={Style.glowingProducts}><Link to='products'style={{ textDecoration: 'none', color: '#50544F' }}>Glowing Products</Link></li>

                    </ul>
            </div>

                   
                  

                
            </header> 
       
    )
};


