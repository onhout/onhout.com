$(document).ready(function(){
    var mapOptions = {
        zoom: 13,
        center: new google.maps.LatLng(37.810601, -122.247184)
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
});