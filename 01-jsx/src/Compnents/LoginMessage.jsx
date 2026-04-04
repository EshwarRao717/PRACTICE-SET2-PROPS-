

const LoginMessage = ({isLoggedIn }) => {
  return (
    <div>
        <p>
            {isLoggedIn ? "App Login Ho ": "App Login Nahi Ho"}
        </p>
    </div>
  )
}

export default LoginMessage