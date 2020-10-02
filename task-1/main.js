function isFirstLetter(string, letter) {
  if (string[0].toLowerCase() === letter.toLowerCase()) {
    return true;
  }
  return false;
}

const bootcampers = [
  'Daniel',
  'Mahdi',
  'Ismail',
  'Jon',
  'Ionut',
  'Carl',
  'Natalie',
  'Jo-Anne',
  'Kunmi',
  'Khang',
  'Katie',
  'Aftab',
  'Stefan',
  'Ani',
  'Arshi',
  'Alice',
  'Hazie',
  'Jeremy',
  'Patrick',
  'Hajoo',
  'James',
  'Bradley',
  'Charlie',
  'Kawalpreet',
  'Shanice',
  'Emma',
  'Daniel S',
  'Michael',
  'Bryan',
  'Fadumo',
  'Thomas',
  'Tommy',
  'Luke',
  'Jessica',
  'Becky',
  'Daniela',
  'Anna-Marie',
  'Maxine',
  'Piper',
  'Isabel',
  'Zaid',
  'Anna',
  'Valentina',
  'Laura',
  'Matthew',
  'Freshta',
  'Amelia',
];

/* Task 1.1 - Using the 'isFirstLetter' function, the 'bootcampers' array and the .filter() method, declare a variable 
'namesBeginningWithA' as an array of all of the bootcampers names which start with 'a'. */

const namesBeginningWithA = bootcampers.filter((name) =>
  isFirstLetter(name, 'a')
);
console.log(namesBeginningWithA);

/* Task 1.2 - Write a function called 'makeLegend', which takes in a name (string) as its only argument. The function should return
a new string which includes the name plus the words 'is now a legend.'. For example, if the name given was 'Ben', the function would
return the string 'Ben is now a legend.' */

function makeLegend(name) {
  return `${name} is now a legend.`;
}

/* Task 1.3 - Using the .map() method and the 'makeLegend' function, change the name in every item of the bootcamper array read:
'[name] is now a legend'. Save assign this new array to the variable 'legendaryBootcampers'.*/

const legendaryBootcampers = bootcampers.map(makeLegend);
console.log(legendaryBootcampers);

/* Task 1.4 - If you have used the 'makeLegend' function as a callback function in the map method above, refactor your code so that
the 'makeLegend' function is instead called inside an anonymous callback function. If you have already used an anonymous callback
function, instead use the 'makeLegend' function as a callback function. */

const legendaryBootcampersAnonymous = bootcampers.map((name) =>
  makeLegend(name)
);
