import React from 'react'
import "./SidebarOption.css"

function SidebarOption({Icon,title,number,selected}) {
   
    return (
        <div className={`sidebar_option ${selected?"sidebar_option--active" : "sidebar_option--unactive"}`}>
          <div className={`side ${selected && "sidebar_option--active"}`}>{Icon}
          <p>{title}</p>
          </div>
        
          <p>{number? number : ""}</p>
        </div>
    )
}

export default SidebarOption
