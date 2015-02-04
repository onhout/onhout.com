/**
 * Created by pl on 2/3/15.
 */

$(document).ready(function(){
    var inputbox = document.getElementById('address-input');
    var autocomplete = new google.maps.places.Autocomplete(inputbox);


    google.maps.event.addDomListener(autocomplete, 'place_changed', function(){
        var place = autocomplete.getPlace();
        console.log("x: " + place.geometry.location.lat() + " y: " + place.geometry.location.lng());
        for (var i=0; i<bounds.length; i++){
            if (google.maps.geometry.poly.containsLocation(place.geometry.location, bounds[i])){
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
});