'use strict';
const jon = {
  name: 'Jon',
  jobTitle: 'student'
};

const burkey = {
  name: 'Burkey',
  jobTitle: 'student',
  boss: 'Jon'
};

const alex = {
  name: 'Alex',
  jobTitle: 'student',
  boss: 'Jon'
};
 
const kelly = {
  name: 'Kelly',
  jobTitle: 'student',
  boss: 'Jon'
};

const tarik = {
  name: 'Tarik',
  jobTitle: 'student',
  boss: 'Jon'
};

const peopleArray = [jon, burkey, alex, kelly, tarik];

function display(arr) {
  arr.forEach(element => !element.boss ?
    console.log(`Founder ${element.name} doesn't report to anybody.`)
    : console.log(`${element.jobTitle} ${element.name} reports to ${element.boss}.`))
  }


display(peopleArray);
// Jon: Student