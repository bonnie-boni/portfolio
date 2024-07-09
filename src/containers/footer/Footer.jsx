import React from 'react'
import './footer.css'
import git from "../../media/github.png"
import linkedin from "../../media/linkedin.png"
import fb from "../../media/facebook.png"
import ig from "../../media/instagram.png"

const Footer = () => {
  return (
    <div className="footer" id="Contacts">
      <div className="footer__content">
        <div className="footer__content-social">
          <h3>Social Accounts</h3>
          <ul>
            <li> <a href="#"> <img src={git} alt="Github" /> GitHub </a> </li>
            <li> <a href="#"> <img src={linkedin} alt="linkedin" /> LinkedIn </a> </li>
            <li> <a href="#"> <img src={ig} alt="instagram" /> Instagram </a> </li>
            <li> <a href="#"> <img src={fb} alt="facebook" /> Facebook </a> </li>
          </ul>

        </div>

        <div className="footer__content-connect">
          <input type="email" name="email" id="" placeholder='Enter your email...' /> <br /> <br />
          <textarea name="" id="" placeholder='You can also say hi...' rows={10} ></textarea> <br /><br />
          <button type='submit' className='btn'> Submit </button>
        </div>

        <div className="footer__content-contacts">
            <p>
              <ul>
                <li>example@gmail.com</li>
                <li>07123456789</li>
                <li>P.O Box 12345</li>
              </ul>
            </p>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
