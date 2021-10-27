import CloseIcon from '@mui/icons-material/Close';
import { Button, IconButton } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux'
import { closeSendMessage } from './features/mailSlice'
import "./SendMail.css"

function SendMail() {
    const dispatch = useDispatch();
    const {register,handleSubmit,watch,errors } = useForm();
    const onSubmit = (formData) => {
          console.log(formData);
    }
    return (
        <div className="sendMail">
        <div className="sendMail_header">
        New Message
        <IconButton><CloseIcon className="close" onClick={()=>{dispatch(closeSendMessage())}}/></IconButton>

        </div>
        <form onSubmit={handleSubmit(onSubmit())}>
        <input name="to" placeholder="To" type="text"  ref={register({required: true})}/>
        {errors.to && <p className="sendMail_error">To is required</p> }
        <input type="text" placeholder="Subject" name="subject" ref={register({required: true})} />
        {errors.subject && <p className="sendMail_error">To is required</p> }

        <input className="message" type="text" placeholder="message" name="message" ref={register({required: true})}/>
        {errors.message && <p className="sendMail_error">To is required</p> }
        
       
        
        <div className="sendMail_footer">
        <Button type="submit" onClick={(event)=>{event.preventDefault()}}>Send</Button>
         </div>

        </form>
        
            
        </div>
    )
}

export default SendMail
