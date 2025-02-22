import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaReact } from 'react-icons/fa';

const Skills = () => {
  const skillList = [
    { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3' },
    { name: 'JavaScript', icon: <FaJsSquare />, color: '#F7DF1E' },
    { name: 'React JS', icon: <FaReact />, color: '#61DAFB' },
  ];

  return (
    <div className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skillList.map((skill, index) => (
          <div key={index} className="skill-card" style={{ borderColor: skill.color }}>
            <div className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <h3 className="skill-name">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
