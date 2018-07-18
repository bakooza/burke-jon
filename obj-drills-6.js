'use strict';


// Redo your Cracking the Code problem from String Drills but this time use an object as your cipher.Additionally, create a decodeWords function that utilizes your decode function to accept a single string of words, and then return the fully decoded message as a string.

const words = 'craft block argon meter bells brown croon droop';



function decode(word) {
  const cipher = {
    a: word[1],
    b: word[2],
    c: word[3],
    d: word[4],
    
  };
  return cipher[word[0]] || ' '; 
}


//Rich's answer of decodeWord()
// function decodeWord(word) {
//   const charCode = word[0].charCodeAt();

//   if (charCode > 96 && charCode < 101) {
//     return word[charCode - 96];
//   }
//   return ' '; //default case
// }

function decodeWords(words) {
  return words
    .split(' ')
    .map(decode)
    .join('');
}
//Rich's answer of decodeWord()

console.log(decodeWords(words));