
mapboxgl.accessToken = config.MAPBOX_API; 


var mapProps = {
  container: 'map',   
  center: [-73.97, 40.75],  
  zoom: 9             
};

var map = new mapboxgl.Map(mapProps);

var marker = new mapboxgl.Marker()
  .setLngLat([-73.97, 40.75]) 
  .addTo(map);

map.on('click', function (e) {
  var coordinates = e.lngLat;
  alert("You clicked the map at: " + coordinates);
});

marker.getElement().addEventListener('mouseenter', function() {
  marker.getElement().style.backgroundColor = "red";
  console.log("Mouse entered the marker!");
});

marker.getElement().addEventListener('mouseleave', function() {
  marker.getElement().style.backgroundColor = "";
  console.log("Mouse left the marker!");
});

marker.on('dragend', function() {
  alert('You moved the marker!');
});
