import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer-container">
      <p>© 2023 Knight Travel Agencies</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer