
/* Tabs images and content change jquery code */
$(document).ready(function() {
    $('.tab2-inner-content').hide();
    $("#tab1").click(function() {
        $("#tab1-content").removeClass('textblock-2-tabcontent2')
        $("#tab1-content").addClass('textblock-2-tabcontent1')
        $('.tab1-inner-content').show();
        $('.tab2-inner-content').hide();
        return false;
    });
    $("#tab2").click(function() {
        $("#tab1-content").removeClass('textblock-2-tabcontent1')
        $("#tab1-content").addClass('textblock-2-tabcontent2')
        $('.tab1-inner-content').hide();
        $('.tab2-inner-content').show();
        return false;
    });

});



/* Footer hide/show when move up and down */
$(window).scroll(function(event) {
    function footer()
      {
          var scroll = $(window).scrollTop(); 
          if(scroll > 50)
          { 
              $("#footer").fadeIn("slow").addClass("show");
          }
          else
          {
              $("#footer").fadeOut("slow").removeClass("show");
          }
          
          clearTimeout($.data(this, 'scrollTimer'));
          $.data(this, 'scrollTimer', setTimeout(function() {
              if ($('#footer').is(':hover')) {
              footer();
          }
              else
              {
                $("#footer").fadeOut("slow");
              }
      }, 2000));
      }
      footer();
  });


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("my-links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  


/* Carosal jquery */
