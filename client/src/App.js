import React from 'react';
import './style.css';

const projects = [
    {
        title: "Project One",
        description: "Description of project one.",
        link: "#"
    },
    {
        title: "Project Two",
        description: "Description of project two.",
        link: "#"
    }
];

const App = () => {
    return (
        <div className="portfolio">
            <h1>My UX Design Portfolio</h1>
            <div className="projects">
                {projects.map((project, index) => (
                    <div className="project" key={index}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;