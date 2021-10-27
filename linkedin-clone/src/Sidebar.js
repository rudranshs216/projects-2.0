import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import "./Sidebar.css"

function Sidebar() {
const user = useSelector(selectUser);

    const recentItem = (topic) => {
        return(<div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>)

    }
    return (
        <div className="sidebar">
        <div className="sidebar_top">
        <img className="sidebar_top_img" src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" alt="" />
        <Avatar className="sidebar_avatar" src={user.photoURL} >{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>

        </div>
        <div className="sidebar_stat">
          <div className="sidebar_stats">
             <p>Who viewed you</p>
             <p className="stat_num">2,534</p>
          </div>
          <div className="sidebar_stats">
          <p>Views on Post</p>
             <p className="stat_num">2,354</p>

          </div>

        </div>
        <div className="sidebar_bottom">
         <p>Recent</p>
         {recentItem("reactjs")}
         {recentItem("programming")}
         {recentItem("softwareengineering")}
         {recentItem("design")}
         {recentItem("developer")}

        </div>
            
        </div>
    )
}

export default Sidebar
