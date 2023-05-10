$(function() {
    let w;
    $(window).resize(function() {
        w = $(this).width();  //웹브라우저 너비
        $("#web_width").text("너비 : " + w +"px");

        if ( w > 768 && $("#gnb").is(":hidden") ) {
            $("#gnb").removeAttr("style");
        }

        if ( w <= 768 ) {
            $(".gnb_li").click(function() {
                $(this).siblings().find(".sub_gnb").stop().slideUp();
                $(this).find(".sub_gnb").stop().slideToggle();
            });
        } else if ( w > 768 ) {
            $(".gnb_li").hover(
                function() {
                    $(this).find(".sub_gnb").stop().slideDown();
                },
                function() {
                    $(this).find(".sub_gnb").stop().slideUp();
                }
            );
        }
    }).resize();
    
    $(".gnb_li > a").click(function(e) {
        e.preventDefault();
    });
    

    // 햄버거 메뉴 아이콘
    let forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    let hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
            $("#gnb").slideToggle(500);
            $("#dot_box").fadeToggle(500);
            this.classList.toggle("is-active");
        }, false);
      });
    }


    $(window).scroll(function() {
        let scrollV = $(this).scrollTop();
        let scr_idx;   // 스크롤값에 따라 dot요소의 선택자를 다르게하기 위한 변수

        $("#scrollView").text("스크롤Y : " + scrollV + "px");  //스크롤값 보여주기
        
        if ( w <= 500 ) {
            if ( scrollV >= 0 && scrollV <= 100 ) {
                scr_idx = 0;
            } else if ( scrollV >= 280 && scrollV <= 650 ) {
                scr_idx = 1;
                $(".dot").eq(1).children("span").css({color : "#fff", textShadow : "0 0 10px pink"});
            } else if ( scrollV >= 685 && scrollV <= 1100 ) {
                scr_idx = 2;
            } else if ( scrollV >= 1185 && scrollV <= 1450 ) {
                scr_idx = 3;
            } else if ( scrollV >= 1460 ) {
                scr_idx = 4;
            }

        } else if ( w > 500 ) {
            if ( scrollV >= 0 && scrollV <= 449 ) {
                scr_idx = 0;
            } else if ( scrollV >= 500 && scrollV <= 900 ) {
                scr_idx = 1;
                $(".dot").eq(1).children("span").removeAttr("style");
            } else if ( scrollV >= 1050 && scrollV <= 1600 ) {
                scr_idx = 2;
            } else if ( scrollV >= 1800 && scrollV <= 2200 ) {
                scr_idx = 3;
            } else if ( scrollV >= 2400 ) {
                scr_idx = 4;
            }

        }
        $(".dot").eq(scr_idx).siblings().css({ background : "rgba(0, 0, 0, 0.5)"});
        $(".dot").eq(scr_idx).siblings().find("span").stop().fadeOut(100);
        $(".dot").eq(scr_idx).css({ background : "rgba(255, 252, 94, 0.7)"});
        $(".dot").eq(scr_idx).find("span").stop().fadeIn();

    });
    $(window).trigger("scroll");
    

    $(".dot").on({
        "click" : function() {
            $(this).siblings().find("span").stop().fadeOut(200);
            $(this).find("span").stop().fadeIn();
            $(this).siblings().css({ background : "rgba(0,0,0,0.5)"});
            $(this).css({ background : "rgba(255, 252, 94, 0.7)"});

            let idx = $(this).index();
            switch(idx) {
                case 0:
                    $("html").animate({ scrollTop : "0px"}, 400)
                    break;
                case 1:
                    if ( w <= 500 ) {  //웹브라우저 창의 너비가 500px 이하인 경우(모바일 화면)
                        $("html").animate({ scrollTop : "280px"}, 400)
                    } else if ( w > 500 ) {
                        $("html").animate({ scrollTop : "500px"}, 400);
                    }
                    break;   
                case 2:
                    if ( w <= 500 ) {
                        $("html").animate({ scrollTop : "695px"}, 400)
                    } else if ( w > 500 && w <= 780 ) {   //웹브라우저 창의 너비가 550이상 780px 이하인 경우(태블릿 화면)
                        $("html").animate({ scrollTop : "1490px"}, 400);
                    } else if ( w > 780 ) {  //웹브라우저 창의 너비가 790px 이상인 경우(PC 화면)
                        $("html").animate({ scrollTop : "1065px"}, 400);
                    }
                    break;   
                case 3:
                    if ( w <= 500 ) {
                        $("html").animate({ scrollTop : "1195px"}, 400)
                    } else if ( w > 500 && w <= 780 ) {
                        $("html").animate({ scrollTop : "2090px"}, 400);
                    } else if ( w > 780 ) {
                        $("html").animate({ scrollTop : "1800px"}, 400);
                    }
                    break;   
                case 4:
                    if ( w <= 500 ) {
                        $("html").animate({ scrollTop : "1550px"}, 400)
                    } else if ( w > 500 && w <= 780 ) {
                        $("html").animate({ scrollTop : "2570px"}, 400);
                    } else if ( w > 780 ) {
                        $("html").animate({ scrollTop : "2425px"}, 400);
                    }
                    break;   
            }
        },

        "mouseover" : function() {
            $(this).find("span").stop().fadeIn();
            $(this).css({ background : "rgba(255, 252, 94, 0.7)"});
        },

        "mouseout" : function() {
            $(this).find("span").stop().fadeOut();
            $(this).css({ background : "rgba(0,0,0,0.5)"});
        },
    });

});