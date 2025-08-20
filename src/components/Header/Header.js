 
import { Link } from 'react-router-dom'
import './Header.css'
import LoginSection from './LoginSection'
 import logo from '../../assets/logo.png'
 import './Header.css'
 import Submenu from './Submenu'

function Header(){


    return(
       <div className="header_wrap">
             <div className='topMenu'>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                          <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/shop'>Shop</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
             </div>
             <div className='bottomHeader'>
                <div className='logo_section'>
                    <img src={logo} /> 
                </div>
               <div className='icon_right_sec'>
               <Submenu/>
                 <LoginSection/>
            </div>
             </div>
          
       </div>
    )
}

export default Header

