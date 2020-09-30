# Weather Forecast Time Series

In this activity, we will use [OpenWeatherMap](https://openweathermap.org/api) to fetch weather forecast data and then build a time-series plot for the temperatures.

## Instructions

* Use the starter code provided and `d3.json` to fetch data from OpenWeatherMap. **Note:** If you haven't obtained a free API key yet, you'll need to register for a new account and add your API key to the URL.

```javascript
const apiKey = 'YOUR KEY HERE';

let city = 'Chicago'

let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`
```

* Use the `getTimes()` and `getTemps()` helper functions to select the data that you need from the JSON response object. 

* Use the code examples from the Plotly.js documentation to build your basic time series plot.

---

© 2019 Trilogy Education Services
