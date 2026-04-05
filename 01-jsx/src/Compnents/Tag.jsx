import React from 'react'

const Tag = ({label = Sale, type = New}) => {
  return (
    <div style={{whiteSpace:"pre-line"}}>
        <p>
            {`Label : ${label},
             Type : ${type}`}
        </p>
    </div>
  )
}

export default Tag