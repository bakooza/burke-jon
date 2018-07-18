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
  const filteredArray = objKeys.filter((element, index) => element === expectedKeys[index])
  if (filteredArray.length === expectedKeys.length) {
    return true;
  }
}