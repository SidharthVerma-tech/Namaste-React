import {LOGO_URL} from '../utils/Constants'
import { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    //Local State Variables - Super powerful Variables
    const [loginBtn, setLoginBtn] = useState('Login')
    useEffect(()=>{
        console.log("Use EFfect called");
    },[loginBtn])
    // Now every time loginBtn button changes Header renders
    // When empty dependency array is used
    // it is rendered once
    console.log("Header rendered");
    return(
        <>
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className='login-btn' onClick={()=>
                        loginBtn === 'Login' ? setLoginBtn('Logout'): setLoginBtn('Login')
                    }>{loginBtn}</button>
                </ul>
            </div>
        </div>
        
      </>
    )
}
export default Header