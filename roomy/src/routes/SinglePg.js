import React from 'react'
import Navbar from '../compnents/navbar/Navbar'
import Footer from '../compnents/footer/Footer'
import "../compnents/singlepg/singlepg.css"
// import "../compnents/singlepg/example.css"
import headerimg from "../images/header.jpg"
import { FaStar } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import useFetch from '../hooks/useFetch'
import { useLocation } from 'react-router-dom'

function SinglePg() {

    const location = useLocation()
    const singlepgid = location.pathname.split("/")[2];
    const{data,loading,error} =useFetch(`/pgs/find/${singlepgid}`)

  return (
    <div>
        <Navbar />
        { loading ? ("loading...") : (

        
        <div className='singlepgbody'>
            <h1 className='pgheading'>{data.pgname}</h1>
            {/* <img className='mainpgimg' src={data.photos["0"]} alt=''></img> */}
            {/* <span>{data.rating}<FaStar size={20} style={{color: "orange",marginRight:"1rem"}}/></span> */}
            <div><small><MdLocationOn size={20} /> {data.address}</small></div>
            <div><b>Owner name :</b> {data.ownername}</div>
            <div><b>Contact info:</b> {data.contact}</div>
            <div><b>Pg Services :</b>
              <ul>
                <li>Wifi,</li>
                <li>Room Cleaning Service</li>
                <li>Parking </li>
                <li>tv</li>
                <li>Food Available</li> 
                <li>lift,</li>
                <li>Laundry,</li>
                <li>Fridge,</li>
                <li>Water Cooler RO</li>
               
              </ul>
            </div>
            <div><b>Price Range: </b>{data.price}</div>
          <br />

            <div className='pgmap'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29376.628385193435!2d72.57497065810551!3d23.020887993427607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84fa08cd4e4b%3A0x1a4593ed88b2e66c!2sLaw%20Garden!5e0!3m2!1sen!2sin!4v1687884293682!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>

            <div><h3>Photos</h3></div>
            <div className='pgimages'>
            {data.photos?.map((photo, i) => (
                <div className="hotelImgWrapper" key={i}>
                  <img
                    src={photo}
                    alt=""
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
        </div>
        )}
        <Footer />
    </div>
  )
}

export default SinglePg