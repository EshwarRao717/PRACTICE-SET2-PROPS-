import React from 'react'

const WebsiteLayout = ({headerContent,mainContent,footerContent}) => {
  return (
    <div>
        <div className="header" style={{ backgroundColor: "yellow", padding: "10px" }}>
           <p>header Content = {headerContent}</p> 
        </div>
        <div className="MainContent" style={{ background:"#c2baba", padding: "20px" }}>
           <p> Main Content = {mainContent}</p>
        </div>
        <div className="Foter" style={{ backgroundColor: "pink", padding: "10px" }}>
            <p>Footer Content = {footerContent}</p>
        </div>
    </div>
  )
}

export default WebsiteLayout