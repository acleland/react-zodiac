import React from 'react';
import './Sign.css';

export default function Sign(props) {
  return (
    <div className="zodiac-card">
      <img alt="aquarius" src={`${process.env.PUBLIC_URL}/images/${props.name}.png`} />
      <span className="name">{props.name}</span>
      <span>{props.dates}</span>
    </div>
  );
}
