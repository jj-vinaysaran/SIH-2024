import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Pages/Navbar";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/navbar" element={<Navbar/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
