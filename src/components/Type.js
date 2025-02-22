import React from 'react';
import Typewriter from 'typewriter-effect';

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: ["I'm Bharath...", "Full Stack Developer...", "UI & UX Designer..."],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Type;
