import React from 'react'

const ActionButton = ({text = "Submit"}) => {
  return (
    <div>
        
        <p>
            <button> {text}</button>
        </p>
    </div>
  )
}

export default ActionButton