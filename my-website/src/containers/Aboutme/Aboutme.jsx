import React from "react";
import "./Aboutme.css";

const About = () => {
    return (
        <>
        <div className='Aboutme'>
            <div className='About-title'>
                <h1><span>About Me</span></h1>
            </div>
            <div className="About-section">
                <div className="About-left-img">
                </div>
                <div className="About-right">
                    <div className="About-para">
                        <p>I am a passionate Computer Science graduate with experience in Software development. I am proficient in deploying
                            AWS solutions, managing large datasets, and creating robust APIs. Skilled in agile methodologies and automation,
                            committed to continuous learning and innovation. Proven ability to deliver high-quality, scalable software solutions.</p>
                        <p> Currently, at Virufy, I enhance CI/CD pipelines and logging systems using AWS Lambda, achieving a 20% efficiency boost. 
                            Previously at C-HIT, I managed complex data operations with cloud operations and MySQL and developed serverless functions with python. 
                            My career began at Atos India, where I honed my skills in supporting production environments and automating deployments with Jenkins.</p>
                        <p> I am passionate about leveraging technology to solve intricate problems and drive operational excellence. 
                            Let's connect and explore how we can collaborate for mutual success.</p>
                    </div>
                    <div className="About-Skills-bar">
                    <div className="About-skills"><p>AWS Cloud Infrastructure<hr style={{width:"70%"}}/></p></div>
                    <div className="About-skills"><p>React Js & Java Script <hr style={{width:"80%"}}/></p></div>
                    <div className="About-skills"><p>Html & Css Web Programming <hr style={{width:"60%"}}/></p></div>
                    <div className="About-skills"><p>Python Programming <hr style={{width:"70%"}}/></p></div>
                    <div className="About-skills"><p>Database Management <hr style={{width:"50%"}}/></p></div>
                    </div>



                </div>
            </div>
            <div className="About-Achievememts">
                <div className="About-Achievements-bar">
                    <h1>4+</h1>
                    <p>Years of Experience</p> 
                </div>
                <hr />
                <div className="About-Achievements-bar">
                    <h1>Virufy Accolade</h1>
                    <p>Virufy's outstanding Performaner Award</p> 
                </div>
                <hr />
                <div className="About-Achievements-bar">
                    <h1>Atos Accolade</h1>
                    <p>Atos Spot Award for consistency in performance and Delivering above Expetection</p> 
                </div>

                </div>

        </div>
        </>

    )
}
export default About;
