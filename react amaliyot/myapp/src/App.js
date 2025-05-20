import React from "react";
import "./App.css";
import img1 from './img1.webp';
import img2 from './img2.webp';
import img3 from './img3.webp';
import img4 from './img4.webp';

function App() {
    return (
        <div className="container">

            <nav className="navbar">
                <h1 className="navbar-brand__logo">Odam Lviran</h1>
                <div className="navLinks">
                    <a href="#portfolio" className="link">Portfolio</a>
                    <a href="#about" className="link">About</a>
                    <a href="#contact" className="link">Contact</a>
                </div>
                <h1 className="logo">Illustrator</h1>
            </nav>

            {/* Hero Section */}
            <section className="hero">
                <h2 className="heroTitle">Hi, I'm an Illustrator</h2>
                <p className="heroSubtitle">I create visual stories that speak louder than words.</p>
            </section>

            {/* Portfolio */}
            <section id="portfolio" className="section">
                <h2 className="sectionTitle">Portfolio</h2>
                <div className="gallery">
                    <img src={img1} alt="Work 1" className="image" />
                    <img src={img2} alt="Work 2" className="image" />
                    <img src={img3} alt="Work 3" className="image" />
                    <img src={img4} alt="Work 4" className="image" />
                </div>
            </section>

            {/* About */}
            <section id="about" className="section">
                <h2 className="sectionTitle">About Me</h2>
                <p className="text">
                    I'm a freelance illustrator based in the creative world. My passion lies in creating unique and expressive art that connects with people.
                </p>
            </section>

            {/* Contact */}
            <section id="contact" className="section">
                <h2 className="sectionTitle">Contact</h2>
                <form className="form">
                    <input type="text" placeholder="Name" className="input" />
                    <input type="email" placeholder="Email" className="input" />
                    <textarea placeholder="Message" className="textarea"></textarea>
                    <button className="button">Send</button>
                </form>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2025 Illustrator Portfolio. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
