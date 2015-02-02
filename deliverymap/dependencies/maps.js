/**
 * Created by pl on 1/17/2015.
 */
$(document).ready(function() {
    var mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(37.765, -122.263)
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    var bounds =[];

    var drawingmanager = new google.maps.drawing.DrawingManager({
        drawingMode : google.maps.drawing.OverlayType.POLYGON,
        drawingControl: true,
        drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER
        }
    });

    google.maps.event.addDomListener(drawingmanager, 'polygoncomplete', function(thepolygon){
        thepolygon.setEditable(true);
        bounds.push(thepolygon);
    });

    var polygon = new google.maps.Polygon({
        paths: bounds,
        editable: true,
        strokeColor: '#FF0000',
        strokeOpacity: 0.9,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });

    console.log(polygon);

    var coordbutton = document.getElementById('showstrings');
    google.maps.event.addDomListener(coordbutton, 'click', function(){
        for (var i = 0; i < bounds.length; i++){
            var polybounds = bounds[i].getPath();
            console.log(polybounds);
            var xy;
            polybounds.forEach(function(xy, i) {
                var contentString = '<br>' + 'Coordinate: ' + i + '<br>' + xy.lat() +',' + xy.lng();
                $("#contentString").append(contentString);
            });

    }
    });
       /* new google.maps.LatLng(37.6, -122.27),
        new google.maps.LatLng(37.8, -122.25),
        new google.maps.LatLng(37.7, -122.26)
    );*/

    polygon.setMap(map);
    drawingmanager.setMap(map);

});

