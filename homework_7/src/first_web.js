import React from 'react';
import './App.css'; 
import Tiger from './images/tiger.jpg'

const first_web = function() {
  return (
    <div className="box_about">
      <h1>Tiger</h1>
      <img src={Tiger} alt="Tiger theme" className="image" />
      <p className='text_about'>
        A big fact about tigers is that they are the largest living 
        cat species in the world, with males reaching up to 13 feet 
        in length and weighing up to 660 pounds. They are powerful, 
        solitary hunters that are also excellent swimmers, unlike most 
        other cats. 
      </p>
    </div>
  );
};

export default first_web;