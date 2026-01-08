//const wildlyBiasedReview = (location) => {
 // if (location === 'NYC') {
    //console.log('THE GREATEST CITY IN THE WORLD');
    //console.log('THE CITY THAT NEVER SLEEPS');
    //console.log('WOW WHAT A CITY');
  //} else {
    //console.log('Yea that place is cool I guess');
 // }
//};
//modified version of the wildlyBiasedReview function that takes a location as a parameter and logs a biased review based on the location

const wildlyBiasedReview = (location) => {
  if (location !== 'NYC') {
    console.log('Yea that place is cool I guess');
    return;
  }
  
  console.log('THE GREATEST CITY IN THE WORLD');
  console.log('THE CITY THAT NEVER SLEEPS');
  console.log('WOW WHAT A CITY');
};





//const getWeatherReport = (temperature) => {
 //if (temperature > 90) {
    //const weatherReport = "It's hot and gross out.";
   // console.log(weatherReport);
    //console.log("And that's your report!");
 // } else if (temperature > 70) {
    //const weatherReport = "It's really nice!";
    //console.log(weatherReport);
   // console.log("And that's your report!");
  //} else if (temperature < 32) {
   // const weatherReport = "Wow, it's cold out.";
    //console.log(weatherReport);
    //console.log("And that's your report!");
 // }
//};
//modified version of the getWeatherReport function that takes temperature as a parameter and logs a weather report based on the temperature

const getWeatherReport = (temperature) => {
  let weatherReport;

  if (temperature > 90) {
    weatherReport = "It's hot and gross out.";
  } else if (temperature > 70) {
    weatherReport = "It's really nice!";
  } else if (temperature < 32) {
    weatherReport = "Wow, it's cold out.";
  } else {
    weatherReport = "Temperature is moderate.";
  }

  console.log(weatherReport);
  console.log("And that's your report!");
};





module.exports = {
  wildlyBiasedReview,
  getWeatherReport,
};
