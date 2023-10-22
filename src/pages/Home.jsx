import React from "react";
import Body from "../elements/body";
import customImage from "../assets/public/konata.jpg";
import "./home.css";

function Home() {
    const customContent = (
        <div className="welcome-section">
            <p className="welcome-text">Welcome to</p>
            <p className="site-name"> Pits of Gehenna!</p>

            <div className="study-section">
                <p className="study-topic">🜍 - Speculative Metaphysics and Psychoanalysis</p>
                <p className="study-topic">☿ - Hegelian, Mathematical, and Formal Logic</p>
                <p className="study-topic">🜔 - Deconstructivist Theology</p>
            </div>
            <p>Feel free to explore the webpage in the navbar at the top!! Cheers!!</p>
        </div>
    );

    return (
        <div>
            <h1>Home</h1>
            <div className="container-body">
                <Body image={customImage} content={customContent} />
            </div>
        </div>
    );
}

export default Home;
