import React from "react";
import "./Skills.css";
//import Skills_Data from "./Skillsdata.js";
import { FaArrowRight } from "react-icons/fa";
const Skills_Data=[
    {
        s_no:'01',
        s_name:"Cloud Services",
        s_description:"AWS Lambda, API Gateway, Cognito, Step Functions, RDS, SNS, SQS, Athena, EC2"
    
    },
    {
        s_no:'02',
        s_name:"Programming Languages/ Frameworks/ Containerization ",
        s_description:"Python, Java, C, React Js, Django, Docker, Kubernetes"
    },
    {
        s_no:'03',
        s_name:"Database Management/ Data Analysis",
        s_description:"MySQL, PostgreSQL, DynamoDB, S3, Amazon RDS, Pandas, Numpy, Scipy"
    },
    {
        s_no:'04',
        s_name:"CI/CD Tools/ Templates",
        s_description:"Jenkins,SonarQube, AWS CFT, Terraform, Serverless Framework"

    },
    {
        s_no:'05',
        s_name:"Software Methodologies/ IDLE Tools",
        s_description:"Agile, Scrum, Waterfall, GitLab, Vs Code, Eclipse, IntelliJ"
        
    },
    {
        s_no:'06',
        s_name:"Visualization Tools/ Libraries",
        s_description:"Tableau, Power BI, Matplotlib, Plotly, Seaborn"
        
    },
]


const Skills=()=>{
    return(
        <>
        <div id='skills' className="my-skills">
            <div className="my-skills-title">
                <h1><span>Skills</span></h1>     
            </div>
            <div className="my-skills-container">
                {Skills_Data.map((skill,index)=>{
                    return <div key={index} className='skills-format'>
                        <h3>{skill.s_name}</h3>
                        <p>{skill.s_description}</p>
                        <div className="skills-readmore">
                            <p>Read More</p>
                            <FaArrowRight size={20}/>
                        </div>
                    </div>
                })}

            </div>

        </div>
        </>
    )
}
export default Skills;