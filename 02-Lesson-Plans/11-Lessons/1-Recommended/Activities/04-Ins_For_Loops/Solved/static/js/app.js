
// Basic for loop incrementing the counter i by one each iteration
for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}

// Creating a function that accepts and loops over a list
function cityLoop(locationList){
  for (let i = 0; i < locationList.length; i++) {
    console.log(locationList[i]);
  }
}

// Execute cityLoop function on data from data.js
cityLoop(data);

// forEach loop over previous data
data.forEach((location) => {
  console.log(`You searched a new location in ${location["City"]} that is located in ${location["Source Zipcode"]}!`);
});

// Creating a function to use with following forEach command
searchLocation = (location) => console.log(`You searched a new location in ${location["City"]} that is located in ${location["Source Zipcode"]}!`);

// Execute searchLocation function on data from data.js using forEach
data.forEach((location) => searchLocation(location));
