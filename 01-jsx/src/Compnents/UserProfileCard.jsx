import React from 'react'

const UserProfileCard = ({name,profileImage,designation}) => {
  return (
    <div>
        <h1 style={{ whiteSpace: "pre-line" }}>
            {`Name = ${name}
            ProfileImage = ${profileImage}
              Designation = ${designation}`}
        </h1>
    </div>
  )
}

export default UserProfileCard