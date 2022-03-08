import React from 'react';
import './Main.css';
import Sign from '../Sign/Sign';

const aq = {
  name: 'aquarius',
  dates: 'Jan 21 - Feb 19',
};

export default function Main() {
  return (
    <main>
      <Sign key={aq.name} name={aq.name} dates={aq.dates} />
    </main>
  );
}
