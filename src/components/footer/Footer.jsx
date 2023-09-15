import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <footer className="footer_container">
        <div className="footer_leftarea">
          <div className="footerLogo">Yash Villa</div>
          <p className="footerParagraph">
            Experience the ultimate in relaxation at Yash Villa. Our villa
            offers a cozy stay with modern amenities, a private pool, and
            breathtaking views, making it the perfect getaway for your dream
            vacation.
          </p>

          <div className="footerSocialMediaIcons">
            <a
              href="https://instagram.com/yash_villa?igshid=MzRlODBiNWFlZA=="
              target="_blank"
            >
              <img
                className="icon"
                src="/icons8-instagram.svg"
                alt="Instagram Logo"
              />
            </a>
            <a href="" target="_blank">
              <img
                className="icon"
                src="/icons8-facebook.svg"
                alt="Facebook Logo"
              />
            </a>
            <a href="https://wa.me/7506480095" target="_blank">
              <img
                className="icon"
                src="/WhatsAppButtonGreenMedium.png"
                alt="WhatsApp Logo"
              />
            </a>
          </div>
        </div>

        <div className="footer_rightarea">
          <div className="footerLinks">
            <h4>Links</h4>
            <ul>
              <li>Home</li>
              <li>Gallery</li>
              <li>Contact</li>
              <li>About Us</li>
            </ul>
          </div>

          <div className="footerPolicies">
            <h4>Policies</h4>
            <ul>
              <li>Terms & Conditions</li>
              <li>Damage policy</li>
              <li>Payment Policy</li>
              <li>Cancellation and Refund Policy</li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="footerBottomLine">
        Copyright © - {new Date().getFullYear()} Yash Villa, All Rights Reserved
        | Designed And Developed By{" "}
        <a
          href="mailto:webdev.asifkhan@gmail.com"
          target="_blank"
          className="footerBottomLine_developerName"
        >
          Asif Khan
          <img className="footerBottomLineArrow" src="/upRightArrow.svg" alt="upArrow" />
        </a>
      </div>
    </>
  );
}

export default Footer
