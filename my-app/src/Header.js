import style from './Header.module.css'
import {Link} from 'react-router-dom'

function Header () {
    

    return (    
        <header>
            <div>
               <Link to='/'>
              <h1>
                Shoot
              </h1>

               </Link> 
            </div>
        </header>
    );
};






export default Header