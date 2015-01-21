/**
 * Created by pl on 1/17/2015.
 */
$(document).ready(function() {
    var createCircle = function(distance, center) {
        var circleOption={
            strokeColor: '#ff0000',
            strokeOpacity: 0.6,
            strokeWeight: 1,
            fillColor: "blue",
            fillOpacity: "0.1",
            map:map,
            center: center,
            radius: distance
        };
        return circleOption;
    };
    var clickedLocation;
    var controlDiv = $(".controlPanel");
    var gobutton = $("#GOHOME");
    var resetbutton = $("#RESET");
    var mapOptions = {
        zoom: 14,
        disableDefaultUI:true
    };
    var markers = [];
    var circles = [];
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
    if (navigator.geolocation) {
        var browserSupport = true;
        navigator.geolocation.getCurrentPosition(function (position) {
            map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
            gobutton.click(function(){
                navigator.geolocation.getCurrentPosition(function(pos){
                    clickedLocation = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                    var distanceValue = parseFloat($(".distance").val());
                    if ($("#mi").is(":checked")){
                        distanceValue = distanceValue * 1609.34;
                    } else if ($("#km").is(":checked")){
                        distanceValue = distanceValue * 1000;
                    }
                    var marker = new google.maps.Marker({position:clickedLocation, map:map});
                    markers.push(marker);
                    var circle = new google.maps.Circle(createCircle(distanceValue, clickedLocation));
                    circles.push(circle);
                });
            });
            resetbutton.click(function(){
                clear();
                markers = [];
                circles=[];
            })

        }, function () {
            handleNoGeoLocation(browserSupport);
        });
    } else {
        browserSupport = false;
        handleNoGeoLocation(browserSupport);
    }
    function clear(){
        for (var i = 0; i < markers.length && circles.length; i++) {
            markers[i].setMap(null);
            circles[i].setMap(null);
        }
    }
    function handleNoGeoLocation(errorFlag) {
        if (errorFlag == true) {
            alert("Geolocation Service Failed.");
            var fakelocation = new google.maps.LatLng(60, 105);
        } else {
            alert("Let me take you to siberia, because your browser doesn't support geolocation");
            var fakelocation = new google.maps.LatLng(40.69, -73.95);
        }
        map.setCenter(fakelocation);
    }
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(controlDiv[0]);
});

