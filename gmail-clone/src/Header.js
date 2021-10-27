import { Apps, ArrowDownward, Menu, Notifications, Search } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import "./Header.css"

function Header() {
    return (
        <div className="header">
        <div className="header_left">
        <IconButton> <Menu/></IconButton>
       
        <img src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" alt="" />
        </div>
        <div className="header_middle">
        <IconButton>
            <Search/>
        </IconButton>
        <input placeholder="Search Mail" type="text" />
        <IconButton>
            <ArrowDownward/>
        </IconButton>

        </div>

        <div className="header_right">
        <IconButton>
         <Apps/>
        </IconButton>
        <IconButton>
        <Notifications/>

        </IconButton>
        <Avatar className="avatar"/>
      

        </div>
        </div>
    )
}

export default Header
