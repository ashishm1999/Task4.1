import React from 'react';
import Card from './Card';
import List from './List';
import './Card.css';

const Card2 = () => {
  return (
    <div className='row'>
      <Card
        image={List[3].image}
        name={List[3].name}
        description={List[3].description}
        star={List[3].star}
        name1={List[3].name1}
      />
      <Card
        image={List[4].image}
        name={List[4].name}
        description={List[4].description}
        star={List[4].star}
        name1={List[4].name1}
      />
      <Card
        image={List[5].image}
        name={List[5].name}
        description={List[5].description}
        star={List[5].star}
        name1={List[5].name1}
      />
    </div>
  );
};
export default Card2;
