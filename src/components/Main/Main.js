import React from 'react';
import './Main.css';
import Sign from '../Sign/Sign';

import { zodiac } from '../../data';
import stars from '../../stars.jpg';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${stars})` }}>
      {zodiac.map((sign) => (
        <Sign key={sign.name} name={sign.name} dates={sign.dates} />
      ))}
    </main>
  );
}
