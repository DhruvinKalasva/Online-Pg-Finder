import React,{useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import weblogo from "../../images/weblogo.jpg"
import { AuthContext } from '../../context/AuthContext';


function Navbar() {

  const [color,setColor] =useState(false);
const changeColor =() =>{
  if(window.scrollY >=100){
    setColor(true);
  }else{
    setColor(false);
  }
}

window.addEventListener("scroll", changeColor);

const { user,dispatch } = useContext(AuthContext);

const handleClick = async (e) => {
  e.preventDefault();
  dispatch({ type: "LOGOUT" });
};

  return (
    <div className={color ? "navbar navbar-bg" : "navbar"}>
        <div className={color ? "nav navbar-bg" : "nav"}>
            <div className='weblogo'><Link  to="/"><img src={weblogo} alt='weblogo' /></Link></div>
            <div className='navlinks'>

                <Link to="/">Home</Link>
                {/* <Link to="/pgs">Pg</Link> */}
                <Link to="/AboutUs">About us</Link>
                <Link to="/Contact">Contact</Link>
            </div>
            <div className='userlogin'>
            {user ? (
              <div className='loggeduser'>
                <img src={user.img} alt=''/>
                {user.username}
                <button onClick={handleClick}>LOGOUT</button>
              </div>
            ) : (
              <div className='registerlogin'>
                <Link to={"/login"}><button>Login</button></Link>
                <Link to={"/register"}><button>Register</button></Link>
                
              </div>
              )}
              </div>
        </div>
    </div>
  )
}

export default Navbar