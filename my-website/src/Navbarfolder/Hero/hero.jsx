import React from 'react';
import './hero.css';
//import Resume from './Snigdha - Cloud Engineer-2.docx"'

const handleDownload=()=>{
    const resumePath = "../public/Snigdha - Cloud Engineer-2.doc"; // Ensure the file is in the public folder
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Resume.pdf"; // Specify the downloaded file name
    link.click();

};

const Hero = () => {
    
    return (
        <>
            <div id='home' className='hero'>
                <div className='hero-img'>

                </div>
                <div className="hero-action">
                    <h1><span>I'm Sri Snigdha Kotharu,</span> Software Developer</h1>
                    <p>I'm a Software Engineer with 4 years of experience in cloud computing, data management, and automation, driving efficiency and innovation through scalable solutions.
                        Passionate about leveraging technology to solve complex problems and optimize operations. </p>
                    <div className="hero-resume">
                    <button onClick={handleDownload}>Resume </button>

                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Hero;