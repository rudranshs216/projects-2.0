import React from 'react'
import "./FeedOption.css"

function FeedOption({Icon,title,color}) {
    return (

        <div className="feedOption">
       
          <Icon style={{color: color}}/>
          <p>{title}</p>
        </div>
    )
}

export default FeedOption
