// Array of movie ratings
let movieScores = [
  4.4,
  3.3,
  5.9,
  8.8,
  1.2,
  5.2,
  7.4,
  7.5,
  7.2,
  9.7,
  4.2,
  6.9
];

// Starting a rating count
let sum = 0;

// Arrays to hold movie scores
let goodMovieScores = [];
let okMovieScores = [];
let badMovieScores = [];

// Loop through movie scores
for (let i = 0; i < movieScores.length; i++) {
  // Create letiable to hold rating score
  let score = movieScores[i];
  // Add each score to the rating count
  sum += score;

  // If the score is greater than 7, add it to the list of good movies
  if (score > 7) {
    goodMovieScores.push(score);
  }
  // If the score is between 5 and 7, add it to the list of "Ok" movies
  else if (score <= 7 && score > 5) {
    okMovieScores.push(score);
  }
  // Otherwise, if the score is less than or equal to 5, add it to the list of bad movies
  else {
    badMovieScores.push(score);
  }
}

// Find the average score
let avg = sum / movieScores.length;

// Store the length of movie ratings
let numGoodMovies = goodMovieScores.length;
let numOkMovies = okMovieScores.length;
let numBadMovies = badMovieScores.length;

// Print results
console.log("---------");
console.log(`There are ${numGoodMovies} good movies.`);
console.log(`There are ${numOkMovies} ok movies.`);
console.log(`There are ${numBadMovies} bad movies.`);
console.log(`The average movie rating is ${avg}.`);
console.log("---------");
