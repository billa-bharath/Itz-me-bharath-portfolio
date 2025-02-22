import React, { useState, useEffect } from 'react';
import Bharath from '../components/Adobe Express - file.png';
import './Home.css';
import Type from './Type'; // Corrected import path

const SlidingImage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="sliding-container">
      {/* Image Section */}
      <div className={`image-section ${isVisible ? 'visible' : ''}`}>
        <img className="bharath" src={Bharath} alt="Bharath" />
      </div>

      {/* Text Section */}
      <div className={`text-section ${isVisible ? 'visible' : ''}`}>
        <h1 className="heading">Welcome to My Portfolio</h1>
        <h1 className="name">
          <Type />
        </h1>
        <h4 className="para">
       Seeking an entry-level position in [Frontend Developer] where i can utilize my skills,learn new technologies,and contribute to the growth of the organization while enhancing my professional development

        </h4>
      </div>
    </div>
  );
};

export default SlidingImage;
