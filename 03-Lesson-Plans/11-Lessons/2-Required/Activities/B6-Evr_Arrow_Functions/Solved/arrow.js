// Given a list of temperatures, we can use the filter() method with a function to return
// only the high temperatures
let temperatures = [75, 80, 83, 95, 72, 65];

function greaterThan80(t) {
  return t > 80;
}

let hotTemperatures1 = temperatures.filter(greaterThan80);

// But it's not necessary to use a named function. We can use an an anonymous function to
// accomplish the same task

let hotTemperatures2 = temperatures.filter(function(t) { 
  return t > 80;
})

// An Arrow function is a new concise syntax for a function
// It is also an anonymous function. We only need to specify the arguments of the function
// and an expression for the return value.

let hotTemperatures3 = temperatures.filter(t => t > 80);


// Similarly, if we're filtering a list of objects, we can use an arrow function to filter
// based on a single property of the object in a concise way
const students = [
  { name: "Malcolm", score: 80 },
  { name: "Zoe", score: 85 },
  { name: "Kaylee", score: 99 },
  { name: "Simon", score: 99 },
  { name: "Wash", score: 79 }
];

// let studentsWithAs = students.filter(function(student) { 
//   student.score >= 90;
// })

let studentsWithAs = students.filter(student => student.score >= 90);

// Arrow functions can be used anywhere that an anonymous function would be used, including 
// in a forEach() loop

students.forEach(student => console.log(`${student.name} scored ${student.score}`))