import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Navbar from './Navbar';
import Card1 from './Card1';
import Card2 from './Card2';
import Signup from './Signup';
import End from './End';

ReactDOM.render(
  <body>
    <Navbar />
    <div>
      <img className='image' src={require('./image.png')} />
    </div>
    <p className='feature'>Featured Acticles</p>
    <Card1 />
    <button className='pl'>See all articles</button>
    <p className='feature'>Featured Tutorials</p>
    <Card2 />
    <button className='pl'>See all tutortials</button>
    <Signup />
    <End />
  </body>,

  document.getElementById('root')
);