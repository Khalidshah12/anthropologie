import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

import Allroutes from "./Pages/Allroutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Allroutes />
      <Footer/>
    </div>
  );
}

export default App;
