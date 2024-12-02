import React from "react";
import "./Footer.css";
//import { CgMail } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";


const Footer=()=>{
    return(
        <>
        <div className="footer-page">
            <div className="footer-page-top">
                <div className="footer-page-top-left">
                    <p>I'm a Software Engineer with 4 years of experience in Software Development</p>
                </div>
                
                <div className="footer-page-top-right">
                    <div className="footer-input-email">
                        <FaRegUser/>
                        <input type="email" placeholder="Enter your Email"/>
                        
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>

            </div>
            <hr/>

            <div className="footer-page-bottom">
                <p className="footer-page-bottom-left"> </p>

            </div>

        </div>
        </>
    )
}
export default Footer;


