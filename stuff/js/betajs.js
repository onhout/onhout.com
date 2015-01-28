/**
 * Created by pl on 1/25/15.
 */
$(document).ready(function(){
    //hide menu bar first
    $(".navbar").hide();
    //when it scrolls after the image, reveal it
    $(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop()>340){
                $(".navbar").fadeIn();
            } else {
                $(".navbar").fadeOut();
            }
        })
    });

    //The navbar toggle
    $("div>ul>li").hover(function(){
        $(this).toggleClass("active");
    });

    //splash screen slideup thing
    $("#stuffviewer").mouseenter(function(){
        $(".godown", $(this)).slideDown(100);
    }).mouseleave(function(){
        $(".godown", $(this)).slideUp(100);
    }).click(function(){
    //mainbody autoscroll thingy
        $('html, body').animate({
            scrollTop: $("#mainbody").offset().top - 50
        }, 1000);
    });

    //parallax background;
    var controller = new ScrollMagic();
    new ScrollScene({
        triggerElement:"#parallax",
        duration:4800
    }).setTween(TweenMax.from("#parallax", 1, {backgroundPosition:"0 -100%", ease:Linear.easeNone}))
        .addTo(controller);

    //thumbnail mouseover;
    $(".thumbnail").hover(function(){
        $("div.caption", this).slideDown(100);
    }, function (){
        $("div.caption", this).slideUp(200);
    });

    //button modals
    $("div.caption > .btn-primary").click(function(){
        $(this).attr("data-toggle", "modal").attr("data-target", "#myModal"); //add to all buttons
        var target = $(this).parent().parent().find("img").attr("src").slice(11,12); //image number
        var passdownToClick = $(this).parent().find("h5").html();
        $("#myModalLabel").html($(this).parent().find("h3").html()); //modal title
        $(".modal-body-text")
            .load("stuff/modalstuff/modalstuff.txt #p" + target);//modal body
        $(".modal-body-picture")
            .html("<img src='images/page"+target+".png'>");
        $("div.modal-footer > .btn-primary").click(function(){
            window.location = passdownToClick;
        });
    });
    //aboutpage;
    var popupp = function popup(){
        $("div.about").slideToggle(200);
        $("div.splashcontainer").fadeToggle(200);
    };
    //about button
    $("a.aboutbutton").click(popupp);
    //about on navbar
    $("#navabout").click(function(){
        $('html, body').animate({
            scrollTop: $(".splashthingy").offset().top
        }, 500, function(){
            $("div.about").slideDown(200);
            $("div.splashcontainer").fadeOut(200);
        });
    });
    //portfolio on navbar
    $("#navportfolio").click(function(){
        $('html, body').animate({
            scrollTop: $("#mainbody").offset().top - 50
        }, 500);
    });

    $("div.about").click(function(){
        $("div.about").slideUp(200);
        $("div.splashcontainer").fadeIn(200);
    })

});

//test ssh keys in github