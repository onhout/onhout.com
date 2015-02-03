/**
 * Created by pl on 1/17/2015.
 */
$(document).ready(function () {
    var mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(37.765, -122.263)
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    var bounds = [];
    var polygonoptions = {
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
                var contentString = '<br>' + 'Coordinate: ' + i + '<br>' + xy.lat() + ',' + xy.lng();
                $("#contentString").append(contentString);
            });
        }
    });
    /* new google.maps.LatLng(37.6, -122.27),
     new google.maps.LatLng(37.8, -122.25),
     new google.maps.LatLng(37.7, -122.26)
     );*/

    //drawingmanager.setMap(map);

});

