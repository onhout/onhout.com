/**
 * Created by pl on 1/17/2015.
 */
$(document).ready(function () {
    var mapOptions = {
        zoom: 13,
        center: new google.maps.LatLng(37.785782, -122.208757)
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    //configure the bounds
    var lakeshorebounds = [];
    var minumumamountbounds = [];
    var otherbounds = [];
    var lakeshoreShape = new google.maps.Polygon({
        editable: true,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });

    $("#lakeshore").change(function () {
        if ($(this).is(":checked")) {
            if (lakeshorebounds.length == 0/*check if array is empty*/) {
                $.get("dependencies/mapjson/lakeshore.json", function (data) {
                    for (var i = 0; i < data.length; i++) {
                        lakeshorebounds.push(new google.maps.LatLng(data[i][0], data[i][1]));
                        console.log("x: " + data[i][0] + " y: " + data[i][1]);
                    }
                    console.log(lakeshorebounds);
                }).done(function () {
                    lakeshoreShape.setPath(lakeshorebounds);
                });
            }
            lakeshoreShape.setMap(map);
        } else {
            lakeshoreShape.setMap(null);
        }
    });

    $("#reloaddata").click(function(){
        lakeshorebounds = [];
        $.get("dependencies/mapjson/lakeshore.json", function(data){
            for (var i=0; i<data.length; i++){
                lakeshorebounds.push(new google.maps.LatLng(data[i][0], data[i][1]));
            }
        }).done(function(){
            lakeshoreShape.setPath(lakeshorebounds);
        })
    });

    /*google.maps.event.addDomListener(document.getElementById('loaddata'), 'click', function () {
        lakeshoreShape.setMap(map);
    });*/

    /*var drawingmanager = new google.maps.drawing.DrawingManager({
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
     });*/

    var coordbutton = document.getElementById('savedata');
    google.maps.event.addDomListener(coordbutton, 'click', function () {
        $("#contentString").html('');
        var jsondata = [];
        var polybounds=lakeshoreShape.getPath().getArray();
        console.log(lakeshoreShape);
        polybounds.forEach(function (xy, i) {
            var contentString = '<br>' + 'Coordinate: ' + i + '<br>' + xy.lat() + ',' + xy.lng();
            $("#contentString").append(contentString);
            var temparray = [];
            temparray.push(xy.lat(), xy.lng());
            jsondata.push(temparray);
        });
        console.log(jsondata);
        $.ajax({
            type: 'POST',
            url: 'dependencies/savecoords.php',
            data: {
                json: JSON.stringify(jsondata)
            }
        })
    });

    /*var showdata = document.getElementById('loaddata');
    google.maps.event.addDomListener(showdata, 'click', function () {
        $.get("dependencies/mapjson/lakeshore.json", function (data) {
            for (var i = 0; i < data.length; i++) {
                lakeshorebounds.push(new google.maps.LatLng(data[i][0], data[i][1]));
                console.log("x: " + data[i][0] + " y: " + data[i][1]);
            }
            console.log(jsoncoords);
            var bermudaTriangle = new google.maps.Polygon({
                paths: jsoncoords,
                editable: true,
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 1,
                fillColor: '#FF0000',
                fillOpacity: 0.35
            });
            bermudaTriangle.setMap(map);
            console.log(bermudaTriangle);
        });
    });*/


    /* new google.maps.LatLng(37.6, -122.27),
     new google.maps.LatLng(37.8, -122.25),
     new google.maps.LatLng(37.7, -122.26)
     );*/

    //drawingmanager.setMap(map);

});

