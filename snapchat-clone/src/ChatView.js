import React, { useEffect } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { selectSelectedImage } from './features/appSlice'
import "./ChatView.css";

function ChatView() {
   const history = useHistory();
    const selectImg = useSelector(selectSelectedImage);
    useEffect(() => {
        if(!selectImg){
            exit();
        }
        
    }, [selectImg])
   const exit = () => {
       history.replace("/chats")
   }
    return (
        <div onClick={exit} className="chatView">
        <img src={selectImg} alt="" />
        <div className="chatView_timer">
        <CountdownCircleTimer
         
        isPlaying
        duration={10}
        strokeWidth={6}
        size={50}
        colors={[
            ["#004777", 0.33],
            ["#F7B801", 0.33],
            ["#A30000", 0.33]
        ]}
        >
        {({remainingTime})=>{
            if(remainingTime == 0){
                exit();
            }
            return remainingTime;
        }}

        </CountdownCircleTimer>
        </div>
            
        </div>
    )
}

export default ChatView
