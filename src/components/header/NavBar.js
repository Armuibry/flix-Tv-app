import React from "react";
import LanguageIcon from "@mui/icons-material/Language";

import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav">
      <img src="images/flixtv.png" alt="Logo" />

      <div className="left">
        <LanguageIcon style={{height:"15px"}} className="icon" />
        <select name="Language" id="lang">
          <option value="eng">English</option>
          <option value="hin">Hindi</option>
        </select>
        <button className="signin">Sign In</button>
      </div>
    </div>
  );
}

export default NavBar;
