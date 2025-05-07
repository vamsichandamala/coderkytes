import { BrowserRouter ,Router,Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import './App.css';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Founders from './pages/Founders';
import Maps from './pages/maps';
import Certificates from './pages/Certificates';
import CourseDetails from './components/coursedetails';



function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/coursedetails" element={<CourseDetails />} />

        </Routes>
    
    </div>
  );
}

export default App;
