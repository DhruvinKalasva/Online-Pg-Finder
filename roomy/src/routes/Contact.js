import React from 'react'
import './Contact.css'
import Navbar from '../compnents/navbar/Navbar'
import Footer from '../compnents/footer/Footer'

function Contact() {
  return (
    <div>
      <Navbar />
    <div class="contactbody">
      <div class="container2">
    <div class="content">
      <div class="left-side">
        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div>
          <div class="text-one">LALBHAI DALPATBHAI COLLEGE OF ENGINEERING </div>
          <div class="text-two">120, Circular Road, University Area, Ahmedabad, Gujarat 380015</div>
        </div>
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text-one">+91 6355731988</div>
          <div class="text-two">+91 6355781954</div>
        </div>
        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-one">onlinepgfinder@gmail.com</div>
          <div class="text-two">infoonlinepgfinder@gmail.com</div>
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Send us a message</div>
        <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
      <form action="#">
        <div class="input-box">
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your query"/>
        </div>
        <div class="input-box message-box">
          
        </div>
        <div class="button">
          <input type="button" value="Send Now" />
        </div>
      </form>
    </div>
    </div>
  </div>
    </div>
    <Footer />
    </div>
  )
}

export default Contact