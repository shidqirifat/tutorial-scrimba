import React from 'react';
import './style.css';
import dataCard from '../../data';

function Card(props) {
  return (
    <div className='card-item'>
      <div className='card-image'>
        <img src={props.imageUrl} alt={props.title} />
      </div>
      <div className='card-content'>
        <div className='location'>
          <img src='./images/location-icon.svg' alt='location-icon' />
          <h3 className='country'>{props.location}</h3>
          <h4><a href={props.googleMapsUrl} target='_blank' rel='noreferrer'>View on Google Maps</a></h4>
        </div>
        <h2 className='card-title'>{props.title}</h2>
        <span className='card-date'>{props.startDate} - {props.endDate}</span>
        <p className='card-desc'>{props.description}</p>
      </div>
    </div>
  )
}

export default function MainContent() {
  const card = dataCard.map((data, index) => <Card {...data} key={index} />);

  return (
    <main>
      <div className='card-container'>
        {card}
      </div>
    </main>
  )
}
