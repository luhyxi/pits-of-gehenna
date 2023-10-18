import React from "react"
import Body from "../elements/body"
import customImage from "../assets/public/emo.jpg"

function Text() {
    const customContent = (
        <>
            <p>Hello!</p>
        </>
        )
    
        return(
            <div>
                <h1>Texts</h1>
                <div className="container-body"><Body image = {customImage} content={customContent} /> </div>
            </div>
        )
}

export default Text;