
//Click Or Hover btn min menu

$(function() {
   'use strict';
    $('.our-button').on('click', function() {
        $(this).toggleClass('transformed')
    });
});

	
// laoding-overlay
		
$(".laoding").fadeOut(1000);




  
     
  
// toTop		
	
				
$(document).ready(function(){
			
      $('body').append('<div id="toTop" class="btn  hvr-wobble-vertical"><span class="fas fa-angle-up "></span>   </div>');
    	$(window).scroll(function () {
			if ($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
				$('#toTop').fadeOut();
			}
		}); 
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 900);
        return false;
		
		
		
    });
	
	
});






 //for scrollspy

    $('li a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        $(".nav-item").each(function( index ) {
            $(this).removeClass("active");
        });
        $(target+"Nav").addClass("active");
        var pos=$(target).offset().top-0;
        $('html, body').animate({
            'scrollTop': pos
        }, 1500, 'swing');
        new WOW().init();
    });




  
  //Type Write Effects
    
   var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };