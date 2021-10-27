import { FiberManualRecord, Info } from '@mui/icons-material'
import React from 'react'
import "./Widget.css"

function Widget() {
    const newsArticle = (heading , subtitle) => {
        return(<div className="widget_article">
            <div className="widget_articleLeft">
 <FiberManualRecord className="widget_articleLeftIcon"/>
            </div>
            <div className="widget_articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>

            </div>
        </div>)
    }
    return (
        <div className="widget">
        <div className="widget_header">
            <h2>LinkedIn News</h2>
            <Info />
        </div>
        {newsArticle("Tesla hits new highs","Cars and Auto - 300 readers")}
        {newsArticle("A Happy Meal for the planet","Environment- 11,464 readers")}
        {newsArticle("Why CVs get rejected","Jobs- 51,694 readers")}
        {newsArticle("For Google, it's long live the office","Business- 1,16,224 readers")}

          
        </div>
    )
}

export default Widget
