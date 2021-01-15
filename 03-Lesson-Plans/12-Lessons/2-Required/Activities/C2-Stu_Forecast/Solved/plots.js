let city = 'Chicago'

let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`

d3.json(url).then(function(data) {
  console.log(data);

  times = owmData.list.map(x => x.dt_txt);
  temps = owmData.list.map(x => x.main.temp);

  var trace1 = {
    type: "scatter",
    mode: "lines",
    x: times,
    y: temps,
    line: {
      color: "#17BECF",
    }
  };

  var data = [trace1];

  var layout = {
    title: `${city} 5-day forecast`,
  };

  Plotly.newPlot("plot", data, layout);
})
