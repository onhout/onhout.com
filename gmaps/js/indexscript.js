/**
 * Created by pl on 1/20/15.
 */
$(document).ready(function(){
    var controller = new ScrollMagic();
    //var tween = new TweenMax.to("#animate1", 0.5, {opacity:1, top:0});
    //var tween2 = new TweenMax.to("#animate2", 1, {ease:Power4.easeOut, opacity:1, top:0});
    /*var scene = new ScrollScene({triggerElement: "#trigger1", duration: 100})
        .setTween(tween)
        .addTo(controller);
    var scene2 = new ScrollScene({triggerElement: "#trigger2"})
        .setTween(tween2)
        .addTo(controller);*/
    var presentTween = [];
    for (var i=1; i<13; i++){
        presentTween.push($("#intro"+i));
        new ScrollScene({
            triggerElement:"#intro"+i,
            duration:200
        })
            .setTween(TweenMax.to(presentTween, 2, {opacity:0}))
            .setPin("#intro"+i)
            .addTo(controller);
    }

    new ScrollScene({
        triggerElement:"#dontleave",
        offset: 200
    }).setPin("#dontleave")
        .addTo(controller);

    new ScrollScene({
        triggerElement:"#parallax",
        duration:4800
    }).setTween(TweenMax.from("#parallax", 1, {backgroundPosition:"0 -80%", ease:Linear.easeNone}))
        .addTo(controller);


    /*var scene3 = new ScrollScene({triggerElement: "#intro", duration: 300})
        .setTween(tween3)
        .addTo(controller);*/
});

