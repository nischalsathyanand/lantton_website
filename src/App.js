
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import Navbar from './NavBar';
import './App.css'; // Import your CSS
import About from './about';
import Languages from './Languages';
import Footer from './Footer';
import ContactUs from './ContactUs';
import RegisterForm from './RegisterForm';



function App() {
  return (
    <div className="App">
      <Navbar/>
     <Router>
      <Routes>
        
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
       
        <Route path="/about"element={<About/>}/>
        <Route path='/languages' element={<Languages/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/register' element={<RegisterForm/>} />
        </Routes>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
