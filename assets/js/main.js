(function ($) {  

  $(document).ready(function() {  
      $('body').niceScroll();
  });

  $('.navbar-btn').on('click', function() {
    $(this).toggleClass('active');
    $('.header-navbar__list').stop(true, true).slideToggle(500);
  });


})(jQuery);

