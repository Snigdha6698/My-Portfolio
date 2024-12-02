import React from "react";
import "./MyExperience.css";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';

const Expe_Data = [
    {
        id: 1,
        title: "Software Engineer - Cloud",
        company: "Virufy",
        duration: "March 2024 - Present",
        description: [
            "Developed tools to automate tasks and improve efficiency.",
            "Managed API system deployments and set up databases in AWS.",
            "Collaborated with cross-functional teams in Agile environments."],
        icon: <FaBriefcase />
    },
    {
        id: 2,
        title: "Software Developer",
        company: "C-HIT Information Technology & Services",
        duration: "August 2023 - March 2024",
        description: [
            "Developed tools to automate tasks and improve efficiency.",
            "Managed API system deployments and set up databases in AWS.",
            "Collaborated with cross-functional teams in Agile environments."
        ],
        icon: <FaBriefcase />
    },
    {
        id: 3,
        title: "Systems Engineer-1 ",
        company: "Atos India Global IT solutions ",
        duration: "June 2019 - August 2021",
        description: [
            "Monitored and troubleshooted infrastructure systems.",
            "Ensured system availability and performance for global clients."
        ],
        icon: <FaBriefcase />
    },
    {
        id: 4,
        title: "Graduate Student Assistant",
        company: "University of North Texas",
        duration: "Aug 2018 - Dec 2019",
        description: [
            "Supported research projects and academic initiatives.",
            "Conducted data analysis and created visual presentations."
        ],
        icon: <FaBriefcase />
    },
    {
        id: 5,
        title: "Software Developer Intern",
        company: "Single source Infotech ",
        duration: "May 2018 - April 2019",
        description: [
            "Developed python automation using REST API for the mail processing based on content.",
            "Implementation of highly responsive and interactive UIs using ReactJS, enhancing user experience by leveraging deep knowledge of DOM and Virtual DOM operations."
        ],
        icon: <FaBriefcase />
    }

]



const ExperiencePage = () => {
    return (
        <div id="experience" className="experience-page">
            <div className='experience-page-title'>
                <h1><span>Experience</span></h1>
            </div>
            <div className="experience-list">
                <VerticalTimeline lineColor="linear-gradient(267deg, orange 0.36%,purple 102.60%)">
                    {Expe_Data.map((exp) => (
                        <VerticalTimelineElement
                            key={exp.id}
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'linear-gradient(40deg,#3f002a,rgb(34, 80, 136))', color: 'black',size:20 }}
                            contentArrowStyle={{ borderRight: '10px solid orange' }}
                            icon={exp.icon}
                            iconStyle={{background:'none',boxShadow:'none',color: 'black',size:20}}
                        >
                            <h3 className="vertical-timeline-element-title">{exp.title}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{exp.company}</h4>
                            <p>{exp.description}</p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>

            </div>
        </div>

    );
};

export default ExperiencePage;

