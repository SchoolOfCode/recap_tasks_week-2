const celebs = [
  "David Beckham",
  "Cher",
  "Madonna",
  "Tom Petty",
  "Cristiano Ronaldo",
  "Whoopi Goldberg",
  "Samuel L Jackson",
  "Angelina Jolie",
  "Richard Osman",
  "Emma Thompson"
];

// Make a function - done
function makeLegend(name) {
  // Take in a string as a parameter - done

  // return that string + " is now a legend" - done
  return `${name} is now a legend`;
}

// 👉 Using an array method and the `makeLegend` function, create a new array which includes `'is now a legend'` for each item. Save this new array to the variable `legendaryCelebs`.
// take the array of celebrities, and for each one
// old item -> old item + " is now a legend"

let legendaryCelebs = celebs.map(makeLegend);

console.log(legendaryCelebs);

// 👉 Use an array method to produce a new array of all of the celebrity names which start with a vowel and store in a new variable called `vowelCelebs`.
// Take the celebs array

let vowelCelebs = celebs.filter(doesStartWithAVowel);

console.log(vowelCelebs);

function doesStartWithAVowel(string) {
  // takes in a string - done

  // first character - done
  let lowerFirstCharacter = string[0].toLowerCase();

  // "a", "e", "i", "o", "u" - done
  if (
    lowerFirstCharacter === "a" ||
    lowerFirstCharacter === "e" ||
    lowerFirstCharacter === "i" ||
    lowerFirstCharacter === "o" ||
    lowerFirstCharacter === "u"
  ) {
    return true;
  }
  // return true if it starts with a vowel - done

  // return false if it doesn't - done
  return false;
}
