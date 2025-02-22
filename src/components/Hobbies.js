import React from 'react';
import GymImage from './gym.jpg';
import bikeRidingImage from './bike.jpg';
import cricketImage from './cricket.jpg';
import listeningSongsImage from './songs.jpg';
import agricultureImage from './plant.jpg';
import VideoEditing from './edit.jpg';
import './Hobbies.css';

const Hobbies = () => {
  const hobbies = [
    { name: "Gym", image: GymImage },
    { name: "Bike Riding", image: bikeRidingImage },
    { name: "Cricket", image: cricketImage },
    { name: "Listening to Songs", image: listeningSongsImage },
    { name: "Agriculture", image: agricultureImage },
    { name: "Video Editing", image: VideoEditing },
  ];

  return (
    <div className="hobbies-container">
      <h1 className="hobbies-title">My Hobbies</h1>
      <ul className="hobby-list">
        {hobbies.map((hobby, index) => (
          <li key={index} className="hobby-item">
            <img src={hobby.image} alt={hobby.name} className="hobby-img" />
            <span className="hobby-name">{hobby.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hobbies;
