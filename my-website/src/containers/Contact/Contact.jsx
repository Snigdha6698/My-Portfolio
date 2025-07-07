import React from "react";
import "./Contact.css";
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { TbPhoneCall } from "react-icons/tb";
import { ImLocation } from "react-icons/im";
import { TbBrandLeetcode } from "react-icons/tb";
import { BsEmojiSmile } from "react-icons/bs";

const Contact=()=>{

    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "94b30170-42c9-4dae-9edc-4565e0e83680");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
          alert("Form Submitted Successfully!")
        } else {
          console.log("Error", data);
          setResult(data.message);
        }


      };
     
    
    return(
        <>
        <div id='contact' className="my-contact">
            <div className="my-contact-title">
                <h1><span>Contact Me</span></h1>
                </div>
            <div className="my-contact-section">
                <div className="my-contact-left">
                    <h1>Let's Talk!</h1>
                    <p>I'm currenlty available to take on new roles related to Python development with AWS cloud Implementation and frontend development.</p>
                    <div className="my-contact-detail-list">
                    <div className="my-contact-detail">
                        <TbPhoneCall size={25}/> <p>+1 (940) 268-5625</p>
                    </div>
                    <div className="my-contact-detail">
                        <ImLocation size={25}/><p>Mckinney,Tx-75070</p>
                    </div>
                    <div className="my-contact-detail">
                        <CgMail size={25}/><p>snigdha.cloud22@gmail.com</p>
                    </div>
                    <div className="my-contact-detail">
                    <FaLinkedin onClick={() => window.open("https://www.linkedin.com/in/sri-kotharu-63931b299/")} size={25}/>
                    <FaGithub  onClick={() => window.open("https://github.com/Snigdha6698/My-Portfolio.git")} size={25}/>
                    <TbBrandLeetcode  onClick={() => window.open("https://leetcode.com/u/Sri_66/")} size={25}/>
                    </div>
                    </div>

                     </div>
                     <form onSubmit={onSubmit} className="my-contact-right">
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