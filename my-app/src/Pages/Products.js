
import Style from './Products.module.css';
import React, { useState } from 'react';
import dryImg from '../Images/dry.jpg';
import poreImg from '../Images/pores.jpg';
import oilyImg from '../Images/oily.jpg';
import arrowImg from '../Images/arrow.jpg';

 




export default function Products() {
    const [dryVisible, setDryVisible] = useState(false);
    const [poreVisible, setPoreVisible] = useState(false);
    const [oilyVisible, setOilyVisible] = useState(false);
    const classDry = `${Style.box} ${Style.dry}`;
    const classPore = `${Style.box} ${Style.pore}`;
    const classOily = `${Style.box} ${Style.oily}`;

    const classSolutions = `${Style.box} ${Style.solution}`; // classes
   
   
    return (
        <div className={Style.Products}>
        <div className={Style.skinProblems}>
            <div className={Style.skinTitle}>
                <h1>What is your Skin like?</h1>
            </div>


        <div className={classDry}>
            <img 
            className={Style.skinImg}
            src={dryImg}
            alt='dryImg'
            />  
            <button onClick={() => setDryVisible(!dryVisible)}>
            <h2>Dry Skin</h2>    
            <img 
           src={arrowImg}
           alt='arrowImg'
           className={Style.arrowImg}
           />                                   
            </button>                                               
      </div>


      <div className={classPore}>  
      <img 
            className={Style.skinImg}
            src={poreImg}
            alt='poreImg'
            />  
            <button onClick={() => setPoreVisible(!poreVisible)}>
            <h2>Pores</h2> 
            <img 
           src={arrowImg}
           alt='arrowImg'
           className={Style.arrowImg}
           />
            </button>
      </div>


      <div className={classOily}>  
      <img 
            className={Style.skinImg}
            src={oilyImg}
            alt='oilyImg'
            />  
            <button onClick={() => setOilyVisible(!oilyVisible)}>
           <h2>Oily Skin</h2> 
           <img 
           src={arrowImg}
           alt='arrowImg'
           className={Style.arrowImg}
           />
            </button>
      </div>



        </div>
        {dryVisible && (
        <div className={Style.gridcontainer}>
         <div className={classSolutions}> <h1>Product 1</h1></div>
         <div className={classSolutions}> Product 2</div>
         <div className={Style.box}> Product 3</div>
        </div>
      )}

        {poreVisible && (
        <div className={Style.gridcontainer}>
         <div className={classSolutions}> <h1>it pores</h1></div>
         <div className={classSolutions}> </div>
         <div className={Style.box}> </div>
        </div>
      )}

      {oilyVisible && (
        <div className={Style.gridcontainer}>
         <div className={classSolutions}> <h1>it workd</h1></div>
         <div className={classSolutions}> </div>
         <div className={Style.box}> </div>
        </div>
      )}

    </div>
    )
}
