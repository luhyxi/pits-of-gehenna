import React from "react";
import logo from '../assets/flagrainbow.gif'; // Import the image

function Footer() {
    return (
        <div className="main-body">
            <div className="row">
                <img src={logo} className="small" alt="flag" /> {/* Use the img tag with the logo as the source */}
            </div>
            
        </div>
    );
}

export default Footer;
