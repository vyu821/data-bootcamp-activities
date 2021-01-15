// @TODO: Complete the Following Steps

// Filter the list of cities to those with a population greater than 1,000,000.
// Calculate the density of bars per square mile (Area).
// Make a bar chart of bar density for cities with a population over 1,000,000

// 1. Use the filter method to create a custom filtering function
//  that returns the cities with a population greater than 1,000,000.

function filterCities(city) {
  return city.Population > 1000000;
}

// 2. Use filter() to pass the function as its argument
var filteredCities = cities.filter(filterCities);

//  Check to make sure your filtered your cities.
console.log(filteredCities);

// 3. Use the map method with the arrow function to return all the filtered city names.
var cities = filteredCities.map(city => city.City);

//  Check your filtered cities
console.log(cities);

// 4. Use the map method with the arrow function to return all the filtered city bar densities.
var barDensity = filteredCities.map(city => city.Bars / city.Area);

//  Check the populations of your filtered cities
console.log(barDensity);


// 5. Create your trace.
var trace = {
  x: cities,
  y: barDensity,
  type: "bar"
};

// 6. Create the data array for our plot
var data = [trace];

// 7. Define our plot layout
var layout = {
  title: "Bar Density in Large Cities",
  xaxis: { title: "City" },
  yaxis: { title: "Bars per Square Mile"}
};

// 8. Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar-plot", data, layout);
