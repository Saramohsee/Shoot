import React from 'react';
import Form from '../Components/Form';
import Style from './Home.module.css';
import Header from '../Components/Header';
import Input from '../Components/Input';
import Footer from '../Components/Footer';
import eye from '../Images/eye.jpg';


export default function Home () {

    return (
        <div className={Style.home}>
            <img 
            className={Style.eyePic}
            src={eye}
            alt='eye'
            />
            <div className={Style.collegen}>
            <h1>COLLOGEN</h1>
            <h2>your glowing skin solution</h2>
            </div>
            
          
           
        </div>
    )

    



};

