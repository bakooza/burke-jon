'use strict';
const jon = {
  name: 'Jon',
  jobTitle: 'student'
};

const burkey = {
  name: 'Burkey',
  jobTitle: 'student'
};

const alex = {
  name: 'Alex',
  jobTitle: 'student'
};
 
const kelly = {
  name: 'Kelly',
  jobTitle: 'student'
};

const tarik = {
  name: 'Tarik',
  jobTitle: 'student'
};

const peopleArray = [jon, burkey, alex, kelly, tarik];

console.log(peopleArray);

peopleArray.forEach(element => console.log(element.name + ': ' + element.jobTitle));


// Jon: Student