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