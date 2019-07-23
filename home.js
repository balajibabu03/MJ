$(document).ready(function () {

    //Click Event Function-IIFE
    (function clickfunction(){
        //Nav icon click events 
        $("#Home_report").addClass("active");
        $("#Home_report").click(function(){
            $("#Features_report").removeClass("active");
            $("#Home_report").addClass("active");
            $("#Pricing_report").removeClass("active");
            $("#Contact_report").removeClass("active"); 
        });

        $("#Features_report").click(function(){
            $("#Features_report").addClass("active");
            $("#Home_report").removeClass("active");
            $("#Pricing_report").removeClass("active");
            $("#Contact_report").removeClass("active");
        });

        $("#Pricing_report").click(function(){
            $("#Features_report").removeClass("active");
            $("#Home_report").removeClass("active");
            $("#Pricing_report").addClass("active");
            $("#Contact_report").removeClass("active");
        });

        $("#Contact_report").click(function(){
            $("#Features_report").removeClass("active");
            $("#Home_report").removeClass("active");
            $("#Pricing_report").removeClass("active");
            $("#Contact_report").addClass("active");
        });

    })();

    window.onscroll = function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }


  });