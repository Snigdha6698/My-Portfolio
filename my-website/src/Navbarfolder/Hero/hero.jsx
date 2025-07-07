import React from 'react';
import './hero.css';


const handleDownload = () => {
  const link = document.createElement("a");
  link.href = `${window.location.origin}/SriKotharu.pdf`;
  link.download = "SriKotharu.pdf";
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Hero = () => {
    
    return (
        <>
            <div id='home' className='hero'>
                <div className='hero-img'>

                </div>
                <div className="hero-action">
                    <h1><span>I'm Sri Kotharu,</span> Software Developer</h1>
                    <p>I'm a Software Engineer with 5 years of experience in cloud computing, data management, and automation, driving efficiency and innovation through scalable solutions.
                        Passionate about leveraging technology to solve complex problems and optimize operations. </p>
                    <div className="hero-resume">
                        
                            <a href="/SriKotharu.pdf"
                             download
                             target="_blank"
                            rel="noopener noreferrer">
                            <button>Resume</button></a>

                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Hero;