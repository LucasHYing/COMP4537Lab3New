const en = require('../lang/en/en.json');


//Generates a greeting message that includes the current server date and time.
function getDate(name) {
  const date = new Date();
  
  // Replaces the placeholder '%1' in the greeting string with the provided name.
  // Then, appends the string representation of the current date and time.
  return en.greeting.replace('%1', name) + date.toString();
}

// Export the getDate function so it can be used in other parts of the application.
module.exports.getDate = getDate;
