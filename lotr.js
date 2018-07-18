'use strict';


function createCharacter(name, nickname, race, origin, attack, defense, weapon) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    weapon,
    describe: function() {
      console.log(`${this.name} is a ${this.race} from ${this.origin} who uses ${this.weapon}.`);
    },
    evaluateFight: function(charObj) {
      let x = 0;
      let y = 0;
      // opponent = 5 defense, attack = 10
      if (charObj.defense < this.attack) {
        x = this.attack - charObj.defense;
      } else if (this.defense < charObj.attack) {
        y = charObj.attack - this.defense;
      }
      return `Your opponent takes ${x} damage and you receive ${y} damage`;
    }
  }
}


const characters = [
  createCharacter("Gandalf the White", "gandalk", "Wizard", "Middle Earth", 10, 6, "a wizard staff"),
  createCharacter("Bilbo Baggins", "bilbo", "Hobbit", "The Shire", 2, 1, "the Ring"),
  createCharacter("Frodo Baggins", "frodo", "Hobbit", "The Shire", 3, 2, "a String and Barrow Blade"),
  createCharacter("Aragorn son of Arathorn", "aragorn", "Man", "Dunnedain", 6, 8, "Anduril"),
  createCharacter("Legolas", "legolas", "Elf", "Woodland Realm", 8, 5, "a Bow and Arrow")
];

characters.push(createCharacter("Arwen Undomiel", "Arwen", "Half-elf", "Rivendell", 2, 7));

// console.log(characters);

characters.find(character => character.nickname === 'aragorn').describe();

const hobbitCharacters = characters.filter(element => element.race === 'Hobbit');
//console.log(hobbitCharacters);
const goodCharacters = characters.filter(element => element.attack > 5);
//console.log(goodCharacters);


console.log(characters[0].describe());