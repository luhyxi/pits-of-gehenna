import React from "react";
import SVG from 'react-inlinesvg';

function Body({ image, content }) {
    return (
        <div className="main-body">
            <div className="row" style={{ display: 'flex' }}>
                
                <div style={{ flex: 0 }}>
                    <img src={image} className="body-image" alt="Your Image" />
                </div>
                <React.Fragment>
                    
                <div className="text" style={{ flex: 1 }}> 
                    {content}
                </div>
                </React.Fragment>
            </div>
        </div>
    )
}

export default Body;
