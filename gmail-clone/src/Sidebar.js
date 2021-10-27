import { AccessTime, Add, ExpandMore, Inbox, Keyboard, LabelImportant, NearMe, Note, Star, Videocam } from '@mui/icons-material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { openSendMessage } from './features/mailSlice'
import "./Sidebar.css"
import SidebarOption from './SidebarOption'

function Sidebar() {
    const dispatch = useDispatch();
    return (
        <div className="sidebar">
            <div onClick={()=>{dispatch(openSendMessage())}} className="sidebar_compose">
            <Add className="sidebar_compose_icon"/>
            <p> Compose</p>

            </div>
            <div className="sidebar_option_1">
            <SidebarOption Icon={<Inbox/>} title="Inbox" number="69" selected="true" />
            <SidebarOption Icon={<Star/>} title="Starred" />
            <SidebarOption Icon={<AccessTime/>} title="Snozzed" />
            <SidebarOption Icon={<LabelImportant/>} title="Important" />
            <SidebarOption Icon={<NearMe/>} title="Send" />
            <SidebarOption Icon={<Note/>} title="Draft" />
            <SidebarOption Icon={<ExpandMore/>} title="More" />

            </div>
            <div className="sidebar_option_2">
                <p>Meet</p>
                <SidebarOption Icon={<Videocam/>} title="New meeting"/>
                <SidebarOption Icon={<Keyboard/>} title="Join a meeting"/>
            </div>
            
        </div>
    )
}

export default Sidebar
