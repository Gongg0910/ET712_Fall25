import React from 'react';
import './App.css';
import Leopard from './images/leopard.jpg'


const second_web = function() {
  return (
    <div className="box_about">
      <h1>Leopard</h1>
      <img src={Leopard} alt="Leopard theme" className="image" />
      <p className='text_about'>
        A big fact about leopards is their incredible strength, which 
        allows them to drag prey much larger than themselves up into 
        trees to keep it safe from other predators like lions and hyenas. 
        This behavior, known as food caching, is possible due to their 
        exceptional climbing ability and power, which also helps them to 
        rest undisturbed in trees during the day. 
      </p>
    </div>
  );
};

export default second_web;