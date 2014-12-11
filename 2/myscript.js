$(document).ready(function(){
    filter_value={};
    var bed = document.getElementById("#bed");
    bedcolor();
});


function bedcolor(){
    $("#bed").click(function(){
        var randomnumber = Math.floor((Math.random() * 360) + 1);
        $("#bed").css("-webkit-filter", "hue-rotate(" + randomnumber + "deg)");
        $("#bottomcomment").text("Hue: " + randomnumber + " degrees.");
    });
}

function reset(){
    filter_value = {};
    colorchange();
}

function change(thething, num){
    filter_value[thething] = num;
    $("#"+thething).text(num+".");
    colorchange();
}

function colorchange(){
    var valz=[];
    Object.keys(filter_value).sort().forEach(function(key, i){
        valz.push(key + '(' + filter_value[key] + ')');
    });
    var props = valz.join(' ');
    bed.style.webkitFilter = props;
}