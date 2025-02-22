import React, { useEffect, useState } from 'react';
import './Education.css'; // Ensure this CSS file contains the necessary styles for the transition

function Projects() {
    const projects = [
        {
            title: 'POST GRADUATE',
            description: 'MARUDUPANDIYAR INSTITUTIONS COLLEGE,THANJAVUR',
            technologies: '(M.COM) 2023 TO 2025',
            link: '#'
        },
        {
            title: 'UNDER GRADUATE',
            description: 'A.V.V.M.SRI PUSHPAM COLLEGE,THANJAVUR',
            technologies: '(B.COM) 2019 TO 2022',
            link: '#'
        },
    
        {
            title: 'HSC',
            description: 'Kalyana Sundaram Higher Secondary School..',
            technologies: '(12TH STANDARD) 2018 TO 2019',
            link: '#'
        },
        {
            title: 'SSLC',
            description: 'Kalyana Sundaram Higher Secondary School..',
            technologies: '(10TH STANDARD) 2016 TO 2017',
            link: '#'
        },
       
        
    ];

    const [visible, setVisible] = useState(Array(projects.length).fill(false)); // Track visibility for each project item

    useEffect(() => {
        const handleScroll = () => {
            const timelineItems = document.querySelectorAll('.timeline-item');
            timelineItems.forEach((item, index) => {
                const itemPosition = item.getBoundingClientRect().top;
                if (itemPosition < window.innerHeight - 100) {
                    setVisible((prev) => {
                        const newVisible = [...prev];
                        newVisible[index] = true;
                        return newVisible;
                    });
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call once on component mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, [projects.length]);

    return (
        <div className="timeline-container">
            <h2 className="timeline-heading">My Qualification</h2>
            <div className="timeline">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`timeline-item ${visible[index] ? 'visible' : ''}`}
                    >
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <p className="project-technologies">
                                <strong>PASSOUT:</strong> {project.technologies}
                            </p>
                            {/* Uncomment this line to add project links */}
                            {/* <a href={project.link} className="project-link">View Project</a> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
