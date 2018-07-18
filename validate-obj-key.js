'use strict';

function validateKeys(object, expectedKeys){
  const objKeys = Object.keys(object);

  if (objKeys.length !== expectedKeys.length) {
    return false;
  } else if {
    
  }
}


function validateKeys(object, expectedKeys) {
  const objKeys = Object.keys(object);
  if (objKeys.length !== expectedKeys.length) {
    return false;
  }
  let trueCounter = 0;
  objKeys.forEach((element, index) => {
    if (element === expectedKeys[index]) {
      trueCounter++;
    }
  });
  if (trueCounter === objKeys.length) {
    return true;
  }

}