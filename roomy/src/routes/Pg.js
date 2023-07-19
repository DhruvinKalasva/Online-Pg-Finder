import React, { useState } from 'react'

import Navbar from '../compnents/navbar/Navbar.js'
import headerimg from "../images/header2.jpg"
import Searchitem from '../compnents/Pglist/Searchitem.js'
import Footer from '../compnents/footer/Footer.js'
import { useLocation } from 'react-router-dom'
import useFetch from '../hooks/useFetch.js'
import { FaSearchLocation } from 'react-icons/fa'

function Pg() {

  
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);

  const{data,loading,error,reFetch} =useFetch(`/pgs?area=${destination}`) 
  
  // const {data,loading,error} = useFetch("/pgs")

  

  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      <Navbar />
      
      <div className='header'>
        <div className='upheader'>
        <img className='headerimg' src={headerimg} alt='headerimg'/>

        <div className='downheader'>
        <div className='searchpanel'>
            
            <input type='text' className='searchinput' onChange={(e) => setDestination(e.target.value)} placeholder={destination} ></input>
            <button className='searchbutton' onClick={handleClick}><FaSearchLocation style={{color: "white"}} /></button>
        </div>

        </div>
        
        </div>
    </div>

      <div>
      {loading ? (
              "loading..."
            ) : (
              <>
                {data.map((item) => (
                  <Searchitem item={item} key={item._id} />
                ))}
              </>
            )}
      </div>

      <Footer />
    </div>
  )
}

export default Pg