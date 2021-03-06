// Connected footer and header with pages
  $(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");
  });


$(document).ready(function() {

  // Scrolling class for header
  window.onscroll = function() {myFunction()};

  var header = document.getElementById("header");
  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }


  // Slick carousel
  $('#carousel').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2200,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  (function() {
      var nav = document.getElementById('navbarsExampleDefault');
      var anchor = nav.getElementsByTagName('a');
      var current = window.location.pathname.split('/')[1];

      for (var i = 0; i < anchor.length; i++){
          if(current ^= anchor[i].href){
              anchor[i].className = "active";
          }
      }
  })();


  // Touch slider on mobile
  $("#slide-carousel").swiperight(function() {
      $(this).carousel('prev');
    });
   $("#slide-carousel").swipeleft(function() {
      $(this).carousel('next');
   });


});
