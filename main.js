// 1.
// Without logging the values, list the value of `sports` and `total`
var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');
// A:
sports = ['soccer', 'baseball','football', 'swimming'];
 total = 4;


// 2.
// Using the `strings` array, wrte a function `longestString()`
// that accepts an array argument and returns the longest string in the array
var strings = ['this','is','a','collection','of','words'];
// A:
function longestString(array)
{
  if(array.length == 0)
    return "";

  var longest = 0;
  var longestIndex = 0;

  for(var i = 0; i < array.length; i++)
  {
    if(array[i].length > longest)
    {
      longest = array[i].length;
      longestIndex = i;
    }
  }

  return array[longestIndex];
}
console.assert(longestString(strings) === 'collection', {"message": "longestString should return 'collection'"});


// Use the `numbers` array for questions 3 - 8.
var numbers = [1,12,4,18,9,7,11,3,101,5,6];


// 3.
// Write a function `smallestNumber()` that accepts an array
// and returns the smallest number in the array.
// A:
var smallestNumber = function(array) {
var smallest = array[0];
for (var i = 0; i < array.length; i++) {
if (smallest > array[i]) {
smallest = array[i];
}
}
return smallest;
};




console.assert(smallestNumber(numbers) === 1, {"message": "smallestNumber should return 1"});


// 4.
// Write a function `getEvens()` that accepts an array
// and returns only the even numbers in the array.
// A:
  var getEvens = function(array) {
    var evenArray = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i] % 2 == 0)
        evenArray.push(array[i])
      }
      return evenArray;
    }



console.assert(getEvens(numbers).toString() === '12,4,18,6', {'message': 'getEvens should return "12,4,18,6"'});


// 5.
// Write a function that accepts an array argument
// and returns the array reversed
// Hint: When looping over the array, start at the last index
// and decrement the iterator to zero
// A:
function arrayReverser(array) {
  var reversedArray = [];
  for (var i = (array.length - 1); i > -1; i--){
    reversedArray.push(array[i]);
  }
  return reversedArray;
}



console.assert(arrayReverser(numbers).toString() === '6,5,101,3,11,7,9,18,4,12,1', {'message': 'arrayReverser should return "6,5,101,3,11,7,9,18,4,12,1"'});

var numbers = [1,12,4,18,9,7,11,3,101,5,6];

// 6.
// Write a function that accepts an array argument
// and returns the sum of all of the numbers in the array
// A:

function sumArrayOfNumbers(array){
  var sum = 0;
  for (var i = 0; i < array.length; i++){
    sum = array[i] + sum;
  }
  return sum;
}



console.assert(sumArrayOfNumbers(numbers) === 177, {'message': 'sumArrayOfNumbers should return 177'});


// 7.
// Write a function that accepts an array argument
// and returns an array of only the numbers greater than 10
// A:

function numbersOver10(array) {
  var tenPlus = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      tenPlus.push(array[i]);
    }

  }
    return tenPlus;
}

console.assert(numbersOver10(numbers).toString() === "12,18,11,101", {'message': 'numbersOver10 should return "12,18,11,101"'});


// 8.
// Write a function that accepts both an array and number argument
// and returns an array of only the numbers greater than the number passed to the function
// A:

function numbersOverX(array, number){
  var gtx = [];
  for (var i = 0; i < array.length; i++) {
    if(array[i] > number)
    gtx.push(array[i]);
  }
  return gtx;
}

console.assert(numbersOverX(numbers, 15).toString() === "18,101", {'message': 'numbersOverX should return "18,101"'});

// 9.
// Write a function `joinArrays()` that takes an array of arrays,
// and returns a single array with the contents of the second array
// listed after the contents of the first array
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var numbersTwo = [33,56,72,2,5,66,90,21,42];
// A:
function joinArrays([numbers, numbersTwo]){
  var newArray = numbers.concat(numbersTwo);
  return newArray;
}

console.assert(joinArrays([numbers, numbersTwo]).toString() === '1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42', {'message': 'joinArrays should return "1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42"'});


// 10.
// Using the `instructors` array, comment the value of each variable below
var instructors = [
    ['JD','JavaScript'],
    ['Tim','JavaScript'],
    ['Brit','Ruby'],
    ['Joe','iOS'],
    ['Dan','JavaScript'],
    ['Will','JavaScript'],
    ['Calvin','JavaScript'],
    ['James','Ruby']
];

var instructorNameDiscipline = instructors[5];
// greenvIlleInstructor = ['Will','JavaScript']

var instructorOne = instructors[4][0];
// instructorOne = 'Dan'

var instructorTwo = instructors[0][1];
// instructorTwo = 'Javascript'

var instructorThree = instructors[2][0];
// instructorThree = 'Britt'
