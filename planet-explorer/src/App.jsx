import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./frontend/components/Navbar";
import Home from "./frontend/pages/Home";
import Planets from "./frontend/pages/Planets";
import PlanetDetails from "./frontend/pages/PlanetDetails";
import Explore from "./frontend/pages/Explore";
import Space3D from "./frontend/pages/Space3D";
import Quiz from "./frontend/pages/Quiz";
import Login from "./frontend/pages/Login";
import Signup from "./frontend/pages/Signup";


function App() {
  return (
    <Router>
      <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/planet/:id" element={<PlanetDetails />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/3d-space" element={<Space3D />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
   
    </Router>
  );
}

export default App;
