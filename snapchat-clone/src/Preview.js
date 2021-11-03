import { AttachFile, Close, Create, Crop, MusicNote, Note, Send, TextFields, Timer } from '@mui/icons-material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {useSelector} from "react-redux"
import { useHistory } from 'react-router'
import {resetCameraImage, selectCameraImage} from "./features/cameraSlice"
import "./Preview.css"
import {v4 as uuid} from "uuid";
import {storage , db} from "./firebase";
import firebase from "firebase";
import { selectUser } from './features/appSlice'



function Preview() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const history = useHistory();
    const cameraImage = useSelector(selectCameraImage)
    useEffect(() => {
        if(!cameraImage){
            history.replace("/");
        }
        }, [cameraImage])

        const closePreview = () => {
            dispatch(resetCameraImage())
            
        }
        const send = () => {
            const id = uuid();
            const uploadTask = storage.ref(`posts/${id}`).putString(cameraImage, "data_url");

            uploadTask.on("state_changed", null, (error)=>{console.log(error);}, ()=>{storage.ref("posts").child(id).getDownloadURL().then((url) => { 
                db.collection("posts").add({
                    imageURL: url,
                    username: user.username,
                    read: false,
                    profilePic: user.profilePic,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                });
                history.replace("/chats")
            })})
        }
    return (
        <div className="preview">
        <Close onClick={closePreview} className="preview_close"/>
        
        <div className="preview_toolbarR">
            <TextFields  className="preview_toolbarR_icon"/>
            <Create  className="preview_toolbarR_icon"/>
            <Note className="preview_toolbarR_icon"/>
            <MusicNote className="preview_toolbarR_icon"/>
            <AttachFile className="preview_toolbarR_icon"/>
            <Crop className="preview_toolbarR_icon"/>
            <Timer className="preview_toolbarR_icon"/> 
        </div>
        <div>

        <img src={cameraImage} alt="" />
        </div>
        <div onClick={send} className="preview_footer">
            <h2>Send Now</h2>
            <Send fontSize="small" className="preview_sendIcon"/>
        </div>


            
        </div>
    )
}

export default Preview;
