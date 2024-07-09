import React from 'react'
import './brand.css'
import agri from "../../media/agriculture.jpg"
import hand from "../../media/handshake.jpg"
import bon from "../../media/bonnie.png"

const Brand = () => {
  return (
    <div className='brand' id="Projects">
      <div className="brand__content">
        <div className="brand__content-social">

            <a href="#"> <img src={agri} alt="agri" /> <p>potato disease detector and analysor</p> </a>
            <a href='#'> <img src={hand} alt="hand" /> <p>Wakulima Sacco</p> </a>
            <a href='#'> <img src={bon} alt="boni" /> <p>See more here</p> </a>

        </div>
      </div>
    </div>
  )
}

export default Brand
