'use strict';

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(heroesArray, objToCheck) {
  // loop through heroesArray
  // look for something in each element/object
  // iterate through all the info in the hereoesArray object
  // iterate through all the keys inside objToCheck
  // if objtocheck key is also in heroesarray, good
  
//{ id: 1, name: 'Captain America', squad: 'Avengers' }
  return heroesArray.find(heroObject =>  {
    const oTCKeysArray = Object.keys(objToCheck);
    const heroObjectKeysArray = Object.keys(heroObject);
    let result = true;

    oTCKeysArray.forEach(otckey => {
      const match = heroObjectKeysArray.find(herokey => {
        return herokey === otckey;
      });
      if (match !== undefined && heroObject[match] === objToCheck[match]) {
        result = result && true; // if one of the iterations is false, they are all false
      } else {
        result = false;
      }
    });
    return result;
  }) || null;


}


console.log(findOne(HEROES, { squad: 'Justice League' }));
// => { id: 1, name: 'Captain America', squad: 'Avengers' }

// findOne(HEROES, { id: 10 });
// => null

// findOne(HEROES, { id: 2, name: 'Aquaman' });
// => null

// findOne(HEROES, { id: 5, squad: 'Justice League' });
// => { id: 5, name: 'Wonder Woman', squad: 'Justice League' }

// findOne(HEROES, { squad: 'Justice League' });
// => { id: 4, name: 'Superman', squad: 'Justice League' }

const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },
  findOne: function(objToCheck) {
      return this.store.heroes.find(heroObject =>  {
        const oTCKeysArray = Object.keys(objToCheck);
        const heroObjectKeysArray = Object.keys(heroObject);
        let result = true;
        oTCKeysArray.forEach(otckey => {
          const match = heroObjectKeysArray.find(herokey => {
            return herokey === otckey;
          });
          if (match !== undefined && heroObject[match] === objToCheck[match]) {
            result = result && true; // if one of the iterations is false, they are all false
          } else {
            result = false;
          }
        });
        return result;
      }) || null;
  }
};

console.log(Database.findOne({ squad: 'Justice League' }));