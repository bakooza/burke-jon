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

/*function findOne(arr, query) {


for (const key in query) {
  if (query[key] === heroes[key])
}
}*/

function findOne(heroesArray, objToCheck) {
  const checkKeysArray = Object.keys(objToCheck);
  const lengthOfCheckKeysArray = checkKeysArray.length;
  let possibleHero = heroesArray.filter(element => element.id === objToCheck.id);
  if (possibleHero === []) {
    return false;
  }
  if (possibleHero)
  
  )
 // filter the heroes array by whether or not id matches the id given in objtocheck
}

findOne(HEROES, { id: 1 });
// => { id: 1, name: 'Captain America', squad: 'Avengers' }

// findOne(HEROES, { id: 10 });
// => null

// findOne(HEROES, { id: 2, name: 'Aquaman' });
// => null

// findOne(HEROES, { id: 5, squad: 'Justice League' });
// => { id: 5, name: 'Wonder Woman', squad: 'Justice League' }

// findOne(HEROES, { squad: 'Justice League' });
// => { id: 4, name: 'Superman', squad: 'Justice League' }