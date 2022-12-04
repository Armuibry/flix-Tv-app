import React from 'react'

import './Footer.css'
import LanguageIcon from "@mui/icons-material/Language";

function Footer() {
  return (
    <div className='footer'>
        <p>Questions? Call 000-000-040-0000</p>
        <div className="foot-container">
            <div className="lefts">
                <ul>
                    <span>FAQ</span><span>Investor Relations</span><span>Privacy</span><span>Speed Test</span>
                </ul>
                <ul>
                    <span>Help Centre</span><span>Jobs</span><span>Cookie Preferences</span><span>Legal Notices</span>
                </ul>
            </div>
            <div className="right">
                <ul>
                    <span>Account</span><span>Ways to Watch</span><span>Corporate Information</span><span>Only on Flix TV</span>
                </ul>
                <ul>
                    <span>Media Centre</span>Terms of Use<span></span>Contact Us<span></span>
                </ul>
            </div>
        </div>
        <div className="left-select">
        <LanguageIcon style={{height:"32px"}} className="icons" />
        <select name="Language" id="lang">
          <option value="eng">English</option>
          <option value="hin">Hindi</option>
        </select>
            <span>Flix TV India</span>
        </div>

    </div>
  )
}

export default Footer