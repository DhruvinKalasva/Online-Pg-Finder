import React from 'react'
import "./Aboutus.css"
import backimg from "../images/backimg.jpg"
import weblogo from "../images/weblogo.jpg"
import Navbar from '../compnents/navbar/Navbar'
import Footer from '../compnents/footer/Footer'

function AboutUs() {
  return (
    <div>
      <Navbar />
      <section class="about-us">
    <div class="about">
      <img src={weblogo} class="pic" />
      <div class="text">
        <h2>About Us</h2>
        <h5>Online <span>PG</span> Finder</h5>
          <p>It has become easy to search pg accommodation nearby the work
            place. It was difficult earlier to go a place to work which was situated at longdistances and hence had to lose good opportunities, as we don’t know where
            to stay and where unaware about a particular city. But now it has become
            easier to find an accommodation nearby the work place in cheap rates. In
            this online paying guest system, users can find a number of paying
            accommodation nearby work place or desired place.</p>
        <div class="data">
        <a href="/Contact" class="hire">Contact US</a>
        </div>
      </div>
    </div>
  </section>
  <Footer />
    </div>
  )
}

export default AboutUs