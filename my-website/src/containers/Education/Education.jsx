import React from "react";
import "./Education.css";
import { FaUniversity } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";
const Education=()=>{
    return(
        <>
        <div id='education' className="education-page">
            <div className="education-page-title">
                <h1><span>Education</span></h1>
            </div>
            <div className="education-page-container">
                <div className="education-page-right">
                    <h3><FaUniversity size={20}/> Master of Science in Computer Science</h3>
                    <p>University of North Texas</p>
                    <p>Graduated in 2023</p>
                    <h3>GPA 3.87</h3>
                    <p><TbPointFilled /> Major in Computer Science</p>
                    <p><TbPointFilled /> Minor in Cloud Computing</p>
                    <p><TbPointFilled /> Minor in Network and Security</p>
                    <p><TbPointFilled /> Minor in Database Management and Data processing</p>
                </div>

            </div>

        </div>
        </>
    )
}
export default Education;
