// 1. Complete the below questions using this array:
const array = [
  {
    username: 'john',
    team: 'red',
    score: 5,
    items: ['ball', 'book', 'pen'],
  },
  {
    username: 'becky',
    team: 'blue',
    score: 10,
    items: ['tape', 'backpack', 'pen'],
  },
  {
    username: 'susy',
    team: 'red',
    score: 55,
    items: ['ball', 'eraser', 'pen'],
  },
  {
    username: 'tyson',
    team: 'green',
    score: 1,
    items: ['book', 'pen'],
  },
];

// 1a. Create an array using forEach that has all the usernames with a "!" to each of the usernames
array.forEach((user) => {
  copyUser = { ...user };
  copyUser.username += '!';
  return copyUser;
});

// 1b. Create an array using map that has all the usernames with a "? to each of the usernames
const newArray = array.map((user) => {
  copyUser = { ...user };
  copyUser.username.includes('a')
    ? (copyUser.username += '?')
    : copyUser.username;
  return copyUser;
});
console.log(newArray);

// 1c. Filter the array to only include users who are on team: red
const redTeam = array.filter((user) => user.team === 'red');

// 1d. Find out the total score of all users using reduce
const totalScore = array.reduce((acc, user) => {
  return acc + user.score;
}, 0);
console.log(totalScore);

// 1f. Create a new list with all user information, but add "!" to the end of each items they own.

// 2. Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.includes('John');

// 3. Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons1 = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
const john = dragons1.filter((name) => name.includes('John'));

// 4. Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 };
console.log(Object.entries(users));

// 4a. change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

// 4b. change the output array of question 4 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
