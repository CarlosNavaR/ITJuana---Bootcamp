//* 1. create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:

const array = [-1, 0, 3, 100, 99, 2, 99]; // should return 100
const array2 = ['a', 3, 4, 2]; // should return 4
const array3 = []; // should return 0

const biggestNumberInArray = (arr) => {
  let element = 0;
  for (let index = 0; index < arr.length - 1; index++) {
    if (element < arr[index + 1]) {
      element = arr[index];
    }
  }
  console.log(element);
};

const biggestNumberInArray2 = (arr) => {
  let element = 0;
  arr.map((item) => {
    if (item > element) {
      element = item;
    }
  });
  console.log(element);
};

const biggestNumberInArray3 = (arr) => {
  let element = 0;
  arr.forEach((item) => {
    if (element < item) {
      element = item;
    }
  });
  console.log(element);
};

//* 2. Write a function checkBasket() that lets you know if the item is in the basket or not

amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100,
};

const checkBasket = (basket, lookingFor) => {
  const result = Object.keys(basket).filter((item) => item === lookingFor);
  return result ? true : false;
};
checkBasket(amazonBasket, 'glasses');
