import React from 'react';
import './Main.css';
import Sign from '../Sign/Sign';

import { zodiac } from '../../data';

export default function Main() {
  return (
    <main>
      {zodiac.map((sign) => (
        <Sign key={sign.name} name={sign.name} dates={sign.dates} />
      ))}
    </main>
  );
}
