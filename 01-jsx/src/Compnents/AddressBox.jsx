import React from 'react'

const AddressBox = ({city,state,pincode}) => {
  return (
    <div>
        <p style={{whiteSpace:"pre-line"}}>
            {`City = ${city},
            State = ${state},
            Pincode = ${pincode}`}
        </p>
    </div>
  )
}

export default AddressBox