import React,{useState} from 'react'
import "./Header.css"
import headerimg from "../../images/header2.jpg"
import { useNavigate } from 'react-router-dom';
import { FaSearchLocation } from 'react-icons/fa'

function Header() {

  
  const [destination, setDestination] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/pgs", { state: { destination } });
  };

  return (
    <div className='header'>
        <div className='upheader'>
        <img className='headerimg' src={headerimg} alt='headerimg'/>

        <div className='downheader'>
        <div className='searchpanel'>
            
            <input className='searchinput' type='text' placeholder='Search Pg Area' onChange={(e) => setDestination(e.target.value)}></input>
            <button className='searchbutton' onClick={handleSearch}> <FaSearchLocation style={{color: "white"}} /> </button>
        </div>

        </div>
        
        </div>
    </div>
  )
}

export default Header