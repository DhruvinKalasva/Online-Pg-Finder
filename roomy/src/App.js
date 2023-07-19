
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './routes/Home.js';
import Pg from './routes/Pg.js';
import AboutUs from './routes/AboutUs';
import Contact from './routes/Contact';
import SinglePg from './routes/SinglePg';
import Login from './routes/LoginSignup/Login';
import Register from './routes/LoginSignup/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pgs' element={<Pg />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/pgs/:id' element={<SinglePg />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/Contact' element={<Contact />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
