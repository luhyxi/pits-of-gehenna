import React from "react";
import SVG from 'react-inlinesvg';
import logo from '../assets/public/me.png';

/* Preciso transformar isso em um texto único para toda página*/


function Body() {
    return (
        <div className="main-body">
            <div className="row" style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    <img src={logo} className="bigger" alt="Your Image" />
                </div>
                <div style={{ flex: 2 }}> 
                <h2>About Me</h2>
                <p>Hello! I'm Luana Ritter, and I'm passionate about a wide range of subjects. Here's a little bit about me:</p>

                <ul>
                    <li><strong>Pronouns:</strong> She/Her</li>
                    <li><strong>Location:</strong> Brazil</li>
                    <li><strong>Interests:</strong> My interests are quite diverse. I'm deeply into programming, specializing in languages like C#, Javascript, and React. But I'm not just a techie; I'm also fascinated by philosophy, with a focus on thinkers like Hegel, Lacan, and Derrida. I'm always on the lookout for effective studying techniques, and I'm intrigued by Western Occultism and its mysteries. Mental health is another important area of interest for me.</li>
                    <li><strong>Astrological Signs:</strong> I'm a Scorpio Sun, with a Sagittarius Rising, and a Capricorn Moon.</li>
                    <li><strong>Operating System:</strong> I prefer Linux for my computing needs.</li>
                    <li><strong>Coding Workflow:</strong> I use Rider for C# and Vim for everything else, making sure my coding workflow is both efficient and tailored to my preferences.</li>
                    <li><strong>Studies:</strong> Currently, I'm delving into Computer Science and Philosophy, combining the best of both worlds.</li>
                </ul>

                <p>Feel free to connect with me if you share any of these interests or just want to chat. Let's explore the world of technology, philosophy, and more together!</p>
                </div>
            </div>
        </div>
    )
}

export default Body;
