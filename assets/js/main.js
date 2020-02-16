$("document").ready(function () {
    $(".tab-slider--body").hide();
    $(".tab-slider--body:first").show();
});

$(".tab-slider--nav li").click(function () {
   
    $(".tab-slider--body").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();
    if ($(this).attr("rel") == "tab2") {
        $('.tab-slider--tabs').addClass('slide');
    } else {
        $('.tab-slider--tabs').removeClass('slide');
    }
    $(".tab-slider--nav li").removeClass("active");
    $(this).addClass("active");
});

$(".sample-link").click(function() {
    //alert( "Handler for .click() called." );
  });


var button = document.getElementsByClassName(".sample-link");

function aMethod(string){
   
    var Place = document.getElementById("methods");
    Place.innerText = string;  
}

if (window.location.hash) {
    
    var url = window.location.hash;
    //alert(url);
    location.href = url;
    history.replaceState(null, null, url);
}