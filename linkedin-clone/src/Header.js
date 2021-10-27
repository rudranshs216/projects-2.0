import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css"
import HeaderOption from './HeaderOption';
import { BusinessCenter, Chat, Home, Notifications, SupervisorAccount } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';




const Header = () => {
   
    const dispatch = useDispatch()
    const Logout = () => {
        dispatch(logout())
        auth.signOut();

    }
    
    return (
        <div className="header">
        <div className="header_left">
       
       <img src="https://img.icons8.com/fluency/48/000000/linkedin.png" alt="" />
        <div className="header_search">
           <SearchIcon/>
            <input type="text" />
        </div>

        </div>
        <div className="header_right">
        <HeaderOption Icon={Home} title="Home"/>
        <HeaderOption Icon={SupervisorAccount} title="My Network"/>
        <HeaderOption Icon={BusinessCenter} title="Jobs"/>
        <HeaderOption Icon={Chat} title="Messaging"/>
        <HeaderOption Icon={Notifications} title="Notifications"/>
        <HeaderOption onClick={Logout} avatar="123.com" title="me"/>


        </div>
           
        </div>
    )
}

export default Header
