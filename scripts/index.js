var html = "hidden";
var css = "hidden";
var js = "hidden";

var done = true;

var flag = true;

$(document).ready(function(){

  if ($(window).width() > 900) {
    flag = true;
    $(".flexbox-container").css("flex-direction", "row");
    $(".grid-container").css("justify-content", "space-evenly");
  }else{
    flag = false;
    $(".flexbox-container").css("flex-direction", "column");
    $(".grid-container").css("justify-content", "initial");
  }

  $("body,html").css("visibility", "visible");

  $(window).resize(function() {
    if ($(window).width() > 900) {
      if(flag != true){
        $(".flexbox-container").css("flex-direction", "row");
        $(".grid-container").css("justify-content", "space-evenly");
        flag = true;
      if(html != "hidden"){
      $(".course-content").show();
      $(".html-content").show();
      $("#invisible-html").hide();
    }else if(css != "hidden"){
      $(".course-content").show();
      $(".css-content").show();
      $("#invisible-css").hide();
    }else if(js != "hidden"){
      $(".course-content").show();
      $(".js-content").show();
      $("#invisible-js").hide();
    }
    }
   }else {
    if(flag != false){
      $(".flexbox-container").css("flex-direction", "column");
      $(".grid-container").css("justify-content", "initial");

      $(".course-content").hide();
      $(".html-content").hide();
      $(".css-content").hide();
      $(".js-content").hide();

      if(html != "hidden"){
        $("#invisible-html").show();
        if(flag != false){
          scrollToHTML(); 
        }
      }else if(css != "hidden"){
        $("#invisible-css").show();
        if(flag != false){
          scrollToCSS();
        }
      }else if(js != "hidden"){
        $("#invisible-js").show();
        if(flag != false){
          scrollToJS();
        }
      }
      flag = false;
    }
   }
  });

  // ========================= scrolling functions ====================================
  scrollToHTML=function() {
    $("body,html").animate({scrollTop: $("#html-container").offset().top - 50}, 800);
  }

  scrollToCSS=function() {
    $("body,html").animate({scrollTop: $("#css-container").offset().top - 50}, 800);
  }

  scrollToJS=function() {
    $("body,html").animate({scrollTop: $("#js-container").offset().top - 50}, 800);
  }
  //================================================================================

  $("#html-container").click(function(){
    if(flag == true){
    if(html == "hidden" && css == "hidden" && js == "hidden" && done == true){
      done = false;
      $(".course-content").show("slow","linear", function(){
        $(".html-content").show("slow","linear", function(){
          done = true;
        });
      });
      html = "shown";
    }else if(css != "hidden" && done == true){
      done = false;
      $(".css-content").hide("slow", "linear", function(){
        $(".html-content").show("slow", "linear", function(){
          done = true;
        });
      });
      html = "shown";
      css = "hidden";
    }else if(js != "hidden" && done == true){
      done = false;
      $(".js-content").hide("slow", "linear", function(){
        $(".html-content").show("slow", "linear", function(){
          done = true;
        });
      });
      html = "shown";
      js = "hidden";
    }
  }else{
    if(html == "hidden" && css == "hidden" && js == "hidden" && done == true){
      done = false;
      $("#invisible-html").show("slow","linear", function () {
        done = true;
         scrollToHTML();
      });
      html = "shown";
    }else if(css != "hidden" && done == true){
      done = false;
      $("#invisible-css").hide("slow", "linear", function(){
        $("#invisible-html").show("slow", "linear", function(){
          done = true;
          scrollToHTML();
        });
      });
      html = "shown";
      css = "hidden";
    }else if(js != "hidden" && done == true){
      done = false;
      $("#invisible-js").hide("slow", "linear", function(){
        $("#invisible-html").show("slow", "linear", function(){
          done = true;
          scrollToHTML();
        });
      });
      html = "shown";
      js = "hidden";
    }
  }
  });

  $("#css-container").click(function(){
    if(flag == true){
    if(html == "hidden" && css == "hidden" && js == "hidden" && done == true){
      done = false;
      $(".course-content").show("slow","linear", function(){
        $(".css-content").show("slow","linear", function(){
          done = true;
        });
      });
      css = "shown";
    }else if(html != "hidden" && done == true){
      done = false;
      $(".html-content").hide("slow", "linear", function(){
        $(".css-content").show("slow", "linear", function(){
          done = true;
        });
      });   
      css = "shown";
      html = "hidden";
    }else if(js != "hidden" && done == true){
      done = false;
      $(".js-content").hide("slow", "linear", function(){
        $(".css-content").show("slow", "linear", function(){
          done = true;
        });
      });
      css = "shown";
      js = "hidden";
    }
  }else{
    if(html == "hidden" && css == "hidden" && js == "hidden" && done == true){
      done = false;
        $("#invisible-css").show("slow","linear", function(){
          scrollToCSS();
          done = true;
        });
      css = "shown";
    }else if(html != "hidden" && done == true){
      done = false;
      $("#invisible-html").hide("slow", "linear", function(){
        $("#invisible-css").show("slow", "linear", function(){
          done = true;
          scrollToCSS();
        });
      });   
      css = "shown";
      html = "hidden";
    }else if(js != "hidden" && done == true){
      done = false;
      $("#invisible-js").hide("slow", "linear", function(){
        $("#invisible-css").show("slow", "linear", function(){
          done = true;
          scrollToCSS();
        });
      });
      css = "shown";
      js = "hidden";
    }
  }
  });

  $("#js-container").click(function(){
    if(flag == true){
    if(html == "hidden" && css == "hidden" && js == "hidden" && done == true){
      done = false;
      $(".course-content").show("slow","linear", function(){
        $(".js-content").show("slow","linear", function(){
          done = true;
        });
      });
      js = "shown";
    }else if(html != "hidden" && done == true){
      done = false;
      $(".html-content").hide("slow", "linear", function(){
        $(".js-content").show("slow", "linear", function(){
          done = true;
        });
      });
      js = "shown";
      html = "hidden";
    }else if(css != "hidden" && done == true){
      done = false;
      $(".css-content").hide("slow", "linear", function(){
        $(".js-content").show("slow", "linear", function(){
          done = true;
        });
      });
      js = "shown";
      css = "hidden";
    }
  }else{
    if(html == "hidden" && css == "hidden" && js == "hidden" && done == true){
      done = false;
        $("#invisible-js").show("slow","linear", function(){
          scrollToJS();
          done = true;
        });
      js = "shown";
    }else if(html != "hidden" && done == true){
      done = false;
      $("#invisible-html").hide("slow", "linear", function(){
        $("#invisible-js").show("slow", "linear", function(){
          done = true;
          scrollToJS();
        });
      });
      js = "shown";
      html = "hidden";
    }else if(css != "hidden" && done == true){
      done = false;
      $("#invisible-css").hide("slow", "linear", function(){
        $("#invisible-js").show("slow", "linear", function(){
          done = true;
          scrollToJS();
        });
      });
      js = "shown";
      css = "hidden";
    }
  }
  });
});
