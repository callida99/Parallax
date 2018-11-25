 var marker1;
  var marker2;
  var marker3;
  var marker4;
  
  var map;
  function initialize() {
  var location1= new google.maps.LatLng(24.126208, -97.741941);
  var location2= new google.maps.LatLng(25.685376, -94.909758);
  var location3= new google.maps.LatLng(22.277888, -94.787785);
  var location4= new google.maps.LatLng(23.272791, -92.991155);
  var mapOptions = {
    zoom: 6,
    center: new google.maps.LatLng(22,-97),
	mapTypeId: google.maps.MapTypeId.TERRAIN
  };
  
  
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
	   
  //marker1
   marker1 = new google.maps.Marker({
      position: location1,
      map: map,
      icon: "images/iconPlant.png",
	  anchor:new google.maps.Point(18, 18),
	  title:"Ojeda Processing Plant "
	 });
  marker1.setMap(map);
  var infowindow1 = new google.maps.InfoWindow({
  content:'<div class="infoWin">'+'<h5>Ojeda Processing Plant</h5><p>'+location1.lat()+'Latitude</p><p>'+location1.lng()+'longitute</p>'+'<p><a href="#Ojeda" title="More info" target="_self">More info</a></p>'+'</div>'
  });

google.maps.event.addListener(marker1, 'click', function(){
infowindow1.open(map,marker1);
});

//marker2
	  marker2 = new google.maps.Marker({
      position:location2, 
      map: map,
      icon: "images/iconSpar.png",
	  anchor:new google.maps.Point(18, 18),
	  title:"Arana Spar"
  });
  marker2.setMap(map);
  var infowindow2 = new google.maps.InfoWindow({
  content:'<div class="infoWin">'+'<h5>Arana Spar</h5><p>'+location2.lat()+'Latitude</p><p>'+location2.lng()+'longitute</p>'+'<p><a href="#Arana" title="More info" target="_self">More info</a></p>'+'</div>'
  });

google.maps.event.addListener(marker2, 'click', function(){
infowindow2.open(map,marker2);
});
 
  
 //marker3
 marker3 = new google.maps.Marker({
      position: location3,
      map: map,
      icon: "images/iconRig.png",
	  anchor:new google.maps.Point(18, 18),
	  title:"Quiroga Rig"
	  
  });
 marker3.setMap(map);
  var infowindow3 = new google.maps.InfoWindow({
  content:'<div class="infoWin">'+'<h5>Quiroga Rig</h5><p>'+location3.lat()+'Latitude</p><p>'+location3.lng()+'longitute</p>'+'<p><a href="#Quiroga" title="More info" target="_self">More info</a></p>'+'</div>'
  });

google.maps.event.addListener(marker3, 'click', function(){
infowindow3.open(map,marker3);
 });
  
  
//marker4
      marker4 = new google.maps.Marker({
      position: location4,
      map: map,
      icon: "images/iconRig.png",
	  anchor:new google.maps.Point(18, 18),
	  title:"Orizba Rig"
  });
 marker4.setMap(map);
  var infowindow4 = new google.maps.InfoWindow({
  content:'<div class="infoWin">'+'<h5>Orizba Rig</h5><p>'+location4.lat()+'Latitude</p><p>'+location4.lng()+'longitute</p>'+'<p><a href="#Orizba" title="More info" target="_self">More info</a></p>'+'</div>'
  });

google.maps.event.addListener(marker4, 'click', function(){
infowindow4.open(map,marker4);
 });
 
 
}
function calcRoute() {
var start = document.getElementById('start').value;
var startComma = start.indexOf(',');
var startLat = parseFloat(start.substring(0, startComma));
var startLong = parseFloat(start.substring(startComma + 1, start.length));
var startPoint = new google.maps.LatLng(startLat, startLong);

var end = document.getElementById('end').value;
var endComma = end.indexOf(',');
var endLat = parseFloat(end.substring(0, endComma));
var endLong = parseFloat(end.substring(endComma + 1, end.length));
var endPoint = new google.maps.LatLng(endLat, endLong);

//lines
var flightPlanCoordinates = [ startPoint, endPoint];
    
  var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#ef3e36',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  flightPath.setMap(map);

    //calculates distance between two points in km's
function calcDistance(){
return Math.round(google.maps.geometry.spherical.computeDistanceBetween(startPoint, endPoint) / 1000);
    }
document.getElementById("calcDistanceOutput").innerHTML = (calcDistance()) + ' km';
}

google.maps.event.addDomListener(window, 'load', initialize);