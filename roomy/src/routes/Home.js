import React from 'react'
import Navbar from '../compnents/navbar/Navbar.js'
import Header from '../compnents/home/Header.js'
import FeaturedPgs from '../compnents/home/FeaturedPgs.js'
import Footer from '../compnents/footer/Footer.js'
function Home() {
  return (
    <div>
        <Navbar />
        <Header />
        <FeaturedPgs />
        <Footer />
    </div>
  )
}

export default Home