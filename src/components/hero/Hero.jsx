import React from 'react'
import './Hero.css';
// import yashVilla from "../../assets/yashVilla.mp4"
import bgVideo from "../../assets/bgVideo.mp4"
import HomeIcon from '@mui/icons-material/Home';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Hero = () => {

  return (
    <>
      <main className="bgContainer">
        <div className="homeIcon">
          <HomeIcon style={{fontSize: "3rem", color: "#FFFFFF"}} />
          <InstagramIcon style={{fontSize: "3rem", color: "#FFFFFF"}} />
          <WhatsAppIcon style={{fontSize: "3rem", color:"#FFFFFF"}} />
          <button className="enquireBtn">Enquire Now</button>
        </div>
        <div className="header">
          <h1>Yash Villa</h1>
          {/* <p>Unlock Your Brand's Radiance</p> */}
        </div>
        <video className='bgVideo' src={bgVideo} autoPlay muted loop playsinline></video>
      </main>
    </>
  )
}

export default Hero
