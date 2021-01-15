// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {
  
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#location-form-input");

  // Get the value property of the input element
  var locationZip = inputElement.property("value");
  let locationType = "Financial Services"

  // Filter results and use + operator to convert zip to a number
  zipTypeFiltered = data.filter(location => location["Source Zipcode"] === +locationZip & location["NAICS Code Description"] === locationType);

  // Then, select the unordered list element by class name
  var list = d3.select(".summary");

  // append stats to the list
  list.append("li").text(`Zip Code: ${locationZip}`);
  list.append("li").text(`Number of Financial Service Comapnies: ${zipTypeFiltered.length}`);
  list.append("hr")
};

// Select the clear button
var clear = d3.select("#clear");
clear.on("click", runClear);
function runClear() {

  // Then, select the unordered list element by class name
  var list = d3.select(".summary");

  // remove any children from the list to
  list.html("");
};