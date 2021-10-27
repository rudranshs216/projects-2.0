import { LabelImportantOutlined, StarBorderOutlined } from '@mui/icons-material'
import { Checkbox, IconButton } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router';
import "./EmailRow.css"

function EmailRow({title,message,description,time}) {
    const history = useHistory();
    return (
        <div onClick={()=>{history.push("/mail")}} className="emailRow">
           <div className="email_option">
          <Checkbox/>
           <IconButton><StarBorderOutlined/></IconButton>
           <IconButton><LabelImportantOutlined style={{color: "#FFB300"}}/></IconButton>

           </div>
           <h3 className="email_title">{title}</h3>
         
           <div className="email_message">
            <h4>{message} { " "}
              <span className="email_description">- {description}</span>
            </h4>
               

           </div>
        
           <p className="email_time">
           {time}
            </p>
            
        </div>
    )
}

export default EmailRow
