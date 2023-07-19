import React from 'react'
import "./Footer.css"
import footerimg1 from "../../images/footerimg/footerimg1.jpg"
import footerimg2 from "../../images/footerimg/footerimg2.jpg"
import footerimg3 from "../../images/footerimg/footerimg3.jpg"
import footerimg4 from "../../images/footerimg/footerimg4.jpg"
import footerimg5 from "../../images/footerimg/footerimg5.jpg"
import footerimg6 from "../../images/header.jpg"

function Footer() {
  return (
    <div>
        <footer>
        <div class="container">
            <div class="box">
                <h3>About us</h3>
                <p> This is prototype Project of Online PG finder. <br />
                    Address:
                    LALBHAI DALPATBHAI COLLEGE OF ENGINEERING, 120, Circular Road, University Area, Ahmedabad, Gujarat 380015</p>
                <button class="btn btn-secondary">Read More</button>
            </div>
            <div class="box">
                <h3>Quik Links</h3>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About us</a>
                    </li>
                    <li>
                        <a href="#">Products</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Contact us</a>
                    </li>

                </ul>
            </div>
            <div class="box">
                <h3>Follow Us</h3>
                <div>
                    <ul>
                        <li>
                            <a href="https://www.facebook.com">
                                <img src="./icon/facebook.svg" alt="" />
                                <span>Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com">
                                <img src="./icon/twitter.svg" alt="" />
                                <span>Twitter</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com">
                                <img src="./icon/instagram.svg" alt="" />
                                <span>Instagram</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="box instagram-api">
                <h3>Instagram</h3>
                <div class="post-wrap">
                    <div>
                        <a href="https://www.instagram.com"><img src={footerimg1} alt="" /></a>

                    </div>
                    <div>
                        <a href="https://www.instagram.com"> <img src={footerimg2} alt="" /></a>

                    </div>
                    <div>
                        <a href="https://www.instagram.com"><img src={footerimg3} alt="" /></a>

                    </div>
                    <div>
                        <a href="https://www.instagram.com"> <img src={footerimg4} alt="" /></a>

                    </div>
                    <div>
                        <a href="https://www.instagram.com"> <img src={footerimg5} alt="" /></a>

                    </div>
                    <div>
                        <a href="https://www.instagram.com"><img src={footerimg6} alt="" /></a>

                    </div>
                </div>
            </div>
        </div>
    </footer>
    <footer class="copyright">
        <div>
           
            Copyright © 2020 .All rights reserved by <a href="https://www.instagram.com">Online PG Finder</a>.
            
        </div>
    </footer>
    </div>
  )
}

export default Footer