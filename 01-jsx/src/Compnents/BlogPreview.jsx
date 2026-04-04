import React from 'react'

const BlogPreview = ({author,title,publishDate}) => {
  return (
    <div style={{height:"350px",
        width:"350px",
        backgroundColor:"pink",
        fontSize:"1.2rem",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:"20px",
        gap:"1rem"
    }}>
       <div className="Titel">
        {`Titel = ${title}`}
        </div>
       <div className="Author">{`Author = ${author}`}</div>
       <div className="PublishDate">{`PublishDate = ${publishDate}`}</div>
    </div>
  )
}

export default BlogPreview