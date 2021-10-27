import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import "./Feed.css"
import FeedOption from './FeedOption'
import Post from './Post'
import {db } from "./firebase"
import firebase from "firebase";
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import FlipMove from 'react-flip-move'

function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        
       db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot => 
        setPosts(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            }))

       ))
    }, [])
   const click = e => {
       
    e.preventDefault();
    setInput("");
       db.collection("posts").add({
           name: user?.displayName,
           description: user.email,
           message: input,
           photoURL: user.photoURL? user.photoURL : user.displayName[0],
           timestamp: firebase.firestore.FieldValue.serverTimestamp()
       });
   };
    
    return (
        <div className="feed">
        <div className="feed_inputContainer">
            <div className="feed_input">
                <Create />
                <form>
                    <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Write a Post" type="text" />
                    <button onClick={click}>Post</button>
                </form>
            </div>
            <div className="feed_inputOption">
            <FeedOption Icon={Image} title="Photo" color="#7035F9"/>
            <FeedOption Icon={Subscriptions} title="Video" color="#E7A33E"/>
            <FeedOption Icon={EventNote} title="Event" color="#C0CBCD"/>
            <FeedOption Icon={CalendarViewDay} title="Write article" color="#7FC15E"/>
            </div>
        </div>
       
        <FlipMove >
        
        {posts.map(({id, data: {name,description,message,photoURL}}) =>{
           return <Post key={id} name={name} description={description} message={message} photoURL={photoURL} />
        })}
        </FlipMove>
            
        </div>
    )
}

export default Feed
