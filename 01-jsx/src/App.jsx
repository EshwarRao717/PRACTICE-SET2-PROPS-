import ServiceStatus from "./Compnents/ServiceStatus";




function App() {
  return (
    <div>
<ServiceStatus isAvailable = {true}/>
<ServiceStatus isAvailable = {false}/>
    </div>
  );
}

export default App;