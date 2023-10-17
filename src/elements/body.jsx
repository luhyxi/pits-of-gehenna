import React from "react";
import SVG from 'react-inlinesvg'; // Import the SVG component
import logo from '../assets/lion.svg';

function Body() {
    return (
        <div className="main-body">
            <div className="row">
                <SVG src={logo} className="bigger" /> {/* Use the SVG component with the logo as the source */}
            </div>
        </div>
    )
}

export default Body;
