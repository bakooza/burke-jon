'use strict';

const obj = {
  foo: 1,
  bar: 2,
  fum: 3,
  quux: 4, 
  spam: 5,
};

function objFunc(obj) {
  for (let i in obj) {
    console.log(i+ ': ' +obj[i]);
  }
}

objFunc(obj);