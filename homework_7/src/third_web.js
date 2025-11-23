import React from 'react';
import './App.css';
import Cat from './images/cat_image.jpg'


const third_web = function() {
  return (
    <div className="box_about">
      <h1>Cat</h1>
      <img src={Cat} alt="Cat theme" className="image" />
      <p className='text_about'>
        A big fact is that cats have 32 muscles in each ear, which 
        allows them to rotate their ears 180 degrees to pinpoint the 
        source of a sound, demonstrating their incredible hearing. 
        Also, cats primarily meow to communicate with humans, as adult 
        cats rarely meow at each other. 
      </p>
    </div>
  );
};

export default third_web;