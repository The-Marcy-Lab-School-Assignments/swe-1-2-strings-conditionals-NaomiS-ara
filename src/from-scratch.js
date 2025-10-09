



// const measureRain = () => {
//}; // takes a number (inches of rain) and returns a string
// 'drought' if 0 inches
// 'dry' if less than 2 inches
// 'average' if less than 4 inches
// 'rainy' if less than 6 inches
// 'flood' if 6 or more inches

function measureRain(inches) {
    if (inches === 0) {
        return 'drought';
    } else if (inches < 2) {
        return 'dry';
    } else if (inches < 4) {
        return 'average';
    } else if (inches < 6) {
        return 'rainy';
    } else {
        return 'flood';
    }
}




//const happyBirthdayPet = () => {
// takes a string (breed of pet) and a number (age of pet in years) and returns a string};

function happyBirthdayPet (breed, age) {
    if (breed === 'snake') {
      return 'Hiss hiss!';
    } else if (breed === 'dog') {
      if (age < 5) {
        return 'Woof! Woof!';
      } else {
        return 'Woof.';
      }
    } else if (breed === 'cat') {
      if (age < 5) {
        return 'Meow!';
      } else {
        return 'Meow.';
      }
    } else {
      return 'Happy birthday!';
    }
  }


//const funTypes = () => {
//}; // takes a single argument of any type and returns a string based on the type and value of the argument

function funTypes(jsType) {
    if (typeof jsType === 'string') {
        return "That's just some text.";
    } else if (typeof jsType === 'number') {
        if (Number.isNaN(jsType)) {
            return "Well, now you're just showing off.";
        } else {
            return "That's a good number.";
        }
    } else if (typeof jsType === 'boolean') {
        return "To bool, or not to bool?";
    } else if (typeof jsType === 'undefined') {
        return "Nothing, but I didn't set that.";
    } else if (jsType === null) {
        return "Nothing, and I did set that.";
    } else if (Array.isArray(jsType)) {
        return "I order you to be indexed.";
    } else if (typeof jsType === 'object') {
        return "Anybody got the key?";
    } else {
        return "I have no idea what that is.";
    }
}
console.log(funTypes("hello"));       // "That's just some text."
console.log(funTypes(42));            // "That's a good number."
console.log(funTypes(NaN));           // "Well, now you're just showing off."
console.log(funTypes(true));          // "To bool, or not to bool?"
console.log(funTypes(undefined));     // "Nothing, but I didn't set that."
console.log(funTypes(null));          // "Nothing, and I did set that."
console.log(funTypes({ key: "value" })); // "Anybody got the key?"
console.log(funTypes([1, 2, 3]));     // "I order you to be indexed."



//const rounder = () => {
//};
function rounder(float, roundingSetting) {
    if (roundingSetting === 'up') {
        return Math.ceil(float);
    } else if (roundingSetting === 'down') {
        return Math.floor(float);
    } else if (roundingSetting === 'honest') {
        return Math.round(float);
    } else {
        return "Invalid rounding setting";
    }
}
console.log(rounder(4.3, 'up'));      // 5
console.log(rounder(4.7, 'down'));    // 4
console.log(rounder(4.5, 'honest'));  // 5
console.log(rounder(4.4, 'honest'));  // 4
console.log(rounder(4.6, 'honest'));  // 5
console.log(rounder(4.3, 'invalid')); // "Invalid rounding setting




//const formatName = () => {
//}; 
function formatName(first, last) {
  function capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }
  return capitalize(first) + " " + capitalize(last);
}
console.log(formatName("john", "doE")); // "John Doe"
console.log(formatName("JANE", "MARY")); // "Jane MARY"
console.log(formatName("alice", "Kingsleigh")); // "Alice Kingsleigh"
console.log(formatName("NAOMI", "S")); // "Naomi S"




//const extractDomain = () => {
//};
function extractDomain(email) {
    const atIndex = email.indexOf("@");
    return email.slice(atIndex + 1);
}
console.log(extractDomain("user@example.com")); // "example.com"
console.log(extractDomain("test@google.com")); // "google.com"
console.log(extractDomain("student@marcylab.org")); // "marcylab.org"





//const startsWithVowel = () => {
//};
function startsWithVowel(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    if (word.length === 0) {
        return false;
    }
    const firstChar = word.charAt(0).toLowerCase();
    return vowels.includes(firstChar);
}
console.log(startsWithVowel("apple")); // true
console.log(startsWithVowel("Banana")); // false
console.log(startsWithVowel("umbrella")); // true
console.log(startsWithVowel("grape")); // false
console.log(startsWithVowel("")); // false  



//const rotate = () => {
//};
function rotate(array, positions) {
    const len = array.length;
    if (len === 0) return array; // Handle empty array
    const pos = positions % len; // Handle positions greater than array length
    return array.slice(-pos).concat(array.slice(0, len - pos));
}
console.log(rotate([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
console.log(rotate(['a', 'b', 'c', 'd'], 1)); // ['d', 'a', 'b', 'c']
console.log(rotate([true, false, true], 3)); // [true, false, true]
console.log(rotate([], 2)); // []
console.log(rotate([1, 2, 3], 5)); // [2, 3, 1] 




module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  formatName,
  extractDomain,
  startsWithVowel,
  rotate,
};
