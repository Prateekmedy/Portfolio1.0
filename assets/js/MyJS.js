$(document).ready(function(){
    
    $(".hex1").hover(function(){
        $(".hex1").css('cursor','pointer');
        $("#content_box").css("background-image","url('assets/img/java-logo-vector.png')");
        $("#content_box").css("opacity","1");
        $("#about_content").text("JAVA");
        $(".content_box").css("opacity","0");
        },function(){
        $(".overlay").css('opacity','0');
        $("#content_box").css("opacity","0");
        $(".content_box").css("opacity","1");
    });
    
     $(".hex2").hover(function(){
        $(".hex2").css('cursor','pointer');
         $("#content_box").css("background-image","url('assets/img/database.png')");
         $("#content_box").css("opacity","1");
        $("#about_content").text("DATABASE");
         $(".content_box").css("opacity","0");
        },function(){
        $(".overlay").css('opacity','0');
         $("#content_box").css("opacity","0");
        $(".content_box").css("opacity","1");
     });
    
    $(".hex3").hover(function(){
        $(".hex3").css('cursor','pointer');
        $("#content_box").css("background-image","url('assets/img/android.png')");
        $("#content_box").css("opacity","1");
        $("#about_content").text("ANDROID");
        $(".content_box").css("opacity","0");
        },function(){
        $(".overlay").css('opacity','0');
        $("#content_box").css("opacity","0");
        $(".content_box").css("opacity","1");
     });
    
    $(".hex4").hover(function(){
        $(".hex4").css('cursor','pointer');
        $("#content_box").css("background-image","url('assets/img/pwa.png')");
        $("#content_box").css("opacity","1");
        $("#about_content").text("PROGRESSIVE WEB APP");
        $(".content_box").css("opacity","0");
        },function(){
        $(".overlay").css('opacity','0');
        $("#content_box").css("opacity","0");
        $(".content_box").css("opacity","1");
     });
    
    
    $(".hex8").hover(function(){
        $(".hex8").css('cursor','pointer');
        $("#content_box").css("background-image","url('assets/img/angularjs.png')");
        $("#content_box").css("opacity","1");
        $("#about_content").text("ANGULAR JS");
        $(".content_box").css("opacity","0");
        },function(){
        $(".overlay").css('opacity','0');
        $("#content_box").css("opacity","0");
        $(".content_box").css("opacity","1");
            });
    
     $(".hex7").hover(function(){
        $(".overlay").css('background-color','#3D5AFE');
        $(".overlay").css('opacity','1');
        $(".hex7").css('cursor','pointer');
         $("#content_box").css("background-image","url('assets/img/web_design.png')");
         $("#content_box").css("background-size","32%");
         $("#content_box").css("opacity","1");
        $("#about_content").text("WEB DESIGN");
         $(".content_box").css("opacity","0");
        },function(){
        $(".overlay").css('opacity','0');
         $("#content_box").css("opacity","0");
        $(".content_box").css("opacity","1");
         $("#content_box").css("background-size","20%");
     });
    
    $(".hex6").hover(function(){
        $(".overlay").css('background-color','#00B0FF');
        $(".overlay").css('opacity','1');
        $(".hex6").css('cursor','pointer');
        $("#content_box").css("background-image","url('assets/img/logo_design.png')");
         $("#content_box").css("background-size","25%");
        $("#content_box").css("opacity","1");
        $("#about_content").text("LOGO DESIGN");
        $(".content_box").css("opacity","0");
        },function(){
        $(".overlay").css('opacity','0');
        $("#content_box").css("opacity","0");
        $(".content_box").css("opacity","1");
        $("#content_box").css("background-size","20%");
     });
    
    $(".hex5").hover(function(){
        $(".overlay").css('background-color','#00E5FF');
        $(".overlay").css('opacity','1');
        $(".hex5").css('cursor','pointer');
        $("#content_box").css("background-image","url('assets/img/web_develpment.png')");
         $("#content_box").css("background-size","28%");
        $("#content_box").css("opacity","1");
        $("#about_content").text("WEB DEVELOPMENT");
        $(".content_box").css("opacity","0");
        },function(){
        $(".overlay").css('opacity','0');
        $("#content_box").css("opacity","0");
        $(".content_box").css("opacity","1");
        $("#content_box").css("background-size","20%");
     }); 
    
     $("#pikachu1").hover(function(){
         $(this).css('cursor','pointer');
         $(this).css('z-index','12');
         $("#pikachu2").css('transition','.3s ease');
         $("#pikachu2").css('filter','blur(1px)');
        },function(){
         $(this).css('z-index','5');
         $("#pikachu2").css('filter','blur(0px)');
     }); 
    
    $("#pikachu2").hover(function(){
        $(this).css('cursor','pointer');
        $(this).css('z-index','12');
        $("#pikachu1").css('filter','blur(1px)');
        $("#pikachu1").css('transition','.3s ease');     
    },function(){
        $("#pikachu1").css('filter','blur(0px)');
         $(this).css('z-index','4');
     }); 
    
       
    
      $("#ishop1").hover(function(){
          $(this).css('cursor','pointer');
          $(this).css('z-index','20');
          $("#ishop2").css('filter','blur(1px)');
          $("#ishop3").css('filter','blur(1px)');
        },function(){
          $(this).css('z-index','6');
          $("#ishop2").css('filter','blur(0px)');
          $("#ishop3").css('filter','blur(0px)');
     });
    
     $("#ishop2").hover(function(){
         $(this).css('cursor','pointer');
         $(this).css('z-index','20');
         $(this).css('transition','.5s ease');
         $("#ishop1").css('filter','blur(1px)');
         $("#ishop3").css('filter','blur(1px)');
        },function(){
         $(this).css('z-index','5');
         $("#ishop1").css('filter','blur(0px)');
         $("#ishop3").css('filter','blur(0px)');
     });
    
    $("#ishop3").hover(function(){
         $(this).css('cursor','pointer');
         $(this).css('z-index','20');
         $(this).css('filter','blur(0px)');
         $("#ishop1").css('filter','blur(2px)');
         $("#ishop1").css('transition','.3s ease');
         $("#ishop2").css('filter','blur(2px)');
         $("#ishop2").css('transition','.3s ease');
        },function(){
         $(this).css('z-index','4');
         $("#ishop1").css('filter','blur(0px)');
         $("#ishop2").css('filter','blur(0px)');
     });
    
    $("#design1_1").hover(function(){
         $(this).css('cursor','pointer');
         $(this).css('z-index','7');
         $(this).css('transition','.5s ease');
         $("#design1_2").css('filter','blur(2px)');
         $("#design1_2").css('transition','.3s ease');
         $("#design1_3").css('filter','blur(2px)');
         $("#design1_3").css('transition','.3s ease');
        },function(){
         $(this).css('z-index','4');
         $("#design1_2").css('filter','blur(0px)');
         $("#design1_3").css('filter','blur(0px)');
     });
    
     $("#design1_2").hover(function(){
         $(this).css('cursor','pointer');
         $(this).css('z-index','7');
         $(this).css('transition','.5s ease');
         $("#design1_1").css('filter','blur(2px)');
         $("#design1_1").css('transition','.3s ease');
         $("#design1_3").css('filter','blur(2px)');
         $("#design1_3").css('transition','.3s ease');
        },function(){
         $(this).css('z-index','5');
         $("#design1_1").css('filter','blur(0px)');
         $("#design1_3").css('filter','blur(0px)');
     });
    
    $("#design1_3").hover(function(){
         $(this).css('cursor','pointer');
         $(this).css('transition','.5s ease');
         $("#design1_1").css('filter','blur(2px)');
         $("#design1_1").css('transition','.3s ease');
         $("#design1_2").css('filter','blur(2px)');
         $("#design1_2").css('transition','.3s ease');
        },function(){
         $("#design1_1").css('filter','blur(0px)');
         $("#design1_2").css('filter','blur(0px)');
     });
    
    $("#design2_1").hover(function(){
         $(this).css('cursor','pointer');
         $(this).css('z-index','9');
         $(this).css('transition','.5s ease');
         $("#design2_2").css('filter','blur(2px)');
         $("#design2_2").css('transition','.3s ease');
         $("#design2_3").css('filter','blur(2px)');
         $("#design2_3").css('transition','.3s ease');
         $("#design2_4").css('filter','blur(2px)');
         $("#design2_4").css('transition','.3s ease');
        },function(){
         $(this).css('z-index','4');
         $("#design2_2").css('filter','blur(0px)');
         $("#design2_3").css('filter','blur(0px)');
         $("#design2_4").css('filter','blur(0px)');
     });
    
     $("#design2_2").hover(function(){
         $(this).css('cursor','pointer');
         $(this).css('z-index','9');
         $(this).css('transition','.5s ease');
         $("#design2_1").css('filter','blur(2px)');
         $("#design2_1").css('transition','.3s ease');
         $("#design2_3").css('filter','blur(2px)');
         $("#design2_3").css('transition','.3s ease');
         $("#design2_4").css('filter','blur(2px)');
         $("#design2_4").css('transition','.3s ease');
        },function(){
         $(this).css('z-index','5');
         $("#design2_1").css('filter','blur(0px)');
         $("#design2_3").css('filter','blur(0px)');
         $("#design2_4").css('filter','blur(0px)');
     });
    
    $("#design2_3").hover(function(){
         $(this).css('cursor','pointer');
         $(this).css('transition','.5s ease');
         $(this).css('z-index','9');
         $("#design2_1").css('filter','blur(2px)');
         $("#design2_1").css('transition','.3s ease');
         $("#design2_2").css('filter','blur(2px)');
         $("#design2_2").css('transition','.3s ease');
         $("#design2_4").css('filter','blur(2px)');
         $("#design2_4").css('transition','.3s ease');
        },function(){
         $(this).css('z-index','6');
         $("#design2_1").css('filter','blur(0px)');
         $("#design2_2").css('filter','blur(0px)');
         $("#design2_4").css('filter','blur(0px)');
     });
    
    $("#design2_4").hover(function(){
         $(this).css('cursor','pointer');
         $(this).css('transition','.5s ease');
         $(this).css('z-index','8');
         $("#design2_1").css('filter','blur(2px)');
         $("#design2_1").css('transition','.3s ease');
         $("#design2_2").css('filter','blur(2px)');
         $("#design2_2").css('transition','.3s ease');
         $("#design2_3").css('filter','blur(2px)');
         $("#design2_3").css('transition','.3s ease');
        },function(){
         $("#design2_1").css('filter','blur(0px)');
         $("#design2_2").css('filter','blur(0px)');
         $("#design2_3").css('filter','blur(0px)');
     });
    
    
     $("#android1").hover(function(){
         $(this).css('cursor','pointer');
         $(this).css('z-index','6');
         $(this).css('transition','.5s ease');
         $("#android2").css('filter','blur(2px)');
         $("#android2").css('transition','.3s ease');
        },function(){
         $(this).css('z-index','4');
         $("#android2").css('filter','blur(0px)');
     });
    
     $("#android2").hover(function(){
         $(this).css('cursor','pointer');
         $(this).css('z-index','6');
         $(this).css('transition','.5s ease');
         $("#android1").css('filter','blur(2px)');
         $("#android1").css('transition','.3s ease');
        },function(){
         $(this).css('z-index','5');
         $("#android1").css('filter','blur(0px)');
     });
    
    function navHover(){
        $(".mynav").css('top','0%');
        $(".mynav").css('background','rgba(0,0,0,.8)');
        $('#myLogo').css('cursor','pointer');
        $('#myLogo').css('top','10px'); 
        
    };
    
    function navUnhover(){
        $(".mynav").css('background','transparent'); 
        $(".mynav").css('top','-80px');
        $("#myLogo").css('top','-80px');
      
    };
    $(".mynav").hover(navHover,navUnhover);
    $("#myLogo").hover(navHover,navUnhover);
    
  
    bootstrapValidate('#email','email:Enter a valid Email Address');
});