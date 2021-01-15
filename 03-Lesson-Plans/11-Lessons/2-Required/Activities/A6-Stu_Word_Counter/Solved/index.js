function wordCount(myString) {
  // Convert string to an array of words
  let stringArray = myString.split(" ");

  // An object to hold word frequency
  let wordFrequency = {};

  // Iterate through the array
  for (let i = 0; i < stringArray.length; i++) {
    let currentWord = stringArray[i];
    // If the word has been seen before...
    if (currentWord in wordFrequency) {
      // Add one to the counter
      wordFrequency[currentWord] += 1;
    }
    else {
      // Set the counter at 1
      wordFrequency[currentWord] = 1;
    }
  }
  console.log(wordFrequency);
  return wordFrequency;
}

wordCount("I yam what I yam and always will be what I yam");
