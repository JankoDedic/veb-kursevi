$(document).ready(function(){
    $("#submit").click(function(){
        if($("#fname").val() && $("#lname").val() && $("#phone").val() && $("#email").val()){
            if($("#html").prop("checked") != true && $("#css").prop("checked") != true && $("#js").prop("checked") != true){
                alert("Izaberite barem jedan od ponudjenih kurseva!");
            }else{
                if(checkEmail($("#email").val()) != true){
                    alert("Uneli ste neispravan e-mail!");
                }
                if(checkPhone($("#phone").val()) != true){
                    alert("Uneli ste neispravan broj telefona!");
                }
            }
        }
    });

    // == check functions == //

    checkPhone = function(phone){
        var PhoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
        return PhoneRegex.test(phone);
    }

    checkEmail = function(email){
        var EmailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return EmailRegex.test(email);
    }

    // === total === //

    var total = 0;

    var html = 5900;
    var css = 6900;
    var js = 6900;

    $("#html").click(function(){
        if($("#html").prop("checked") == true){
            total = total + html;
        }else {
            total = total - html;
        }
        upadte();
    });

    $("#css").click(function(){
        if($("#css").prop("checked") == true){
            total = total + css;
            console.log(total);
        }else {
            total = total - css;
        }
        upadte();
    });

    $("#js").click(function(){
        if($("#js").prop("checked") == true){
            total = total + js;
        }else {
            total = total - js;
        }
        upadte();
    });

    upadte=function(){
        $("#sum").text("TOTAL: " + total + "RSD");
    };

});

