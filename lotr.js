'use strict';

/*function mammal(name, numEyes) {
  return {
    name: name,
    isWarmblooded: true,
    numEyes: numEyes,
    evolve: function() {
      console.log("I'm not mutating, I'm evolving.");
      this.numEyes++;
    },
    explainYourSelf: function() {
      console.log(
        `I'm just a ${this.name} with ${this
          .numEyes}  eye(s). Nothing to see here.`
      );
    },
  };
}*/

function createCharacter(name, nickname, race, origin, attack, defense) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe: function() {
      console.log(`${this.name} is a ${this.race} from ${this.origin}`);
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


const legolas = createCharacter("legolas", "l", "elf", "road", 23, 20);
const aragorn = createCharacter("aragorn", "m", "human", "woods", 10, 11);
console.log(legolas.evaluateFight(aragorn));



const characters = [
  createCharacter("Gandalf the White", "gandalk", "Wizard", "Middle Earth", 10, 6),
  createCharacter("Bilbo Baggins", "bilbo", "Hobbit", "The Shire", 2, 1),
  createCharacter("Frodo Baggins", "frodo", "Hobbit", "The Shire", 3, 2),
  createCharacter("Aragorn son of Arathorn", "aragorn", "Man", "Dunnedain", 6, 8),
  createCharacter("Legolas", "legolas", "Elf", "Woodland Realm", 8, 5)
];

characters.push(createCharacter("Arwen Undomiel", "Arwen", "Half-elf", "Rivendell", 2, 7));

// console.log(characters);

characters.find(character => character.nickname === 'aragorn').describe();
