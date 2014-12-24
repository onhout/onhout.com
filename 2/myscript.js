<<<<<<< HEAD
$(document).ready(function () {
    filter_value = {};
=======
$(document).ready(function(){
    filter_value={};
>>>>>>> e058248e57082a272862b5dff170955746c4fac4
    var bed = document.getElementById("#bed");
    bedcolor();
});

<<<<<<< HEAD
$(function () {
    changeScreen($(this).width());
    $(window).resize(function () {
        changeScreen($(this).width());
    });
});

function changeScreen(screenwidth) {
    width = parseInt(screenwidth);
    if (width < 980 && width > 600) {
        $("body.secondpage").css("max-width", "600px");
        $("img").css("width", "100%");
    } else if (width < 600) {
        $("img").css("float", "center");
    } else {
        $("body.secondpage").css("max-width", "980px");
    }
}

function bedcolor() {
    $("#imgwrapper").click(function () {
=======
$(function() {
        changeScreen($(this).width());
        $(window).resize(function() {
            changeScreen($(this).width());
        });
});

function changeScreen(screenwidth) {
        width = parseInt(screenwidth);
        if (width < 980 && width > 600) {
            $("body.secondpage").css("max-width", "600px");
            $("img").css("width","100%");
        } else if (width < 600){
            $("img").css("float","center");
        }else {
            $("body.secondpage").css("max-width", "980px"); 
        }
}

function bedcolor(){
    $("#imgwrapper").click(function(){
>>>>>>> e058248e57082a272862b5dff170955746c4fac4
        var randomnumber = Math.floor((Math.random() * 360) + 1);
        $("#bed").css("-webkit-filter", "hue-rotate(" + randomnumber + "deg)");
        $("#bottomcomment").text("Hue: " + randomnumber + " degrees.");
    });
}

<<<<<<< HEAD
function reset() {
=======
function reset(){
>>>>>>> e058248e57082a272862b5dff170955746c4fac4
    filter_value = {};
    colorchange();
    $("input").val(0);
    $("span").text(0);
    $("#bottomcomment").text("Reset.")
}

<<<<<<< HEAD
function change(thething, num) {
    filter_value[thething] = num;
    $("#" + thething).text(num + ".");
    colorchange();
}

function colorchange() {
    var valz = [];
    Object.keys(filter_value).sort().forEach(function (key, i) {
=======
function change(thething, num){
    filter_value[thething] = num;
    $("#"+thething).text(num+".");
    colorchange();
}

function colorchange(){
    var valz=[];
    Object.keys(filter_value).sort().forEach(function(key, i){
>>>>>>> e058248e57082a272862b5dff170955746c4fac4
        valz.push(key + '(' + filter_value[key] + ')');
    });
    var props = valz.join(' ');
    bed.style.webkitFilter = props;
}