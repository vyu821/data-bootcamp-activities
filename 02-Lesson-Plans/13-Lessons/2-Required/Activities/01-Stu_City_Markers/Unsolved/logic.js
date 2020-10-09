// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
  id: 'mapbox/streets-v11',
	accessToken: API_KEY
}).addTo(myMap);

// City markers
let nyc = L.marker([40.7128, -74.0060]).addTo(myMap);
let chicago = L.marker([41.8781, -87.6298]).addTo(myMap);
let houston = L.marker([29.7604, -95.3698]).addTo(myMap);
let la = L.marker([34.0522, -118.2437]).addTo(myMap);
let omaha = L.marker([41.2565, -95.9345]).addTo(myMap);

// Add code to create a marker for each city below and add it to the map
nyc.bindPopup('<b>New York City</b><br>Pop: 18.8m');
chicago.bindPopup('<b>Chicago</b><br>Pop: 8.8m');
houston.bindPopup('<b>Houston</b><br>Pop: 6.3m');
la.bindPopup('<b>Los Angeles</b><br>Pop: 12.4m');
omaha.bindPopup('<b>Omaha</b><br>Pop: 835k');

// newyork;
// chicago;
// houston;
// la;
// omaha;
