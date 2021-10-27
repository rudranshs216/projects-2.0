import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@mui/icons-material'
import { Checkbox, IconButton } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router'
import "./EmailList.css"
import EmailRow from './EmailRow'
import Section from './Section'

function EmailList() {
   

    return (
        <div className="emailList">
        <div className="emailList_setting">
            <div className="emailList_setting1">
            <Checkbox/>
            <IconButton> <ArrowDropDown/> </IconButton>
            <IconButton> <Redo/> </IconButton>
            <IconButton> <MoreVert/> </IconButton>
            
                
            </div>
            <div className="emailList_setting2">
            <IconButton><ChevronLeft/></IconButton>
            <IconButton><ChevronRight/></IconButton>
            <IconButton> <KeyboardHide/></IconButton>
            <IconButton> <Settings/></IconButton>
               </div>
        </div>
        <div className="emailList_sections">
            <Section Icon={Inbox} title="Primary" color="red" selected />
            <Section Icon={People} title="Social" color="#1a73e8" />
            <Section Icon={LocalOffer} title="Promotions" color="green" />
        </div>
        <div className="emailList_list">
            <EmailRow title="PHYF214" message="Regarding a doubt in Experiment 4" description="Will you tell me why this graph have negative value" time="5pm" />
            <EmailRow title="PHYF214" message="Regarding a doubt in Experiment 4" description="Will you tell me why this graph have negative value" time="5pm" />
            <EmailRow title="PHYF214" message="Regarding a doubt in Experiment 4" description="Will you tell me why this graph have negative value" time="5pm" />
            <EmailRow title="PHYF214" message="Regarding a doubt in Experiment 4" description="Will you tell me why this graph have negative value" time="5pm" />
        </div>

            </div>
    )
}

export default EmailList
