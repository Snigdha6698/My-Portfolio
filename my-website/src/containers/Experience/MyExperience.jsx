import React from "react";
import "./MyExperience.css";
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Expe_Data = [
    {
        title: "Software Engineer - Cloud",
        company: "Virufy",
        duration: "March 2024 - Present",
        description: [
            "Developed tools to automate tasks and improve efficiency.",
            "Managed API system deployments and set up databases in AWS.",
            "Collaborated with cross-functional teams in Agile environments."]
    },
    {
        title: "Software Developer",
        company: "C-HIT Information Technology & Services",
        duration: "August 2023 - March 2024",
        description: [
            "Developed tools to automate tasks and improve efficiency.",
            "Managed API system deployments and set up databases in AWS.",
            "Collaborated with cross-functional teams in Agile environments."
        ]
    },
    {
        title: "Systems Engineer-1 ",
        company: "Atos India Global IT solutions ",
        duration: "June 2019 - August 2021",
        description: [
            "Monitored and troubleshooted infrastructure systems.",
            "Ensured system availability and performance for global clients."
        ]
    },
    {
        title: "Graduate Student Assistant",
        company: "University of North Texas",
        duration: "Aug 2018 - Dec 2019",
        description: [
            "Supported research projects and academic initiatives.",
            "Conducted data analysis and created visual presentations."
        ]
    },
    {
        title: "Software Developer Intern",
        company: "Single source Infotech ",
        duration: "May 2018 - April 2019",
        description: [
            "Developed python automation using REST API for the mail processing based on content.",
            "Implementation of highly responsive and interactive UIs using ReactJS, enhancing user experience by leveraging deep knowledge of DOM and Virtual DOM operations."
        ]
    }

]

const ExperienceCard = ({ experience }) => {
    return (
        <div className="experience-card">
            <h2><span>{experience.title}</span></h2>
            <h3><span>{experience.company}</span></h3>
            <p><strong>{experience.duration}</strong></p>
            <ul>
                {experience.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                ))}
            </ul>
        </div>
    );
};

const ExperiencePage = () => {
    return (
        <div className="experience-page">
            <div className='experience-page-title'>
            <h1><span>Experience</span></h1> 
            </div>
            <div className="experience-list">
                <div className="elementline">
                <VerticalTimeline contentStyle={{ background: 'linear-gradient(267deg, orange 0.36%,purple 102.60%);'}}>
                {Expe_Data.map((experience, index) => (
                    <VerticalTimelineElement>
                    
                    <ExperienceCard key={index} experience={experience} />
                    </VerticalTimelineElement>
                ))}
                </VerticalTimeline>
                </div>
            </div>
        </div>
    );
};

export default ExperiencePage;

