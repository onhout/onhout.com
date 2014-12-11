$(document).ready(function(){
    $("#bed").click(function(){
        var randomnumber = Math.floor((Math.random() * 360) + 1);
        $("#bed").css("-webkit-filter", "hue-rotate(" + randomnumber + "deg)");
        $("#bottomcomment").text("Hue: " + randomnumber + " degrees.");
    });
});