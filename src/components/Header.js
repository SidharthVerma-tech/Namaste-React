import {LOGO_URL} from '../utils/Constants'
import { useState , useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../utils/UserContext'
const Header = () => {
    //Local State Variables - Super powerful Variables
    const [loginBtn, setLoginBtn] = useState('Login')
    const User = useContext(UserContext);
    useEffect(()=>{
        console.log("Use EFfect called");
    },[loginBtn])
    // Now every time loginBtn button changes Header renders
    // When empty dependency array is used
    // it is rendered once
    console.log("Header rendered");
    return(
        <>
        <div className="flex justify-between items-center  bg-blue-100 shadow-lg">
            <div className="">
                <img className="w-24 rounded-full" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul className='flex m-1 p-1'>
                    <li className='px-4'><Link to='/'>Home</Link></li>
                    <li className='px-4'>
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li className='px-4'>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li className='px-4'>
                        <Link to='/grocery'>Grocery</Link>
                    </li>
                    <li className='px-4'>Cart</li>
                    <button className='' onClick={()=>
                        loginBtn === 'Login' ? setLoginBtn('Logout'): setLoginBtn('Login')
                    }>{loginBtn}</button>
                    <li>
                        {User.loggedInUser}
                    </li>
                </ul>
            </div>
        </div>
        
      </>
    )
}
export default Header