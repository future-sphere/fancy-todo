import React from 'react';
import './index.css';

function Card({ name, avatar, title }) {
  return (
    <div className='card-container'>
      <div className='avatar-container'>
        <img src={avatar} alt='' />
      </div>
      <div className='content-container'>
        <h2>{name}</h2>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Card;
