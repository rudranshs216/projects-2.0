import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React, { forwardRef } from 'react'
import FeedOption from './FeedOption'
import "./Post.css"

const Post = forwardRef(({name,description,message, photoURL}, ref) => {
    return (
        <div ref = {ref} className="post">
        <div className="post_header">
            <Avatar src={photoURL} />
            <div className="post_info">
            <h2>{name}</h2>
            <p>{description}</p>

            </div>

        </div>
        <div className="post_body">
            <p>{message}</p>
        </div>
        <div className="post_button">
            <FeedOption Icon={ThumbUpAltOutlined} title="Like" color="gray"/> 
            <FeedOption Icon={ChatOutlined} title="Comment" color="gray"/> 
            <FeedOption Icon={ShareOutlined} title="Share" color="gray"/> 
            <FeedOption Icon={SendOutlined} title="Send" color="gray"/> 
        </div>
            
        </div>
    )
})

export default Post
