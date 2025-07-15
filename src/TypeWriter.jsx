import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './TypeWriter.css'
const TypewriterEffect = () => {
  return (
    <div className='keyWords'>
      <Typewriter
        words={['Computer Science Student', 'Web Developer', 'Programming Enthusiast']}
        loop={0}
        cursor
        cursorStyle='|'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  );
};

export default TypewriterEffect;
