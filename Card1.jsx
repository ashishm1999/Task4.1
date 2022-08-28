import React from 'react';
import Card from './Card';
import List from './List';
import './Card.css';

const Card1 = () => {
  return (
    <div className='row'>
      <Card
        image={List[0].image}
        name={List[0].name}
        description={List[0].description}
        star={List[0].star}
        name1={List[0].name1}
      />
      <Card
        image={List[1].image}
        name={List[1].name}
        description={List[1].description}
        star={List[1].star}
        name1={List[1].name1}
      />
      <Card
        image={List[2].image}
        name={List[2].name}
        description={List[2].description}
        star={List[2].star}
        name1={List[2].name1}
      />
    </div>
  );
};
export default Card1;
