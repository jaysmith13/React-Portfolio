import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

import "../style/Footer.css";
function Footer(){
    return(
        <div className="footer">
            <div className="Icons">
                <InstagramIcon/>
                <LinkedInIcon/>
                <TwitterIcon/>
            </div>
            <br>
            <p> &copy; Janea Smith 2022 </p>
            </br>
        </div>
    )
}
export default Footer;