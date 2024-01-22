import Style from './Footer.module.css'
import {Link} from 'react-router-dom'

function Footer () {
    

    return (    
        <footer>
            <div className={Style.Footer}>
               <Link to='/'>
              <h1 className={Style.logo} id={Style.your}>
              YOUR 
              </h1>
              <h1 className={Style.logo} id={Style.GLOWING}>
                GLOWING
              </h1>

               </Link> 
            </div>
        </footer>
    );
};






export default Footer;