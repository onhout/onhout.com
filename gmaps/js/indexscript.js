/**
 * Created by pl on 1/20/15.
 */
$(document).ready(function(){
    var controller = new ScrollMagic();
    var tween = new TweenMax.to("#animate1", 0.5, {opacity:1, top:0});
    var tween2 = new TweenMax.to("#animate2", 1, {ease:Power4.easeOut, opacity:1, top:0});
    var scene = new ScrollScene({triggerElement: "#trigger1", duration: 100})
        .setTween(tween)
        .addTo(controller);
    var scene2 = new ScrollScene({triggerElement: "#trigger2"})
        .setTween(tween2)
        .addTo(controller);
    var tween3 = new TweenMax.to("#intro", 2, {backgroundPosition: "-40% 0", ease:Linear.easeNone});
    var scene3 = new ScrollScene({triggerElement: "#intro", duration: 300})
        .setTween(tween3)
        .addTo(controller);
})