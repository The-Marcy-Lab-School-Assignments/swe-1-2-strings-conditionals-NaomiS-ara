
//modified version of the coolnessGauge function that takes a number of fridges as a parameter and returns a string based on the number
const coolnessGauge = (numOfFridges) => {
  return numOfFridges <= 5 ? 'You need more fridges.' : 'You are downright chilly!'; //flipped the conditions to match the requirements
};

//fixed version of the funkoPopAddictionLevel function that takes a number of Funko Pops as a parameter and returns a string based on the number
const funkoPopAddictionLevel = (numOfFunkoPops) => {
  if (numOfFunkoPops === 0) {
    return 'No pops? Maybe try one.';
  } else if (numOfFunkoPops > 20 ) {
    return 'Only a few? Keep having fun!';
  } else if (numOfFunkoPops > 10) {
    return 'You have a problem.';
  } else if (numOfFunkoPops >= 1) {
    return 'You need help!';
  } else {
    return 'You need an intervention!!!';
  }
};



//fixed version of the returnPositiveNegativeZero function that takes a number as a parameter and returns a string based on whether the number is positive, negative, or zero
const returnPositiveNegativeZero = (num) => { //the ternary logic is/was backwards
  return num === 0 ? 'Zero' : num > 0 ? 'Positive' : 'Negative';
};




module.exports = {
  coolnessGauge,
  funkoPopAddictionLevel,
  returnPositiveNegativeZero,
};
