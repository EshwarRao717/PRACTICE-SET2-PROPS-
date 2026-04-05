import React from 'react'

const ServiceStatus = ({isAvailable}) => {
  return (
    <div>
        <p>
            {isAvailable ? "Service Available" : "Currently Unavail"}
        </p>
    </div>
  )
}

export default ServiceStatus