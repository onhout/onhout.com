/**
 * Created by pl on 2/3/15.
 */

$(document).ready(function(){
    var inputbox = document.getElementById('address-input');
    var autocomplete = new google.maps.places.Autocomplete(inputbox);

    var datas = {
        lakeshore:[],
        minimum:[],
        other:[]
    };
    var polygons={
        lakeshore: new google.maps.Polygon(),
        minimum: new google.maps.Polygon(),
        other: new google.maps.Polygon()
    };
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
    //load other
    $.get("dependencies/mapjson/other.json", function(data){
        for (var i=0; i<data.length; i++){
            datas["other"].push(new google.maps.LatLng(data[i][0], data[i][1]));
        }
    }).done(function(){
        polygons["other"].setPaths(datas["other"]);
    });

    google.maps.event.addDomListener(autocomplete, 'place_changed', function(){
        var place = autocomplete.getPlace();
        //$("#result").html("x: " + place.geometry.location.lat() + " y: " + place.geometry.location.lng());
        for (var i=0; i<Object.keys(datas).length; i++){
            console.log(polygons[Object.keys(datas)[i]]);
            if (google.maps.geometry.poly.containsLocation(place.geometry.location, polygons[Object.keys(datas)[i]])){
                $(".deliverybutton").attr("disabled", false);
                $(".pickupbutton").attr("disabled", false);
                if (Object.keys(datas)[i] == "minimum"){
                    $("#result").attr("class", "bg-info").html("CHOOSE BETWEEN DELIVERY FROM LAKESHORE ($36 MINIMUM) OR PICKUP FROM OTHER BRANCH");
                } else {
                    $("#result").attr("class", "bg-success").html("CHOOSE BETWEEN DELIVERY FROM " + Object.keys(datas)[i].toUpperCase() + " LOCATION OR PICKUP FROM OTHER BRANCH");
                }
                break; //<-Such a main keyword
            } else {
                $("#result").attr("class", "bg-danger").html("SORRY YOUR ADDRESS ONLY TAKES PICKUP ORDERS");
                $(".pickupbutton").attr("disabled", false);
                $(".deliverybutton").attr("disabled", true);
            }
        }

    })
});