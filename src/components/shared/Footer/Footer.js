import React from 'react'
import '../../../pages/Home/Home.css'

const Footer = () => {
  return (
    <>
    <footer>
    <div class="footer-container">
      <div class="footer-section">
        {/* <img src="logo.jpeg" alt="Milk Bottle" class="footer-logo"> */}
        
      </div>
      <div class="footer-section">
        <p>Address: 123 Main Street, Cityville</p>
        <p>Email: info@yourcompany.com</p>
        <p class="social-icons">
          <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="#" target="_blank"><i class="fab fa-whatsapp"></i></a>
          <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
          <a href="#" tarfget="_blank"><i class="fab fa-linkedin"></i></a>
        </p>
      </div>
      <div class="footer-section">
        <p><a href="#">Contact Us</a></p>
        <p><a href="#">Services</a></p>
        <p><a href="#">About</a></p>
      </div>
    </div>
  </footer>

  <footer id="one">© Your Copyright 2023 All Rights Reserved</footer>
  </>
  )
}

export default Footer
