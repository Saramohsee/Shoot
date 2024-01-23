import Style from './Footer.module.css'
import {Link} from 'react-router-dom'

function Footer () {
    

    return (   
        <div>
        <h4 className={Style.logo} id={Style.brought}>Brought to you buy</h4> 
        <footer className={Style.Footer}>
            
               <Link to='/'>
                
              <h1 className={Style.logo} id={Style.your}>
              YOUR 
              </h1>
              <h1 className={Style.logo} id={Style.GLOWING}>
                GLOWING
              </h1>

               </Link> 
           
        </footer>
        </div>
    );
};






export default Footer;