$(document).ready(function () {
    filter_value = {};
    var bed = document.getElementById("#bed");
    bedcolor();
});

$(function () {
    changeScreen($(this).width());
    $(window).resize(function () {
        changeScreen($(this).width());
    });
});

function changeScreen(screenwidth) {
    var width = parseInt(screenwidth);
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
        var randomnumber = Math.floor((Math.random() * 360) + 1);
        $("#bed").css("-webkit-filter", "hue-rotate(" + randomnumber + "deg)");
        $("#bottomcomment").text("Hue: " + randomnumber + " degrees.");
    });
}

function reset() {
    filter_value = {};
    colorchange();
    $("input").val(0);
    $("span").text(0);
    $("#bottomcomment").text("Reset.")
}

function change(thething, num) {
    filter_value[thething] = num;
    $("#" + thething).text(num + ".");
    colorchange();
}

function colorchange() {
    var valz = [];
    Object.keys(filter_value).sort().forEach(function (key, i) {
        valz.push(key + '(' + filter_value[key] + ')');
    });
    var props = valz.join(' ');
    bed.style.webkitFilter = props;
}