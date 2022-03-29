// Instructions: change everything below to the newest JS Syntax (ES6+)!

//* 1. let + const
// var a = 'test';
// var b = true;
// var c = 789;
// a = 'test2';
let a_Let = 'test';
const b_Const = true;
const c_Const = 789;
a_Let = 'test2';

//* 2. Destructuring
// var person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 50,
//   eyeColor: 'blue',
// };
// var firstName = person.firstName;
// var lastName = person.lastName;
// var age = person.age;
// var eyeColor = person.eyeColor;

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue',
};

const { firstName, lastName, age, eyeColor } = person;

// 3. Object properties
var a = 'test';
var b = true;
var c = 789;
var okObj = {
  a: a,
  b: b,
  c: c,
};

// 4. Template strings
var message =
  'Hello ' +
  firstName +
  ' have I met you before? I think we met in ' +
  city +
  ' last summer no???';

// 5. default arguments
// default age to 10;
function isValidAge(age) {
  return age;
}

//* 6. Arrow functions
// function whereAmI(username, location) {
//   if (username && location) {
//     return 'I am not lost';
//   } else {
//     return 'I am totally lost!';
//   }
// }
const whereAmI = (username, location) => {
  username && location ? 'I am not lost' : 'I am totally lost!';
};

//* 7. Ternary operator
// change this function into a ternary and assign it to variable called experiencePoints
// function experiencePoints() {
//   if (winBattle()) {
//     return 10;
//   } else {
//     return 1;
//   }
// }

function experiencePoints() {
  winBattle() ? 10 : 1;
}

//* 8. Nullish coalescing operator
// What do these each output?
console.log(false ?? 'hellooo');
// Expected output: false, because the left side its not null
console.log(null ?? 'hellooo');
// Expected output: hellooo, because the left side is null
console.log(null || 'hellooo');
// Expected output: hellooo, because the left side is null
console.log((false || null) ?? 'hellooo');
// Expected output: hellooo, because the left side take (false or null) and return hellooo
console.log(null ?? (false || 'hellooo'));
// Expected output: hellooo, the left side is null and the right side is false or hellooo

//* 9. Optional chaining
// Clean up this code using optional chaining

let eduardos_pokemon = {
  pikachu: {
    species: 'Mouse Pokemon',
    height: 0.4,
    weight: 6,
    power: 'lightning',
    friend: {
      charizard: {
        species: 'Dragon Pokemon',
        height: 1.7,
        weight: 90.5,
        power: 'fire',
      },
    },
  },
};

let isaacs_pokemon = {
  raichu: {
    species: 'Mouse Pokemon',
    height: 0.8,
    weight: 30,
    power: '',
  },
};

// if (
//   isaac_pokemon &&
//   isaac_pokemon.raichu &&
//   eduardos_pokemon &&
//   eduardos_pokemon.pikachu &&
//   eduardos_pokemon.pikachu.friend &&
//   eduardos_pokemon.pikachu.friend.charizard
// ) {
//   console.log('fight!');
// } else {
//   console.log('walk away...');
// }

if (isaacs_pokemon?.raichu && eduardos_pokemon?.pikachu?.friend?.charizard) {
  console.log('fight!');
} else {
  console.log('walk away...');
}
