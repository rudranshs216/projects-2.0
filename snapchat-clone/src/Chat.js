import { StopRounded } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import ReactTimeago from 'react-timeago';
import "./Chat.css"
import { selectImage } from './features/appSlice';
import { db } from './firebase';

function Chat({profilePic, username, timestamp, imageURL, read,id}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const open = () => {
        if(!read){
            dispatch(selectImage(imageURL));
            db.collection("posts").doc(id).set(
                {
                    read: true
                },
                {
                    merge: true
                }
            );
            history.push("/chats/view")
        }
    }
    return (
        <div onClick={open} className="chat">
        <Avatar className="chat_avatar" src={profilePic}/>
        <div className="chat_info">
            <h4>{username}</h4>
            <p>{!read && "Tap to view -"}  <ReactTimeago date= {new Date(timestamp?.toDate()).toUTCString()} /></p>
        </div>
        {!read && <StopRounded className="chat_icon"/>}

            
        </div>
    )
}

export default Chat
