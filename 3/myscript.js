$(document).ready(function(){
    var list=["braeburn", "cortland", "empire", "fuji", "gala", "gingergold", "goldendelicious", "grannysmith", "honeycrisp", "idared", "jonagold", "jonathan", "mcintosh", "reddelicious", "rome"];
    var wikilist=["Braeburn", "Cortland_apple", "Empire_apple", "Fuji_apple", "Gala_apple", "Ginger_Gold", "Golden_Delicious", "Granny_Smith", "Honeycrisp", "Idared", "Jonagold", "Jonathan_apple", "McIntosh_apple", "Red_Delicious", "Rome_apple"];
    for (i=list.length; i--;){
        $("#"+list[i])
        .html("<a id='"+list[i]+"' href='#'><img src=' img/"+list[i]+".jpg' width=180px height=180px></img></a>")
        .css({width:"180px", height:"180px"})
        .wrap("<div id='container' class='"+list[i]+"'></div>")
        .mouseenter(function(event){
            $("#"+this.id).css("-webkit-filter", "opacity(0.5)");
            $("."+this.id).append("<h2 class='remove'>"+this.className+"</h2>");
        })
        .mouseleave(function(){
            $("#"+this.id).css("-webkit-filter", "none");
            $(".remove").remove();
        })
        .click(function(){
            $(".overlayInner").load("test.html #"+this.className, function(){
                $(".overlayOuter").fadeIn(300);
            }).fadeIn(300);
        });
    }
    
    $(".overlayOuter").click(function(event){
            $(".overlayOuter").fadeOut(300);
            $(".overlayInner").fadeOut(300);
    });
    
    var margintop=$(window).height()/4;
    var marginleft=$(window).width()/4;
    console.log(marginleft," ", margintop)
    
    
    /*$(".overlayOuter").css({margin:"-"+margintop+"px 0px 0px -"+marginleft+"px"});
    $(window).resize(function(){
        $(".overlayOuter").css({margin:"-"+margintop+"px 0px 0px -"+marginleft+"px"});
    });*/
    
});
