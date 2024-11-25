import React from "react";
import "./Contact.css";
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { TbPhoneCall } from "react-icons/tb";
import { ImLocation } from "react-icons/im";
import { TbBrandLeetcode } from "react-icons/tb";

const Contact=()=>{
    return(
        <>
        <div className="my-contact">
            <div className="my-contact-title">
                <h1><span>Contact Me</span></h1>
                </div>
            <div className="my-contact-section">
                <div className="my-contact-left">
                    <h1>Let's Talk!</h1>
                    <p>I'm currenlty available to take on new roles related to Python development with AWS cloud Implementation and frontend development.</p>
                    <div className="my-contact-detail-list">
                    <div className="my-contact-detail">
                        <TbPhoneCall size={25}/> <p>+1 (972) 626-2596</p>
                    </div>
                    <div className="my-contact-detail">
                        <ImLocation size={25}/><p>Ellicott City, MD-21043</p>
                    </div>
                    <div className="my-contact-detail">
                        <CgMail size={25}/><p>srisnigdha06@gmail.com</p>
                    </div>
                    <div className="my-contact-detail">
                    <FaLinkedin onClick={() => window.open("https://www.linkedin.com/in/sri-snigdha-kotharu-63931b299/")} size={25}/>
                    <FaGithub  onClick={() => window.open("https://github.com/Snigdha6698/My-Portfolio.git")} size={25}/>
                    <TbBrandLeetcode  onClick={() => window.open("https://leetcode.com/u/Snigdha_66/")} size={25}/>
                    </div>
                    </div>

                     </div>
                     <form className="my-contact-right">
                        <label htmlFor=" "><span>Your Name</span></label>
                        <input type="text" placeholder='Enter your Name' name='name'/>
                        <label htmlFor=" "><span>Email Id</span></label>
                        <input type="text" placeholder='Enter your Email Id' name='email'/>
                        <label htmlFor=" "><span>Message</span></label>
                        <textarea name="Message" rows="8" placeholder="Enter your Message"></textarea>
                        <button type="submit" className="my-contact-submit">Submit</button>

                     </form>
                     </div>



                
                </div>
        </>
    )
}

export default Contact;