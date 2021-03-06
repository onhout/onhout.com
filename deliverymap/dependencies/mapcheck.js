$(document).ready(function(){
    var mapOptions = {
        zoom: 13,
        center: new google.maps.LatLng(37.810601, -122.247184)
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
    var inputbox = document.getElementById('address-input');
    var options = {
	componentRestrictions:{country:'us'}
    };
    var directionsDisplay = new google.maps.DirectionsRenderer();
    var directionsService = new google.maps.DirectionsService();
    var start = "536 Lake Park Ave. Oakland, CA";
    var end = "";

    function calcRoute(start, end) {
        var request = {
            origin:start,
            destination:end,
            travelMode: google.maps.TravelMode.DRIVING
        };
        directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                $(".traveldetails").html(" | Distance: "+response.routes[0].legs[0].distance.text+" | Time: "+response.routes[0].legs[0].duration.text);
                directionsDisplay.setDirections(response);
            }
        });
    }


    var autocomplete = new google.maps.places.Autocomplete(inputbox, options);

    var datas = {
        lakeshore:[],
        minimum:[]
    };
    var polygons={
        lakeshore: new google.maps.Polygon({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 0.5,
            fillColor: '#FF0000',
            fillOpacity: 0.07
        }),
        minimum: new google.maps.Polygon({
            strokeColor: '#0000FF',
            strokeOpacity: 0.8,
            strokeWeight: 0.5,
            fillColor: '#0000FF',
            fillOpacity: 0.07
        })
    };
    polygons["lakeshore"].setMap(map);
    polygons["minimum"].setMap(map);
    //load lakeshore
    $.get("dependencies/mapjson/lakeshore.json", function(data){
        for (var i=0; i<data.length; i++){
            datas["lakeshore"].push(new google.maps.LatLng(data[i][0], data[i][1]));
        }
    }).done(function(){
        polygons["lakeshore"].setPaths(datas["lakeshore"]);
    });
    //load minimum
    $.get("dependencies/mapjson/minimum.json", function(data){
        for (var i=0; i<data.length; i++){
            datas["minimum"].push(new google.maps.LatLng(data[i][0], data[i][1]));
        }
    }).done(function(){
        polygons["minimum"].setPaths(datas["minimum"]);
    });

    google.maps.event.addDomListener(autocomplete, 'place_changed', function(){
        var place = autocomplete.getPlace();
        for (var i=0; i<Object.keys(datas).length; i++){
           if (google.maps.geometry.poly.containsLocation(place.geometry.location, polygons[Object.keys(datas)[i]])){
               end = place.formatted_address;
               var zipcode = place.adr_address.slice(place.adr_address.indexOf("postal-code")+13,
                   place.adr_address.indexOf("postal-code")+18);
               calcRoute(start, end);
               directionsDisplay.setMap(map);

               if (isNaN(zipcode)){
                   $(".zipcode").html("Sorry Perry, find your own zip code")
               } else {
                   $(".zipcode").html(zipcode);
               }
                if (Object.keys(datas)[i] == "minimum"){
                    $(".result").html("$36 MINUMUM");
                } else {
                   $(".result").html("Regular ($18)")
                }
                break; //<-Such a main keyword
            } else {
                $(".result").html("NO DELIVER")
            }
        }
	$("#address-input").focus().select();
    })
});