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
    var datas={
        lakeshore:[],
        minimum:[],
        other:[]
    };
    var shapeLibrary ={
        lakeshore: new google.maps.Polygon({
            editable: true,
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 1,
            fillColor: '#FF0000',
            fillOpacity: 0.35
        }),
        minimum: new google.maps.Polygon({
            editable: true,
            strokeColor: '#0000FF',
            strokeOpacity: 0.8,
            strokeWeight: 1,
            fillColor: '#0000FF',
            fillOpacity: 0.35
        }),
        other: new google.maps.Polygon({
            editable: true,
            strokeColor: '#00FF00',
            strokeOpacity: 0.8,
            strokeWeight: 1,
            fillColor: '#00FF00',
            fillOpacity: 0.35
        })
    };
    //VERY GENERIC FUNCTION HAHAHA
    $(".dacheck").change(function () {
        var namespace = $(this).attr('id');
        console.log(datas[namespace]);
        if ($(this).is(":checked")) {
            if (datas[namespace].length == 0/*check if array is empty*/) {
                $.get("dependencies/mapjson/"+namespace+".json", function (data) {
                    for (var i = 0; i < data.length; i++) {
                        datas[namespace].push(new google.maps.LatLng(data[i][0], data[i][1]));
                        console.log("x: " + data[i][0] + " y: " + data[i][1]);
                    }
                    console.log(datas[namespace]);
                }).done(function () {
                    shapeLibrary[namespace].setPath(datas[namespace]);
                });
            }
            shapeLibrary[namespace].setMap(map);
        } else {
            shapeLibrary[namespace].setMap(null);
        }
    });
    //RELOAD BECOMES GENERIC
    $("#reloaddata").click(function(){
        $(".dacheck:checked").each(function(){
            var namespace = $(this).attr("id");
            datas[namespace] = [];
            $.get("dependencies/mapjson/"+namespace+".json", function(data){
                for (var i=0; i<data.length; i++){
                    datas[namespace].push(new google.maps.LatLng(data[i][0], data[i][1]));
                }
            }).done(function(){
                shapeLibrary[namespace].setPath(datas[namespace]);
            })
        });
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
        $(".dacheck:checked").each(function(){
            var namespace = $(this).attr("id");
            datas[namespace] = [];
            var polybounds=shapeLibrary[namespace].getPath().getArray();
            console.log(shapeLibrary[namespace]);
            polybounds.forEach(function (xy, i) {
                var contentString = '<br>' + '<b>' +namespace+ ' </b>'+'Coordinate: ' + i + '<br>' + xy.lat() + ',' + xy.lng();
                $("#contentString").append(contentString);
                var temparray = [];
                temparray.push(xy.lat(), xy.lng());
                datas[namespace].push(temparray);
            });
            console.log(namespace);
            $.ajax({
                type: 'POST',
                url: 'dependencies/savecoords.php',
                data: {
                    filename: namespace,
                    json: JSON.stringify(datas[namespace])
                }
            })
        });

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

