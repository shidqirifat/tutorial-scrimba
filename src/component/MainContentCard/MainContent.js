import React from 'react';
import './style.css';
import imageJumbotron from '../../images/jumbotron.svg';
import dataCard from '../../data';

function Card(props) {
  let badge = props.openSpots === 0 ? 'Sold Out' : props.location === 'Online' ? 'Online' : '';

  return (
    <div className='card-item'>
      {badge && <div className='badge'>{badge}</div>}
      <img src={`../images/${props.coverImg}`} alt={props.title} className='card-image' />
      <div className='card-content'>
        <h4><img src='../images/star.png' alt='star' className='star-image' />{props.stats.rating} ({props.stats.reviewCount}) - USA</h4>
        <h4>{props.title}</h4>
        <h5>From ${props.price} <span>/ person</span></h5>
      </div>
    </div>
  )
}

export default function MainContent() {
  const card = dataCard.map(data => <Card {...data} key={data.id} />);

  return (
    <main>
      <img src={imageJumbotron} alt='Jumbotron' className='jumbotron-img' />
      <h1>Online Experiences</h1>
      <h3>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h3>
      <div className='card-container'>
        {card}
      </div>
    </main>
  )
}
