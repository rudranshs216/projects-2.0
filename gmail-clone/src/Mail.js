import { ArrowBack, CheckCircle, Delete, Email, Error, ExitToApp, LabelImportant, LabelImportantOutlined, MoreVert, MoveToInbox, Print, UnfoldMore, WatchLater } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router'
import "./Mail.css"

function Mail() {
    const history = useHistory();
    return (
        <div className="mail">
        <div className="mail_icon">
        <div className="mail_icon_left">
        <IconButton><ArrowBack onClick={()=>{history.push("/")}}/></IconButton>
        <IconButton><MoveToInbox/> </IconButton>
        <IconButton><Error/></IconButton>
        <IconButton><Delete/> </IconButton>
        <IconButton><Email/></IconButton>
        <IconButton><WatchLater/></IconButton>
        <IconButton><CheckCircle/></IconButton>
        <IconButton><LabelImportant/></IconButton>
        <IconButton><MoreVert/></IconButton>

        </div>
        <div className="mail_icon_right">
        <IconButton><UnfoldMore/></IconButton>
        <IconButton><Print/></IconButton>
        <IconButton><ExitToApp/></IconButton>

        </div>
        </div>


        <div className="mail_body">
           <div className="mail_bodyHeader">
           <span className="subject">Subject</span>
           <LabelImportantOutlined style={{color: "#FFB300",paddingRight: "10px"}}/>
           <span className="title">title</span>
           <div className="time">10pm</div>
           


           </div>
           <div className="mail_bodyMessage">
           <span className="message">message</span>

           </div>

        </div>
            
        </div>
    )
}

export default Mail
