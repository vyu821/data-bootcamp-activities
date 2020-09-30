# Module 12: Virtual Class (Required) Lesson Plan

## Overview

Today's Virtual Class (Required) lesson will review basic plots with Plotly, AJAX calls with d3.json, event handling, and deploying pages to Github Pages. This lesson builds on the weekly materials covered in "Module 12: Belly Button Biodiversity" to cement the topics covered in new contexts.

## Learning Objectives

At the end of the session, learners will be able to:
 
* Create basic plots with Plotly
* Parse JSON data in JSON format
* Use `filter()` and `map()` to restructure data for plotting
* Use event handlers to add interactivity
* Deploy a webpage to Github Pages

## Instructor Prep

<details>
  <summary><strong>Career Services</strong></summary>

  Just a reminder that each week students receive a Career Connection in their course of work that ties to what academic content is being consumed. This Career Connection relates this week's material to a professional setting, encourages students to complete certain Career Services tasks, and provides technical interviewing questions, where applicable, that the student can work through.

  Encourage students to work through this material and if you'd like more information on Career Services, please check out the Career Services [resource page](http://bit.ly/DataVizCS) for Data Analytics and Visualization.

</details>

- - -

## 1. Warm Up & Temperature Check

| Activity Time: 0:10 | Elapsed Time: 0:10 |
|---------------------|--------------------|

<details>
  <summary><strong> 🎉 Everyone Do: Interview Question Warm-Up (5 mins before class, first 5 mins of class)</strong></summary>

Open the [slideshow](https://docs.google.com/presentation/d/1biKjrLDN7mCQrLF0rQwmlyUrQcd4gTJqM3P0qiZ8H3g/edit?usp=sharing) for today's class and begin the weekly presentation with the first slide. The first slide displays an interview question that a student may encounter based on the content of this week's content. 

**This week's question:** What are the advantages and disadvantages of using third-party libraries like Plotly?

Allow the question to be on the screen 5 mins prior to the start of class as students join the session. Allow the class 1 minute at the start of class to review, then you will ask for a student to volunteer their answer to the question. Next, offer the answer or a few approaches you would take for answering the question.

**Possible answers to this week's question:**

* Advantage: third-party libraries extend functionality, often to a very large degree.

* Advantage: third-party libraries save time for us as coders.

* Disadvantage: using a third-party library requires learning their framework and design decisions

* Disadvantage: third-party libraries may break, with no recourse but to wait for them to fix it.

</details>

<details>
  <summary><strong> 📣 Instructor Do: Temperature Check (5 mins)</strong></summary>

Using the [Zoom Polling](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meetings) feature or a [Poll Everywhere](http://www.polleverywhere.com), launch a poll of the class to identify areas that they would like to review from the week's asynchronous content. 

**Poll Text:**

*Select all of the topics that you feel prepared to apply outside of the class from this week's lesson:*

* Creating Plotly charts
* Charting Multiple Traces with Plotly
* JavaScript map() and filter()
* Javascript sort() and slice()
* Using D3 to Retrieve Data
* Preventing CORS Errors
* Plotly Event Handling
* Creating Dynamic Plots with Plotly

Based on the results of the poll, advance to the correct slide for a review of the topics with the lowest scores. Choose 2 topics at minimum to review, or more as time permits to review.

</details>

## 2. Adaptive Learning Blocks

| Activity Time:  1:00 |  Elapsed Time: 1:10  |
|----------------------|----------------------|

>***Choose:***
>
>* Two 30-min Blocks
>
>***then proceed to Break.***

### Creating Plotly Charts (30 mins)

<details>
  <summary><strong> ✏️ Student Do: A Flicker of the Eye (15 mins)</strong></summary>

* **Files:**

  * [README.md](Activities/A1-Stu_First_Chart/README.md)
  * [Unsolved](Activities/A1-Stu_First_Chart/Unsolved)

* In this activity, students will create a Plotly bar chart that shows the relationship between eye color and the frequency of eye flickers.

</details>

<details>
  <summary><strong> ⭐ Review: A Flicker of the Eye (5 mins)</strong></summary>

* Open [plots.js](Activities/A1-Stu_First_Chart/Solved/plots.js). Provide a quick overview of the activity:

  * Much of the activity is straightforward, with one quirk: we have multiple data points for each eye color, but Plotly does not plot them all. It does not even aggregate them. Instead, it plots only the last value listed for each eye color.

  * For example, for "Brown," the final flicker value listed in the CSV file is 24.5.

* Explain that a more meaningful approach to plotting may be to take the average of each eye color.

</details>

<details>
  <summary><strong> 📣 Instructor Do: Basic Plots with Plotly (10 mins) (Optional)</strong></summary>

* **File:** [Solved](Activities/A2-Ins_Basic_Plots/Solved)

* In this activity, you will demonstrate the basic plots possible with the Plotly library.

* Open `index.html` in your browser:

  ![Images/bar1.png](Images/bar1.png)

  * This is a bar chart plotting the popularity of various programming languages, according to [StackOverflow](https://insights.stackoverflow.com/survey/2019#technology).

* Now open `plots.js`:

```javascript
var trace1 = {
  x: ["JavaScript", "SQL", "Python", "Java",
    "C#", "PHP", "C++", "TypeScript", "C"],
  y: [67.8, 54.4, 41.7, 41.1, 31.0, 26.4, 23.5, 21.2, 20.6],
  type: "bar"
};

var data = [trace1];

var layout = {
  title: "Programming Language Popularity"
};

Plotly.newPlot("plot", data, layout);
```

* Explain that in Plotly, the term `trace` refers to an object that contains (1) data to be plotted, and (2) specifications for plotting.

* Ask the class what `trace1` consists of:

  * Data for the x-axis: labels for each language, presented as a key-value pair of `x` and an array of languages.

  * Data for the y-axis, again organized as a key-value pair.

  * A specification for the type of the chart.

* Point out that in `var data = [trace1];`, `trace1` is enclosed in an array.

  * Including multiple traces in the array will allow visualizing multiple traces in the same chart, as we will see later.

* Then point out that in the last line of the script, we use the `Plotly.newPlot()` method to plot our chart. It takes three arguments:

  * The first, `"plot"`, refers to the `id` of the `div` where the plot will be displayed.

  ```html
  <body>
    <div id="plot"></div>
    <script src="plots.js"></script>
  </body>
  ```

  * The second argument, `data`, refers to the trace.

  * The last argument, `layout`, is optional and refers in this case to the title displayed in the chart.

* Next, comment out the code from Part 1 and uncomment the code from Part 2 in `plots.js`. Reload `index.html`. Bring to students' attention that we've now added labels for x- and y-axes.

  ![Images/bar4.png](Images/bar4.png)

* Open the JavaScript code and explain that we have simply added `xaxis` and `yaxis` specifications to the `layout` object:

  ```javascript
  var trace1 = {
    x: ["JavaScript", "SQL", "Python", "Java",
        "C#", "PHP", "C++", "TypeScript", "C"],
    y: [67.8, 54.4, 41.7, 41.1, 31.0, 26.4, 23.5, 21.2, 20.6],
    type: "bar"
  };

  var data = [trace1];

  var layout = {
    title: "Programming Language Popularity",
    xaxis: { title: "Language"},
    yaxis: { title: "Popularity"}
  };

  Plotly.newPlot("plot", data, layout);
  ```

* Next, comment out the code from Part 2 and uncomment the code from Part 3. Load `index.html` again:

  ![Images/bar6.png](Images/bar6.png)

* Open the code file and explain that in the code, the only change to take place was the `type: "line"`, in contrast to `type: "bar"` from the bar chart.

```javascript
var trace1 = {
  x: ["JavaScript", "SQL", "Python", "Java",
    "C#", "PHP", "C++", "TypeScript", "C"],
  y: [67.8, 54.4, 41.7, 41.1, 31.0, 26.4, 23.5, 21.2, 20.6],
  type: "line"
};
```

#### Optional

* Next, ask the class whether we can change the specification to `type: "pie"` to create a pie chart. (The answer is no; doing so will lead to a blank chart.)

* Uncomment the code in Part 5 and reload the page. We get a pie chart!

  ![Images/bar8.png](Images/bar8.png)

* Slack out the link to the [pie chart documentation](https://plot.ly/javascript/pie-charts/) and ask the class how they might fix the broken pie chart.

* Show the code to the class:

```javascript
var trace1 = {
  labels: ["JavaScript", "SQL", "Python", "Java",
    "C#", "PHP", "C++", "TypeScript", "C"],
  values: [67.8, 54.4, 41.7, 41.1, 31.0, 26.4, 23.5, 21.2, 20.6],
  type: 'pie'
};
```

  * In `trace1`, instead of `x` and `y`, we use the keys `labels` and `values`.

  * We also specify the type of chart as `'pie'`.

* Answer any questions before moving on.

</details>

<sub>[Having issues with this section? Report a bug!](https://bit.ly/2yKdT0T)</sub>

### Charting Multiple Traces with Plotly (30 mins)

<details>
  <summary><strong> ✏️ Student Do: Multiple Traces (15 mins)</strong></summary>

* **Files**

  * [Unsolved](Activities/A3-Stu_Multi_Trace/Unsolved)

  * [README.md](Activities/A3-Stu_Multi_Trace/README.md)

* In this activity, students will use functional programming techniques to create a Plotly chart with multiple traces.

</details>

<details>
  <summary><strong> ⭐ Review: Multiple Traces Activity (5 mins)</strong></summary>

* **Files:**

  * [plots.js](Activities/A3-Stu_Multi_Trace/Solved/plots.js)

  * [index.html](Activities/A3-Stu_Multi_Trace/Solved/index.html)

* Open the [solution](Activities/A3-Stu_Multi_Trace/Solved/plots.js). Explain that this was a fairly challenging activity, as it requires using functional programming techniques.

* Explain that for the first trace, which deals with Greek gods, defining the x-axis points can be accomplished by using `map()` to return the `pair` value from the dataset.

```javascript
// Trace1 for the Greek Data
var trace1 = {
  x: data.map(row => row.pair),
  y: data.map(row => row.greekSearchResults),
  text: data.map(row => row.greekName),
  name: "Greek",
  type: "bar"
};
```

  * Here, `row => row.pair` is essentially a shortcut for writing `function (row) {return row.pair;}`.

  * `map()` is used to transform each row in the dataset to its `pair` attribute.

  * `x` becomes an array of `row.pair` values.

* Explain that the second trace deals with Roman gods. Everything here is analogous to trace 1:

```javascript
// Trace 2 for the Roman Data
var trace2 = {
  x: data.map(row => row.pair),
  y: data.map(row => row.romanSearchResults),
  text: data.map(row => row.romanName),
  name: "Roman",
  type: "bar"
};
```

* Answer any questions before moving on.

</details>

<details>
  <summary><strong> 📣 Instructor Do: Plotting Multiple Traces (10 mins)</strong></summary>

* **File:** [index.html](Activities/A4-Ins_Multi_Trace/Solved/index.html)

* This section is a quick demonstration of adding multiple traces to a Plotly chart.

* Open [index.html](Activities/A4-Ins_Multi_Trace/Solved/index.html) in your browser:

  ![Images/multitrace1.png](Images/multitrace1.png)

* Explain that there are two line plots of randomly generated numbers. (Because they're generated randomly, the numbers may differ from those in this screenshot).

* Open [plots.js](Activities/A4-Ins_Multi_Trace/Solved/plots.js). If time allows, discuss the random generator function:

  ```js
  function randomNumbersBetween0and9(n) {
    var randomNumberArray = [];
    for (var i = 0; i < n; i++) {
      var randomNumber = Math.floor(Math.random() * 10);
      randomNumberArray.push(randomNumber);
    }
    return randomNumberArray;
  }
  ```

  * The function takes as its argument a number `n` that will determine the size of the array.

  * First, an empty array is created.

  * During each iteration of a for loop, a random number between 0 and 1, inclusive, is generated and rounded down to the nearest integer with `Math.floor()`. Then it is multiplied by 10 to result in random integers between 0 and 10. This number then appends to the array of random numbers.

* Walk through the rest of the code:

```js
// Create our first trace
var trace1 = {
  x: [1, 2, 3, 4, 5],
  y: randomNumbersBetween0and9(5),
  type: "scatter"
};

// Create our second trace
var trace2 = {
  x: [1, 2, 3, 4, 5],
  y: randomNumbersBetween0and9(5),
  type: "scatter"
};

// The data array consists of both traces
var data = [trace1, trace2];

// Note that we omitted the layout object this time
// This will use default parameters for the layout
Plotly.newPlot("plot", data);
```

  * Each of the two traces plots 5 randomly generated integers against the same x-axis, an array.

  * Both `trace1` and `trace2` are assigned to an array called `data` and charted as a scatterplot.

  * In the last line of the code, we see two arguments: `"plot"` and `data`. A possible third argument would have been used to specify the layout but is omitted. The layout, therefore, follows Plotly's default settings.

</details>

<sub>[Having issues with this section? Report a bug!](https://bit.ly/2Lw3dW5)</sub>

### JavaScript map() and filter() (30 mins)

<details>
  <summary><strong> 🎉 Everyone Do: Map (10 mins)</strong></summary>

* **Files:**

  * [map.js](Activities/B1-Evr_Map/Solved/static/js/map.js)

  * [index.html](Activities/B1-Evr_Map/Solved/index.html)

* This activity will cover the use of the `map` function. Feel free to demonstrate the code, or have the class code along with you, whichever you deem more appropriate for your class.

* This is an important activity as it introduces a powerful tool within the JavaScript arsenal, functional programming.

* Begin by walking through the first example:

  ```javascript
  var theStagesOfJS = ["confidence", "sadness", "confusion", "realization", "debugging", "satisfaction"];

  var mapSimpleArray = theStagesOfJS.map(function(item) {
    return item;
  });

  console.log(mapSimpleArray);
  ```

  * In this example, the `.map` method created a new array from the existing array.

* Walk through the next code example to demonstrate using `map` to provide an index position of the array.

  ```javascript
  var mapArrayWithIndex = theStagesOfJS.map(function(item, index) {
    return `Stage ${index}: ${item}`;
  });

  console.log(mapArrayWithIndex);
  ```

  * This is similar to `enumerate` in Python, where both the item and its index position in passed to the function.

  * Note that the original array is unchanged.

  ```javascript
  console.log(theStagesOfJS)
  // The original array is unchanged
  ```

* Proceed to the next code example and demonstrate how to map over an array of objects.

  ```javascript
  var students = [
    {name: "Malcolm", score: 80},
    {name: "Zoe", score: 85},
    {name: "Kaylee", score: 99},
    {name: "Simon", score: 99},
    {name: "Wash", score: 79}
  ];

  var names = students.map(function(student) {
    return student.name;
  });

  var scores = students.map(function(student) {
    return student.score;
  });
  ```

  * With `map`, two new arrays were created from the original: one holding student names, and the other holding student scores.

  * When the original array is called, it remains unchanged.

* Next, walk through the following code example and examine the differences between `map` and `forEach`.

  * Remind students that `forEach` executes a function on each element in an array.

  * Explain that `map` creates a new array with the results of calling a function on each element in the original array.

  * Demonstrate how `forEach` affects the same `theStagesOfJS` array from earlier when saved as a new variable:

  ```javascript
  // Save as a new variable
  var forEachStages = theStagesOfJS.forEach(function(each, index) {
    // the return of forEach is ignored
    return `Stage ${index + 1}: ${each}`;
  });

  // undefined
  console.log(forEachStages);

  // unaltered
  console.log(theStagesOfJS);
  ```

  * Note that the new variable is undefined because `forEach` does not automatically create new arrays like `map`.

  * Remind students that when `map` was used, an entirely new array was created.

* Next, walk through the code included in Part B.

  ```javascript
  theStagesOfJS.forEach(function(each, index) {
    theStagesOfJS[index] = `Stage ${index + 1}: ${each}`;
  });

  console.log(theStagesOfJS);
  ```

  * Point out that instead of creating a new variable, `forEach` has been used directly on the array.

  * This alters, or mutates, the original array.

* Time permitting, present students with a challenge activity.

* Slack out the following starter code and encourage them to follow the prompts:

  ```javascript
  var princesses = [
    { name: "Rapunzel", age: 18 },
    { name: "Mulan", age: 16 },
    { name: "Anna", age: 18 },
    { name: "Moana", age: 16 }
  ];

  // Log the name of each princess, followed by a colon, followed by their age
  // Hint: use forEach


  // Create an array of just the names from the princesses array
  // Hint: use map
  ```

* Let the class know that they have 5 minutes to complete this activity.

* After the 5 minutes are up, review the following code:

  ```javascript
  // Log the name of each princess, follow by a colon, followed by their age
  // forEach: executes a provided function once for each array element
  princesses.forEach(function (princess) {
    console.log(`${princess.name}: ${princess.age}`)
  });

  // Create an array of just the names from the princesses array
  // Map: creates a new array with the results of calling a provided function on every element in the calling array
  var names = princesses.map(function(princess) {
    return princess.name;
  });

  console.log(names);
  ```

* Make sure to explain how each method interacts with the array to provide the desired results.

* Slack out the following items for students to use as reference as they progress through the week:

  * [map.js](Activities/B1-Evr_Map/Solved/static/js/map.js)

  * [Map vs forEach](https://codeburst.io/javascript-map-vs-foreach-f38111822c0f)

</details>

<details>
  <summary><strong> ✏️ Student Do: Bar Densities (15 mins)</strong></summary>

* **Files:**

  * [README.md](Activities/B2-Stu_Filter_Warmup/README.md)

  * [plot.js](Activities/B2-Stu_Filter_Warmup/Unsolved/plot.js)

  * [data.js](Activities/B2-Stu_Filter_Warmup/Unsolved/data.js)

* In this activity, students will use functional programming techniques to create plots for cities with the fastest population growth.

</details>

<details>
  <summary><strong> ⭐ Review: Bar Densities (5 mins)</strong></summary>

* **File:** [plot.js](Activities/B2-Stu_Filter_Warmup/Solved/plot.js)

* Explain to students that this was a somewhat challenging activity, as it requires using functional programming techniques.

* Open the [solution](Activities/B2-Stu_Filter_Warmup/Solved/plot.js).

* Explain that the `filterCities` function is used to filter values greater than `1000000`:

```javascript
function filterCities(city) {
  return city.Population > 1000000;
}

var filteredCities = cities.filter(filterCities);

console.log(filteredCities);
```

* Explain that `map` is used with an arrow function to return the city and population for all of the filtered cities.

```javascript
var cities = filteredCities.map(city => city.City);

console.log(cities);
```

```javascript
var barDensity = filteredCities.map(city => city.Bars / city.Area);

console.log(barDensity);
```

  * `city => city.City` is a shortcut to `function(city) {return city.City;}`

  * `city => city.Bars / city.Area` is a shortcut to `function(city) {return city.Bars / city.Area;}`

* Next, explain how `trace` is structured:

    ```javascript
    var trace = {
      x: cities,
      y: barDensity,
      type: "bar"
    };
    ```

  * `x` becomes the cities array of `city.City` values, and `y` becomes the population array of bar density values.

  * The type of chart is specified with `type: "bar"`.

* The rest of the code should be familiar to students, but answer any questions before moving on.

    ```javascript
    var data = [trace];

    var layout = {
      title: "Bar Density in Large Cities",
      xaxis: { title: "City" },
      yaxis: { title: "Bars per Square Mile"}
    };

    Plotly.newPlot("bar-plot", data, layout);
    ```

* Answer any questions before moving on.

</details>

<sub>[Having issues with this section? Report a bug!](https://bit.ly/2zDxPTe)</sub>

### Javascript sort() and slice() (30 mins)

<details>
  <summary><strong> ✏️ Student Do: Slice, Dice, and Sort (0:15)</strong></summary>

* **File:** [Unsolved/](Activities/B4-Stu_Sort_Slice/Unsolved/)

* **Instructions:** [README.md](Activities/B4-Stu_Sort_Slice/README.md)

* In this activity, students will sort, slice, and reverse an array to build a horizontal bar chart.

* The **Practice** will use [sliceSort.js](Activities/B4-Stu_Sort_Slice/Unsolved/sliceSort.js)

* The **Horizontal Bar Chart** will use [plots.js](Activities/B4-Stu_Sort_Slice/Unsolved/plots.js)

</details>

<details>
  <summary><strong> ⭐ Review: Slice, Dice, and Sort (0:05)</strong></summary>

* **File:** [06-Stu_Sort_Slice/Solved](Activities/B4-Stu_Sort_Slice/Solved/)

* Open up `sliceSort.js`. First, explain the `sort()` method:

  ```js
  var sorted = numArray.sort(function sortFunction(a, b) {
      return b - a;
  });
  ```

  * The `sort()` method calls another function as an argument.

  * The custom `sortFunction()` here compares two numbers at a time and returns `b - a`.

  * If the custom function returns a positive number, it _reverses_ the order of the two numbers. That is, if `a` is 1, and `b` is 100, `b - a` is a positive number, so the order is reversed.

* Next, explain sorting with an arrow function:

  ```js
  var sortedByArrow = numArray.sort((a, b) => b - a);
  ```

  * Instead of a named custom function, the syntax here is more straightforward and elegant.

  * It still takes `a` and `b` as its arguments and returns `b - a` to sort an array in descending order.

* Explain that `reverse()` reverses the order of an array.

  ```js
  var reversedArray = sortedByArrow.reverse();
  ```

* Explain that slicing from index position 0 of an array, up to but not including index position 5, yields the first 5 elements of an array:

  ```js
  var sliced = sortedAscending.slice(0, 5);
  ```

* Now move on to the chart. Open `index.html` and inform students that the chart is horizontal, sorted, and sliced.

* Next, open `data.js` and point out that the `data` is an array of objects. The objects were sorted by using the `greekSearchResults` property.

  ```js
  var sortedByGreekSearch = data.sort((a, b) => b.greekSearchResults - a.greekSearchResults);
  ```

* Explain that `slice()` and `reverse()` are used to select the first 10 elements of the sorted dataset, and then reverse their order:

  ```js
  slicedData = sortedByGreekSearch.slice(0, 10);
  reversedData = slicedData.reverse();
  ```

  * The array was reversed to accommodate Plotly's plotting conventions: it builds a horizontal bar chart from bottom to top.

  * The array can be sorted in ascending order instead.

* Point out that `orientation: h` in `trace1` creates a horizontal bar chart.

  **Note:** Remind students that they had to consult the Plotly documentation for this activity, and that Plotly's documentation is straightforward to use.

* Explain that we can set the size of the margins in the `layout` object.

* Answer any questions before moving on.

</details>

<details>
  <summary><strong> 📣 Instructor Do: Sorting and Slicing (0:10)</strong></summary>

* **Files:**

  * [sorting.js](Activities/B5-Ins_Sort_Slice/Solved/sorting.js)

  * [slicing.js](Activities/B5-Ins_Sort_Slice/Solved/slicing.js)

  * [index.html](Activities/B5-Ins_Sort_Slice/Solved/index.html)

* **Note:** It is highly recommended that you live code this activity.

* Open `sorting.js` and use `index.html` to display the results. Cover the following points:

  * When working with data, it will often be necessary to sort the data, either in ascending or descending order.

  * To sort an array in JavaScript, we call its `sort()` method.

  * When we call `sort`, we must pass it a callback function specifying _how_ to sort.

  ```js
  // Sorts ascending
  var sortedAscending = [3, 2, 1].sort(function compareFunction(firstNum, secondNum) {
  // resulting order is (1, 2, 3)
  return firstNum - secondNum;
  });
  ```

* Explain that `compareFunction` compares two values at a time.

  * In this example, `compareFunction` first compares 1 and 2. The arguments `firstNum` and `secondNum` are arbitrary names, but there must be two arguments.

  * This function returns `firstNum - secondNum`. In this case, since `firstNum`, 3, is greater than `secondNum`, 2, it returns a positive number.

  * If the compare function returns a _positive_ number for a given pair of numbers `[firstNum, secondNum]`, it will put them in the _reverse order_ in the final array: `[secondNum, firstNum]`.

  * Likewise, if the compare function returns a _negative_ number for a given pair `[firstNum, secondNum]`, it will preserve their order in the output array: `[firstNum, secondNum]`.

  * The `compareFunction` continues to compare two values in the array at a time.

* Emphasize that `sort` modifies the array it's called on _in place_. Also point out that it is often safer to sort a _copy_ of an array rather than the input itself.

* Open the `index.html` to display the output.

* Next, discuss the `slice()` method. Open `slicing.js` and explain the code:

  ```js
  var names = ["Jane", "John", "Jimbo", "Jedediah"];
  var left = names.slice(0, 2);
  ```

* Explain that the `slice()` method is similar to slicing a list in Python: it allows cutting a subsection of a JavaScript array.

  * `slice()` produces _shallow_ copies, meaning that it does not affect the original array.

  * `slice()` takes two arguments. The first is the index position of the subsection. The second is the index position, up to which the slicing will take place.

  * In this case, slicing begins at index position 0 and continues up to, but not including, index position 2.

* Finally, explain the `reverse()` method: It simply reverses the order of an array.

</details>

<sub>[Having issues with this section? Report a bug!](https://bit.ly/2WtY6fy)</sub>

### Using D3 to Retrieve Data (30 mins)

<details>
  <summary><strong> 📣 Instructor Do: D3.json (0:10)</strong></summary>

* **Files:**

  * [index.html](Activities/C1-Ins_D3_JSON/Solved/index.html)

  * [plots.js](Activities/C1-Ins_D3_JSON/Solved/demo.js)

* Explain that D3.js provides a function to fetch JSON data from APIs on the web.

* Visit the [UK Police API](https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2017-01) to show the JSON data.

* Live code or walk through the demo and highlight the following:

  ```javascript
  const url = "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2017-01";

  d3.json(url).then(function(data) {
      console.log(data);
  });
  ```

  * `d3.json` is very similar to Python `requests.get`.

  * `d3.json` returns a JavaScript promise: it places an API call to the `url`; once it's available, the callback function prints it to the console.

* Use the second example to explain the concept of promises in JavaScript:

  ```javascript
  const dataPromise = d3.json(url);
  console.log("Data Promise: ", dataPromise);
  ```

  * The data from a promise is only available inside of the `.then` function.

  * The `dataPromise` variable is assigned a promise of future data, but the data must be accessed inside of the `.then` function.

</details>

<details>
  <summary><strong> ✏️ Student Do: Weather Forecast Time Series Activity (0:15)</strong></summary>

* **Files:**

  * [index.html](Activities/C2-Stu_Forecast/Unsolved/index.html)

  * [plots.js](Activities/C2-Stu_Forecast/Unsolved/plots.js)

* **Instructions:**

  * [README.md](Activities/C2-Stu_Forecast/README.md)

* In this activity, students will create a time series chart of temperature forecasts from OpenWeatherMap. If students do not have an API key from OpenWeatherMap, they must sign up for their own key in order to complete this activity.

</details>

<details>
  <summary><strong> ⭐ Review: Weather Forecast Time Series (0:05)</strong></summary>

* **Files:**

  * [index.html](Activities/C2-Stu_Forecast/Solved/index.html)

  * [plots.js](Activities/C2-Stu_Forecast/Solved/plots.js)

* Open the solved `index.html` in the browser to display the chart.

* Open the solved `plots.js` in your code editor.

* Point out that the solution to this activity follows this pattern:

  * Retrieve data from OpenWeatherMap via `d3.json`.

  * Unpack data from the response data.

  * Create and render `trace`, `data`, and `layout` objects with the unpacked data.

* Explain that we use [template strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) to build the base `url` that we use for requests.

```javascript
let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`
```


* Point out that the rest of the code is familiar from our previous plots. Simply set the `x` and `y` keys in our `trace1` object, which we use to create the `data` array we pass to Plotly.

```javascript
  var trace1 = {
    type: "scatter",
    mode: "lines",
    x: times,
    y: temps,
    line: {
      color: "#17BECF",
    }
  };
```

</details>

<sub>[Having issues with this section? Report a bug!](https://bit.ly/3dFtXzF)</sub>

### Preventing CORS Errors (30 mins)

<details>
  <summary><strong> 📣 Instructor Do: Using the Python HTTP Server (10 mins)</strong></summary>

* **Files:**

  * [Solved/](Activities/C3-Ins_Python_HTTP_Server/Solved/)

  * [CORS.md](Activities/C3-Ins_Python_HTTP_Server/CORS.md)

* Begin by explaining that we can also read local JSON files instead of using APIs. However, we need to use a web server to make the file available to the webpage.

* Explain servers at a high level:

  * A server is a program or device that performs actions such as processing and sharing data.

  * For example, when a user logs in on a website, the server receives the user's information, compares it against information in its database, and sends it back to the user.

  * This is called a **request-response model**. The user, also known as the client, sends a request to the webpage server, which in return sends the requested data in response.

* Open `index.html` in a browser and open the console. Point out the error and explain:

  * This is a **CORS**, or **Cross-Origin Resource Sharing**, error.

    ![cors error](Images/cors_error.png)

* Explain why a browser can't read the JSON file directly:

  * Browsers, for security reasons, heavily restrict reading from, and writing to, local files.

  * If access to local files were allowed, remote sites would be allowed to read and manipulate your private data. Or simply opening a local file with the browser could trigger a malicious script.

  * Running a static server, `python -m http.server` in this case, allows us to skirt this restriction.

* Explain that Python’s HTTP server provides a web address for both the file and the HTML page and avoids security issues.

  * Students who are curious about CORS can read the [included guide](Activities/C3-Ins_Python_HTTP_Server/CORS.md) for more information.

* From the [Solved](Activities/C3-Ins_Python_HTTP_Server/Solved) directory, run `python -m http.server` in your console. Navigate to `localhost:8000` to show that files are being served from the server, and no CORS error is returned.

* Emphasize that `index.html` must be at the directory where `python -m http.server` is run.

* Open `index.js` and explain:

  * D3 sends a request to the route `data/data.json`.

  ```js
  d3.json("data/data.json").then((data) => {}
  ```

  * Previously, the script returned a CORS error because it attempted to access the local JSON data without a server.

  * With a server, the data is retrieved from its own URL.

* Navigate to `localhost:8000/data/data.json` to view the JSON data that is requested.

  ![data json](Images/data_json.png)

* Answer any questions before moving on.

</details>

<details>
  <summary><strong> 🎉 Everyone Do: An Eventful Click (0:10)</strong></summary>

This activity is a brief refresher on event handling. In it, everyone will print the value of a dropdown menu item when it is selected.

* **File:** [Unsolved](Activities/C4-Evr-Events_Review/Unsolved)

* **Instructions:** [README.md](Activities/C4-Evr-Events_Review/README.md)

* Open the console for `index.html` and demonstrate that changing the dropdown menu item prints two items to the console:

  * The `id` of the dropdown menu element

  * `option1` or `option2`, depending on which item is selected

* Open `index.html` in an editor and explain the code:

  ```html
    <select id="selectOption">
      <option value="option1">Menu Option 1</option>
      <option value="option2">Menu Option 2</option>
  </select>
  ```

  * The dropdown menu is created with `<select>`.

  * Each dropdown menu item is created with an `<option>` with a `value` attribute.

  * The `id` of the dropdown menu is `selectOption`.

* Next, open `script.js` and walk through the code:

  ```js
  d3.selectAll("body").on("change", updatePage);

  function updatePage() {
      var dropdownMenu = d3.selectAll("#selectOption").node();
      var dropdownMenuID = dropdownMenu.id;
      var selectedOption = dropdownMenu.value;
  }
  ```

  * D3 is used to select the document `body` and create an event handler that calls `updatePage()` when a change takes place.

  * The dropdown menu's `id` and `value` attributes are assigned to variables, and then logged to the console.

* Summarize the major points of this demo:

  * A dropdown menu is created in the HTML document.

  * A D3 event handler calls a custom function to print the dropdown menu's attributes to the console.

* Answer any questions before moving on.

</details>

<details>
  <summary><strong> 📣 Instructor Do: Dropdown Events and Plotly (0:10)</strong></summary>

* **File:** [Solved/](Activities/C5-Ins_Dropdown_Events/Solved/)

* In this section, you will demonstrate how to use events on the DOM to modify plots.

* Open `index.html` in the browser and use the dropdown menu to toggle between two datasets:

  ![Images/events01.png](Images/events01.png)

* Note that selecting a different dataset will re-render the plot on the screen.

* Open `plots.js` and explain the code:

  * By calling the `init()` function, a default dataset is displayed when the page is rendered:

  ```js
  function init() {
  data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16] }];
  var LINE = d3.selectAll("#plot").node();
  Plotly.newPlot(LINE, data);
  }
  ```

  * The `init()` function is called at the end of the script file.

  * Otherwise, everything in this function should be familiar. It renders a simple line chart in Plotly.

* Explain event handling. When a change takes place to the document body, the `updatePlotly()` function is called.

  ```js
  d3.selectAll("body").on("#selDataset", updatePlotly);
  ```

* Explain `function updatePlotly()`:

  ```js
  var dropdownMenu = d3.select("#selDataset");
  var dataset = dropdownMenu.property("value");
  ```

  * The dropdown menu is selected using D3, and then assigned to a variable, `dropdownMenu`.

  * The value of the dropdown menu item is also assigned to a variable, `dataset`.

* Explain that, after initializing `x` and `y` as empty arrays, their values are selected depending on the `value` of the dropdown menu selection:

  ```js
  var x = [];
  var y = [];

  if (dataset == 'dataset1') {
      x = [1, 2, 3, 4, 5];
      y = [1, 2, 4, 8, 16];
  }

  if (dataset == 'dataset2') {
      x = [10, 20, 30, 40, 50];
      y = [1, 10, 100, 1000, 10000];
  }
  ```

* Next, explain that when a change takes place in the DOM, instead of drawing a new plot in Plotly, the existing one is restyled:

  ```js
  Plotly.restyle("plot", "x", [x]);
  Plotly.restyle("plot", "y", [y]);
  ```

* Send students the link to the [Plotly documentation]([https://plot.ly/javascript/plotlyjs-function-reference/#plotlyrestyle](https://plot.ly/javascript/plotlyjs-function-reference/#plotlyrestyle)) and give your students a minute or two to review it.

  * According to the documentation, restyling an existing plot is faster than drawing a new one.

  * In this code, only the `x` and `y` arrays are modified.

* Summarize the key points of this example:

  * A default plot is rendered on the page.

  * A change takes place in the DOM when a dropdown menu item is selected.

  * A function is triggered with the DOM element's value as its argument.

  * The function uses Plotly's `restyle()` method to modify an existing plot.

* Answer any questions before moving on.

</details>

<sub>[Having issues with this section? Report a bug!](https://bit.ly/2T30pUE)</sub>

### Plotly Event Handling (30 mins)

<details>
  <summary><strong> ✏️ Student Do: A Musical Pie (0:20)</strong></summary>

In this activity, students will enhance their event handling chops by creating a dynamic pie chart using Plotly. When a country is selected from the dropdown menu, its dataset will be displayed in the browser.

* **File:** [Unsolved](Activities/C6-Stu-Event_Final/Unsolved)

* **Instructions:** [README.md](Activities/C6-Stu-Event_Final/README.md)

</details>

<details>
  <summary><strong> ⭐ Review: A Musical Pie (0:10)</strong></summary>

* **File:** [Solved](Activities/C6-Stu-Event_Final/Solved)

* Open `index.html` in a browser and show the finished product:

  ![Images/pie01.png](Images/pie01.png)

* Open `index.html` with a code editor and explain the code:

  ```html
    <select id="selDataset">
        <option value="us">United States</option>
        <option value="uk">UK</option>
        <option value="canada">Canada</option>
    </select>
  ```

  * `<select>` and `<option>` tags are used to create a dropdown menu.

  * The `value` attribute of each `option` specifies the country whose data will be selected and visualized.

* Open `data.js` and explain the structure of the dataset:

  ```js
  var data = {
  us: {
      Spotify: 19,
      Soundcloud: 5,
      Pandora: 8,
      Itunes: 30
  },
  ```

  * The objects are nested within an object by country.

  * From these objects, arrays of subscriber numbers and music provider labels will need to be created for Plotly.

* Open `plots.js` and explain the creation of the needed arrays:

  ```js
  var us = Object.values(data.us);
  var uk = Object.values(data.uk);
  var canada = Object.values(data.canada);
  ```

  * `Objects.values()` are used to create arrays of subscriber numbers by country.

  * Because the objects are nested, it is possible to use the dot notation to specify the country, e.g., `data.us`.

  ```js
  var labels = Object.keys(data.us);
  ```

  * Similarly, an array of music provider labels is created with `Object.keys()`.

* Explain that `init()` displays the default U.S. pie chart:

  ```js
  function init() {
    var data = [{
      values: us,
      labels: labels,
      type: "pie"
    }];

    var layout = {
      height: 600,
      width: 800
    };

    Plotly.newPlot("pie", data, layout);
  }

  init();
  ```

* Explain that one change of the dropdown menu, `getData()`, is called:

  ```js
  d3.selectAll("#selDataset").on("change", getData);
  function getData() {
      var dropdownMenu = d3.select("#selDataset");
      var dataset = dropdownMenu.property("value");
      var data = [];

      if (dataset == 'us') {
        data = us;
      }
      else if (dataset == 'uk') {
        data = uk;
      }
      else if (dataset == 'canada') {
        data = canada;
      }
      updatePlotly(data);
  }
  ```

  * D3 is used to assign the dropdown menu and the dropdown menu selection to variables.

  * An empty array is initialized.

  * Then, the data array that matches the country is selected and passed on as an argument of the `updatePlotly()` function.

</details>

<sub>[Having issues with this section? Report a bug!](https://bit.ly/2WQqJmg)</sub>

### Creating Dynamic Plots with Plotly (30 mins)

<details>
  <summary><strong> 🎉 Everyone Do: Dynamically Selected City Forecasts (30 mins)</strong></summary>

* **Files:**

  * [index.html](Activities/C7-Evr_Weather_Dynamic/Solved/index.html)

  * [plots.js](Activities/C7-Evr_Weather_Dynamic/Solved/plots.js)

* Explain to the students that this next activity we will all code together to design a dynamic plot that reads the city from the user form.

**Note:** Remember to replace the API key with your own. Remind students when going through this example to do the same

* Demonstrate the solved `index.html` in the browser.

* Open the solved `plots.js` in your text editor.

* Explain the overall structure of the solution:

  * `d3.select("#submit").on("click", handleSubmit);`

  * First, we attach a click handler to the `#submit` button, configuring it to execute `handleSubmit` whenever a user clicks on it.

* Explain the code in `handleSubmit()`.

  ```js
    function handleSubmit() {
    var city = d3.select("#cityInput").node().value;
    d3.select("#cityInput").node().value = "";
    buildPlot(city);
    }
  }
  ```

  When called, it:

  * Collects the user's selected city from the form.

  * Clears the form by resetting the input's `value` attribute to the empty string.

  * Calls `buildPlot` with the user's selected `city` name.

* Open the console and explain the data that needs to be extracted:

  ![Images/dynamic03.png](Images/dynamic03.png)

  The values of interest are those listing the times and temperatures.

* Explain that to create arrays of the times and temperatures, `map()` can be used on the JSON response:

  ```js
    var times = data.list.map(x => x.dt_txt);
    var temps = data.list.map(x => x.main.temp);
  ```

  * `map()` can be used to extract the item at a given position from each array.

</details>

<sub>[Having issues with this section? Report a bug!](https://bit.ly/2WRMZfx)</sub>

- - -

## 3. Break

| Break Time:  0:05 |  Elapsed Time: 1:15  |
|----------------------|----------------------|

- - -

## 4. Deployment to Github Pages (45 mins)

| Activity Time:  0:45 |  Elapsed Time: 2:00  |
|----------------------|----------------------|

<details>
  <summary><strong> 📣 Instructor Do: Deployment to GitHub Pages (15 mins)</strong></summary>

* **File:** [Solved](Activities/C8-Ins_Github_Pages/Solved)

* Inform students that they will deploy this week's homework to GitHub Pages.

  * The data for the homework will be in a JSON file.

  * Students will use the `d3.json()` method to fetch data from the JSON file and visualize it.

  * They will need to upload the JSON file to GitHub as well as the HTML and JavaScript script files.

* Explain the benefits of deploying a Plotly visualization with a data file.

  * It makes a data visualization available to the public that is much more visually appealing than a published Jupyter Notebook.

  * The ability to read in data from local files means that data sources aren't limited to placing API calls.

* Navigate to the Solved directory and show the Plotly project structure:

  * The data is contained in a JSON file.

  ![Images/github07.png](Images/github07.png)

  * Because `data.json` is an external file, the data in it cannot be pulled directly into the JavaScript file.

  * Instead, it must be fetched from a server.

* Take a moment to explain the relative path of the `data.json` file.

  * As `plotly.js` must be able to access the contents of `data.json`, it must navigate to the `data` directory, and then `data.json`.

  * In `plotly.js`, the file path is entered as the argument of the `json` method: `d3.json("data/data.json")`.

  * Previously, URLs of APIs were placed as an argument to fetch data. Now, the JSON file is accessed instead.

* Navigate to the Solved directory from the CLI and start a local server with `python -m http.server`. Then go to `localhost:8000` in your browser.

  ![Images/github08.png](Images/github08.png)

* In the next segment, demonstrate how to deploy an existing project to GitHub Pages. The following steps should be familiar to students but are provided below for reference.

* First, create a new repository in GitHub.

  * Go to the GitHub website and create a new repository by clicking **New**.

  ![Images/github01.png](Images/github01.png)

  * The repository must be made public in order to be deployed to GitHub Pages.

  ![Images/github03.png](Images/github03.png)

  * Clone the repository by copying the URL and entering `git clone <url>` in the CLI.

  ![Images/github02.png](Images/github02.png)

* Next, push the project to GitHub.

  * Navigate to the directory of the repository.

  * Copy and paste the HTML, JavaScript, and JSON files from the Solved folder into the repository.

  * `git add .`

  * `git commit -m "<your message here>"`

  * `git push origin master`

* Next, go to the project page on GitHub and click on **Settings** to configure for deployment.

  ![Images/github04.png](Images/github04.png)

  * Under Settings, go to GitHub Pages and select **master branch**.

  ![Images/github05.png](Images/github05.png)

  * Click **Save**.

* The project should now be deployed to GitHub Pages.

  ![Images/github06.png](Images/github06.png)

  * The URL of the deployed page is `<account name>.github.io/<project name>`.

  * The deployment should be relatively quick but may take up to several minutes.

</details>

<details>
  <summary><strong> ✏️ Student Do: Seek and Deploy (20 mins)</strong></summary>

* **File:** [Unsolved](Activities/C9-Stu_Github_Pages/Unsolved)

* **Instructions:** [README.md](Activities/C9-Stu_Github_Pages/README.md)

* In this activity, students will deploy a Plotly project with a local data file to GitHub Pages.

</details>

<details>
  <summary><strong> ⭐ Review: Seek and Deploy (10 mins)</strong></summary>

* Briefly walk through the steps of deployment to GitHub Pages.

  * Create a project repository in GitHub.

  * Clone the repository on the local computer.

  * Add the project files to the repository.

  * Push the changes to GitHub.

  * In the repository settings, select **master branch** under Source, and then click **Save**.

  ![Images/github10.png](Images/github10.png)

* If time allows, take a moment to highlight the following elements of the code.

  * In the HTML file, the D3 library is read in from a CDN:

  ```html
  <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.9.1/d3.min.js"></script>
  ```

  * In the JavaScript file, a D3 method is used to read the data from the JSON file:

  ```js
  d3.json("data/data.json").then((incomingData) => {})
  ```

  * After reading in the JSON file, its data is referred arbitrarily here as `incomingData`; however, this argument could be given any other name such as `data` or `jsonData`.

</details>

<sub>[Having issues with this section? Report a bug!](https://bit.ly/35Yq9qM)</sub>

### End Class
