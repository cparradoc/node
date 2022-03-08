const fs = require('fs');

const people = [
    {
      firstName: 'Juan',
      lastName: 'Gonzalez'
    },
    {
      firstName: 'María',
      lastName: 'Rodríguez'
    },
    {
      firstName: 'Jose',
      lastName: 'García'
    }
  ];

  const data = JSON.stringify(people);


fs.writeFile('people.json', data, () => { console.log('File created!');});