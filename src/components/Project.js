import React from 'react';
import './Projects.css'; // Import your CSS file for styling

const Projects = () => {
  // Project Data Array
  const projects = [
    {
      title: 'Bike Accessories',
      description: 'A project about building a modern web app.',
      technologies: 'HTML, CSS',
      link: 'https://strong-otter-80a4ee.netlify.app/' // Replace with your actual Netlify URL
    },
    {
      title: 'Men Fight Club',
      description: 'An interactive website for an e-commerce platform.',
      technologies: 'HTML, CSS, JavaScript',
      link: 'https://register-bharath.netlify.app/' // Replace with your actual Netlify URL
    },
    {
      title: 'Suit Case',
      description: 'A RESTful API for a blog application.',
      technologies: 'HTML,CSS,BOOTSTRAP',
      link: 'https://chimerical-biscochitos-9ca378.netlify.app/' // Replace with your actual Netlify URL
    },
    {
      title: 'Time Tabel',
      description: 'A RESTful API for a blog application.',
      technologies: 'HTML',
      link: 'https://time-table-bharath.netlify.app/' // Replace with your actual Netlify URL
    },
    {
      title: 'App Store',
      description: 'A RESTful API for a blog application.',
      technologies: 'HTML,CSS  ',
      link: 'http://glittering-pika-6cfd40.netlify.app/' // Replace with your actual Netlify URL
    }
  ];

  return (
    <div className="projects-container">
      <h2 className="section-heading">My Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-technologies">
              <strong>Technologies:</strong> {project.technologies}
            </p>
            {project.link && (
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
