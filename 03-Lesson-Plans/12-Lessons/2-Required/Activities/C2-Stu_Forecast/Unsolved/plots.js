const apiKey = 'YOUR KEY HERE';

let city = 'Chicago'

let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`

function getTimes(owmData) {
  return owmData.list.map(x => x.dt_txt)
}

function getTemps(owmData) {
  return owmData.list.map(x => x.main.temp)
}

// Fetch data using d3.json() and build the timeseries plot
