import './App.css';
import AllRoutes from './Routes/AllRoutes';
import Home from "./Pages/Homepage/Home";
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
