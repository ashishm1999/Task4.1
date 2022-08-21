import faker from 'Faker';
const List = [
  {
    image: require('./Book1.jpeg'),
    name: 'how computer science serves the world',
    description: 'React',
    star: '5',
    name1: faker.name.lastName(),
  },
  {
    image: require('./Book2.jpeg'),
    name: 'Robots make computer science personal',
    description: 'Node.JS',
    star: '5',
    name1: faker.name.lastName(),
  },
  {
    image: require('./Book3.jpeg'),
    name: 'Caring, Comedy, Creativity, and Challenging',
    description: 'React Hooks',
    star: '5',
    name1: faker.name.lastName(),
  },
  {
    image: faker.image.people(),
    name: faker.name.firstName(),
    description: 'JS6',
    star: '5',
    name1: faker.name.lastName(),
  },
  {
    image: faker.image.people(),
    name: faker.name.firstName(),
    description: 'React Router',
    star: '5',
    name1: faker.name.lastName(),
  },
  {
    image: faker.image.people(),
    name: faker.name.firstName(),
    description: 'Express',
    star: '4.9',
    name1: faker.name.lastName(),
  },
];
export default List;
