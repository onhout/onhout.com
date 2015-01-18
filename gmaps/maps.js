/**
 * Created by pl on 1/17/2015.
 */
$(document).ready(function() {
    var createCircle = function(distance, center) {
        var circleOption={
            strokeColor: '#ff0000',
            strokeOpacity: 0.7,
            strokeWeight: 2,
            fillColor: "blue",
            fillOpacity: "0.2",
            map:map,
            center: center,
            radius: distance
        }
        return circleOption;
    }
    var initialLocation;
    var controlDiv = $(".controlPanel");
    var controlUI = $("#GOHOME");
    var mapOptions = {
        zoom: 14,
        disableDefaultUI:true
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
    if (navigator.geolocation) {
        var browserSupport = true;
        navigator.geolocation.getCurrentPosition(function (position) {
            initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            map.setCenter(initialLocation);
            $("#mi").click(function(){

            });
            controlUI.click(function(){
                var distanceValue = parseFloat($(".distance").val());
                if ($("#mi").is(':checked')){
                    distanceValue = distanceValue * 1609.34;
                } else if ($("#km").is(':checked')){
                    distanceValue = distanceValue * 1000;
                }
                console.log(distanceValue);
                var marker = new google.maps.Marker({position:initialLocation, map:map});
                var circle = new google.maps.Circle(createCircle(distanceValue, initialLocation));
            })
        }, function () {
            handleNoGeoLocation(browserSupport);
        });
    } else {
        browserSupport = false;
        handleNoGeoLocation(browserSupport);
    }

    function handleNoGeoLocation(errorFlag) {
        if (errorFlag == true) {
            alert("Geolocation Service Failed.");
            initialLocation = new google.maps.LatLng(60, 105);
        } else {
            alert("Let me take you to siberia, because your browser doesn't support geolocation");
            initialLocation = new google.maps.LatLng(40.69, -73.95);
        }
        map.setCenter(initialLocation);
    }
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(controlDiv[0]);
});

