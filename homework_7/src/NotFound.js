import React from 'react';
import './App.css';
import NotFoundImage from './images/oops_image.jpg'

const NotFound = function() {
  return (
    <div className="box_about">
      <h1>404 - Page Not Found</h1>
      <p className='text_about'>Sorry, the page you are looking for does not exist.</p>
      <img src={NotFoundImage} alt="404 error theme" className="image" />
    </div>
  );
};

export default NotFound;