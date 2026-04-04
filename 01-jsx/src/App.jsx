import LoginMessage from "./Compnents/LoginMessage";




function App() {
  return (
    <div>

<LoginMessage isLoggedIn = {true}/>
<LoginMessage isLoggedIn = {false}/>
    </div>
  );
}

export default App;