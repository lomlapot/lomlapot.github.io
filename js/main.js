$(document).ready(function(){
	
	"use strict"
	 // -------   Active Mobile Menu-----//

    $(".menu-toggle").on('click', function(e){
        e.preventDefault();
        $(".menu").toggleClass('hide');
        $(this).toggleClass("active");
    });
/*    $(window).load(function(){
      $('.preloader').delay(500).slideUp('slow'); // set duration in brackets    
    });     */

      // Плавная прокрутка через css
/*  $("a.scrollto").click(function() {
      var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
      }, 1500);
      return false;
    });     */

  // Кнопка "наверх" через intersection observer

/*  var btn = $('.scroll-to-top')

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show1');
    } else {
      btn.removeClass('show1');
    }
  });
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '30');
  });
	*/

	let target = document.querySelector("#newborn");
	let arrow = document.querySelector(".scroll-to-top");
	const observer = new InresectionObserver(entries =>{
		
		
	})
	
	
	
    	  
});

