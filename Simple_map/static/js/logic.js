// Add console.log to check to see if our code is working.
console.log("working");

// Create a map object
let map = L.map("mapid", {
  center: [39.8283, -98.5795],
  zoom: 4
});

// Adding tile layer
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  tilesize: 512,
  accessToken: API_KEY
});
// Add tile layer to map
streets.addTo(map);

