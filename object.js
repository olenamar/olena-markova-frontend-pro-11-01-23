const peoples = [
  {
    name: 'Alina',
    money: 2700.32,
    cities: 'Lviv, Kyiv, Ternopil',
    children: [
      {
        name: 'Oliver',
        age: 6,
      }
    ]
  },
  {
    name: 'Andrii',
    money: 9301.32,
    cities: 'Paris, Madrid, Rivne',
    children: []
  },
  {
    name: 'George',
    money: '35000',
    cities: 'Stambul',
    children: [
      {
        name: 'Olha',
        age: 8,
      },
      {
        name: 'Olena',
        age: 2,
      }
    ]
  }
];

  function changes(user) {
      for (let i = 0; i < peoples.length; i++){
          const newPeoples = peoples[i];
          newPeoples.name = newPeoples.name.toUpperCase();
          newPeoples.cities = newPeoples.cities.split(',');
              for(let j = 0; j < newPeoples.children.length; j++){
                  const children = newPeoples.children[j];
                  children.name = children.name.toUpperCase();
                  
                  }
                  
                  
              }
        return user;      
      }
           
  
  
console.log(changes(peoples));