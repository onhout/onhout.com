/**
 * Created by pl on 1/17/2015.
 */
$(document).ready(function () {
    var mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(37.785782, -122.208757)
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    var bounds = [];
    var polygonoptions = {
        draggable: true,
        editable: true,
        strokeWeight:0.8,
        strokeColor: "#0000FF",
        strokeOpacity: 0.9,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    };

    var drawingmanager = new google.maps.drawing.DrawingManager({
        drawingControl: true,
        drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [google.maps.drawing.OverlayType.POLYGON]
        },
        polygonOptions: polygonoptions,
        map:map
    });

    var inputbox = document.getElementById('address-input');
    var autocomplete = new google.maps.places.Autocomplete(inputbox);
    autocomplete.bindTo('bounds', map);

    google.maps.event.addDomListener(autocomplete, 'place_changed', function(){
        var place = autocomplete.getPlace();
        console.log("x: " + place.geometry.location.lat() + " y: " + place.geometry.location.lng());
        for (var i=0; i<bounds.length; i++){if (google.maps.geometry.poly.containsLocation(place.geometry.location, bounds[i])){
                $("#result").html("YES ITS INSIDE THE BOUNDARY");
            } else {
                $("#result").html("NO ITS NOT INSIDE THE BOUNDARY");
            }
        }

        if (place.geometry.viewport){
            map.fitBounds(place.geometry.viewport);
        }else {
            map.setCenter(place.geometry.location);
            map.setZoom(15);
        }
    })

    google.maps.event.addDomListener(drawingmanager, 'polygoncomplete', function (thepolygon) {
        bounds.push(thepolygon);
    });

    var coordbutton = document.getElementById('showstrings');
    google.maps.event.addDomListener(coordbutton, 'click', function () {
        $("#contentString").html('');
        for (var i = 0; i < bounds.length; i++) {
            var polybounds = bounds[i].getPath();
            var contentString = '';
            console.log(polybounds);
            polybounds.forEach(function (xy, i) {
                contentString = '<br>' + 'Coordinate: ' + i + '<br>' + xy.lat() + ',' + xy.lng();
                $("#contentString").append(contentString);
            });
            $.ajax({
                type:'POST',
                url:'savecoords.php',
                success:function(msg){
                    alert(msg);
                }
            })
        }
    });
    /* new google.maps.LatLng(37.6, -122.27),
     new google.maps.LatLng(37.8, -122.25),
     new google.maps.LatLng(37.7, -122.26)
     );*/

    //drawingmanager.setMap(map);

});

