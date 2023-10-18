import React from "react"
import Body from "../elements/body"
import customImage from "../assets/public/lain.jpg"

function Proj() {
    const customContent = (
        <>
            <p>Hello!</p>
        </>
        )
    
        return(
            <div>
                <h1>proj</h1>
                <div className="container-body"><Body image = {customImage} content={customContent} /> </div>
            </div>
        )
}

export default Proj;