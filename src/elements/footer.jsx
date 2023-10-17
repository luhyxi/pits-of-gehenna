import React from "react";
import logo from '../assets/flagrainbow.gif'; // Import the image
import logo1 from '../assets/flagtrans.gif'; // Import the image

function Footer() {

    return (
        <div className="main-footer">
            {/* Column 1 */}
            <div className="column">
                <img src={logo} className="small" alt="flag" />
                <img src={logo1} className="small" alt="flag" />
            </div>
            {/* Column 2 */}
            <div className="column">
                <h2>Luana Ritter ~ 2023</h2>
            </div>
        </div>
    );
}

export default Footer;
