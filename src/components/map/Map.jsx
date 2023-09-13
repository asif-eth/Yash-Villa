import React from 'react'
import "./Map.css"

const Map = () => {
  return (
    <>
        <div className="mapEmbed">
            <h2>Location</h2>
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.782555049837!2d73.25051107526305!3d19.02930105343682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7efae5f834119%3A0xe8a7c891c375bc4f!2sYash%20Villa!5e0!3m2!1sen!2sin!4v1694641728448!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: '1px solid black' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
        </div>
    </>
  )
}

export default Map
