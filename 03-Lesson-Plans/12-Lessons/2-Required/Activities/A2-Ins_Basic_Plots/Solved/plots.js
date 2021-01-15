// // Part 1
// var trace1 = {
//   x: ["JavaScript", "SQL", "Python", "Java",
//     "C#", "PHP", "C++", "TypeScript", "C"],
//   y: [67.8, 54.4, 41.7, 41.1, 31.0, 26.4, 23.5, 21.2, 20.6],
//   type: "bar"
// };

// var data = [trace1];

// var layout = {
//   title: "Programming Language Popularity"
// };

// Plotly.newPlot("plot", data, layout);


// // Part 2 - Adding attributes
// var trace1 = {
//   x: ["JavaScript", "SQL", "Python", "Java",
//     "C#", "PHP", "C++", "TypeScript", "C"],
//   y: [67.8, 54.4, 41.7, 41.1, 31.0, 26.4, 23.5, 21.2, 20.6],
//   type: "bar"
// };

// var data = [trace1];

// var layout = {
//   title: "Programming Language Popularity",
//   xaxis: { title: "Language"},
//   yaxis: { title: "Popularity"}
// };

// Plotly.newPlot("plot", data, layout);


// // Part 3 - Line Chart
// var trace1 = {
//   x: ["JavaScript", "SQL", "Python", "Java",
//     "C#", "PHP", "C++", "TypeScript", "C"],
//   y: [67.8, 54.4, 41.7, 41.1, 31.0, 26.4, 23.5, 21.2, 20.6],
//   type: "line"
// };

// var data = [trace1];

// var layout = {
//   title:  "Programming Language Popularity",
// };


// Plotly.newPlot("plot", data, layout);

// // Part 4 - Broken Pie Chart
// var trace1 = {
//   x: ["JavaScript", "SQL", "Python", "Java",
//     "C#", "PHP", "C++", "TypeScript", "C"],
//   y: [67.8, 54.4, 41.7, 41.1, 31.0, 26.4, 23.5, 21.2, 20.6],
//   type: "pie"
// };

// var data = [trace1];

// var layout = {
//   title:  "Programming Language Popularity",
// };

// Plotly.newPlot("plot", data, layout);


// Part 5 - Working Pie Chart
var trace1 = {
  labels: ["JavaScript", "SQL", "Python", "Java",
    "C#", "PHP", "C++", "TypeScript", "C"],
  values: [67.8, 54.4, 41.7, 41.1, 31.0, 26.4, 23.5, 21.2, 20.6],
  type: 'pie'
};

var data = [trace1];

var layout = {
  title:  "Programming Language Popularity",
};

Plotly.newPlot("plot", data, layout);

