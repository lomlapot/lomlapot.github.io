//$(document).ready(function(){
//"use strict"
// -------   Active Mobile Menu--------
//-----------no-jquery------------------
const menu_toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menu_toggle.addEventListener("click", function (e) {
  menu.classList.toggle("hide");
  this.classList.toggle("active");
});

/*  $(".menu-toggle").on('click', function(e){
        e.preventDefault();
        $(".menu").toggleClass('hide');
        $(this).toggleClass("active");
    }); */
/*    $(window).load(function(){ $('.preloader').delay(500).slideUp('slow'); // set duration in brackets    
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
let options = {
  rootMargin: "0px",
  threshold: 0.3,
};

let target = document.querySelector("#newborn");
let arrow = document.querySelector(".scroll-to-top");
const animationM = document.querySelector(".newmia");
const observer = new IntersectionObserver((entries) => {
  entries.map((entry) => {
    console.log(entry.target);
  });
  arrow.classList.toggle("show");
  animationM.classList.toggle("mia-anim");
}, options);
observer.observe(target);
//----------------------------------------------
const videoObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const video = entry.target;
      if (video.currentTiime === 0) return;
      if (!entry.isIntersecting) {
        video.pause();
        video.currentTime = 0;
      }
    });
  },
  { threshold: [0.1, 0.9] }
);
document
  .querySelectorAll("video")
  .forEach((video) => videoObserver.observe(video));
//});
//--------------------------------------------

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(" a");

const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      links.forEach((link) => link.classList.remove("active-item"));
      const activeId = entry.target.id;
      const activeLink = document.querySelector(`a[href="#${activeId}"]`);
      if (activeLink) {
        activeLink.classList.add("active-item");
      }
    }
  });
};

const sectionObserver = new IntersectionObserver(callback, {
  threshold: [0.2, 0.8],
});

sections.forEach((sec) => {
  sectionObserver.observe(sec);
});

//____________остановка youtube ____________

let iframes = document.querySelectorAll('iframe');

// Настройка Intersection Observer
const observerYouTube = new IntersectionObserver(entries=>{
  //  Callback для Intersection Observer
  entries.forEach(entry => {
    const iframe = entry.target;

    if (!entry.isIntersecting) {
      iframe.contentWindow.postMessage(JSON.stringify({event: 'command', func:'pauseVideo', args: []}),'*');//  на паузу
    }
  })

}, {
  threshold: 0.5 // Элемент считается видимым, если 50% его области в пределах экрана
});

// Подключение всех iframe
iframes.forEach(iframe => {
  observerYouTube.observe(iframe);
});

