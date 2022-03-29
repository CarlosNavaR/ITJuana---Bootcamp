// 1. Using this array,
let array = ['Banana', 'Apples', 'Oranges', 'Blueberries'];

// 1a. Remove the Banana from the array.
array.splice(0, 1);

// 1b. Sort the array in order.
array.sort();

// 1c. Put "Kiwi" at the end of the array.
array.push('Kiwi');

// 1d. Remove "Apples" from the array.
const indexApple = array.indexOf('Apples');
array.splice(indexApple, 1);

// 1f. Sort the array in reverse order. (Not alphabetical, but reverse
array.reverse();

// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

// you should have at the end:
['Kiwi', 'Oranges', 'Blueberries'];

//* 2. access "Oranges" using the array below,
let array2 = ['Banana', ['Apples', ['Oranges'], 'Blueberries']];
console.log(array2[1][1][0]);

// 3. Create an object that has properties "username" and "password". Fill those values in with strings.
const user = {
  username: 'John',
  password: '12345',
};
// 3a. Create an array which contains the object you have made above and name the array "database".
let database = [user];

// 3b. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
let newsFeed = [...user, ...timeline];

// 3. Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer',
};
// to this:
('my name is Rudolf the raindeer');

console.log(
  Object.keys(obj)[0] +
    ' ' +
    obj['my'] +
    ' ' +
    Object.keys(obj)[1] +
    ' ' +
    obj['is'] +
    ' ' +
    Object.keys(obj)[2] +
    ' ' +
    obj['the']
);
