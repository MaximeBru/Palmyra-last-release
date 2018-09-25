
$(document).ready(function() {

    $(document).foundation();
        // Collapse responsive-menu after clicking link when on responsive mode:
    // http://stackoverflow.com/questions/18516696/how-can-i-close-the-foundation-topbar-menu-when-a-link-is-clicked
    // http://foundation.zurb.com/sites/docs/media-queries.html
    $('#responsive-menu li a, .top-bar-title a').click(function() {
  
      if (Foundation.MediaQuery.atLeast('large')) {
        // True if large
        $('#responsive-menu').css('display', 'inline');
      }
      else {
        $('#responsive-menu').css('display', 'none');
      }
      
    });
  
  
    // Anchor smooth scroll
    $('a.scroll, #navbar a, .misc a').click(function(e) {
      e.preventDefault();
      $('body, html').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 750);
    });
  
  /* ======================================== */
  });
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 1400) {
		$('.firstPerc').addClass('rate10');
		$('.SecPerc').addClass('rate20');
		$('.thirdPerc').addClass('rate30');
    $('.LastPerc').addClass('rate40');
/* graphique */
    $('#isdat1').addClass('igData1');
    $('#isdat2').addClass('igData2');
    $('#isdat3').addClass('igData3');
    $('#isdat4').addClass('igData4');
    $('#isdat5').addClass('igData5');
    $('#isdat6').addClass('igData6');
    
    } else {
   /*    graph circular */
		$('.firstPerc').removeClass('rate10');
		$('.SecPerc').removeClass('rate20');
		$('.thirdPerc').removeClass('rate30');
    $('.LastPerc').removeClass('rate40');
    /* garphique */
    $('#isdat1').removeClass('igData1');
    $('#isdat2').removeClass('igData2');
    $('#isdat3').removeClass('igData3');
    $('#isdat4').removeClass('igData4');
    $('#isdat5').removeClass('igData5');
    $('#isdat6').removeClass('igData6');
    }
});


  

  
 


 