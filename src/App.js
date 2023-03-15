import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import Rooms from "./pages/Rooms";
import Activities from "./pages/Activities";
import Dining from "./pages/Dining";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom"
import 'react-slideshow-image/dist/styles.css'


function App() { 
  

    return (
      <div>
        <Navbar /> 
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/rooms" element={<Rooms />} />
          </Routes>

        </div>
        <Footer />
        
    </div>
    )

    }


export default App;

