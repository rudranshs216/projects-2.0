import { ChatBubble, RadioButtonUnchecked, Search } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Chat from './Chat';
import "./Chats.css"
import { selectUser } from './features/appSlice';
import { resetCameraImage } from './features/cameraSlice';
import {db,auth} from "./firebase";



function Chats() {
    const [post, setPosts] = useState([]);
    const user = useSelector(selectUser);
    const history = useHistory();
    const dispatch = useDispatch();
    
    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snap)=> { 
        setPosts(snap.docs?.map((docs)=> ({id: docs.id, data: docs.data()})))})

      
       
    }, [])
    const takeSnap = () => {
        dispatch(resetCameraImage())
        history.push("/")

    }
    
    return (
        <div className="chats">
        <div className="chats_header">
        <Avatar src={user.profilePic} onClick={()=>{auth.signOut();}} className="chats_avatar"/>
        <div className="chats_search">
            <Search className="chats_icons"/>
            <input type="text" placeholder="Friends"/>
        </div>
        <ChatBubble className="chats_icon"/>
        </div>
       <div className="chats_post">
       {post?.map(({ id, data: {profilePic, username, timestamp, imageURL, read}}) => {
           
           return (<Chat 
               key={id}
               id={id}
               username={username}
               timestamp={timestamp}
               imageURL={imageURL}
               profilePic={profilePic}
               read={read}

           />)
          
       })}
           
       </div>
       <RadioButtonUnchecked 
           className="chats_takePicIcon"
           onClick={takeSnap}
           fontSize="large"
       />

        </div>
    )
}

export default Chats
