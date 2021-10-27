
import React from 'react'
import "./HeaderOption.css"
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function HeaderOption({title,Icon,avatar, onClick}) {
    const user = useSelector(selectUser);
    return (
        <div className="headerOption">
        {avatar && <Avatar onClick={onClick} className="headerOption_icon" src={user?.photoURL}>{user?.email[0]}</Avatar>}
        {Icon ? <Icon className="headerOption_icon"/> : null}
        <h3 className="headerOption_title">{title}</h3>
            
        </div>
    )
}

export default HeaderOption
