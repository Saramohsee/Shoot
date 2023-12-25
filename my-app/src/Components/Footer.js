import style from './Footer.module.css'
import {Link} from 'react-router-dom'

function Footer () {
    

    return (    
        <footer>
            <div>
               <Link to='/'>
              <h1 className='logo' id='your'>
              YOUR 
              </h1>
              <h1 className='logo' id='GLOWING'>
                GLOWING
              </h1>

               </Link> 
            </div>
        </footer>
    );
};






export default Footer;