(function ($) {  

  $(document).ready(function() {  
      $('body').niceScroll();
  });

  $('.header-menu__btn').click(function() {
    $(this).toggleClass('active');
    $('.header-navbar__list').toggleClass('active');
  });

})(jQuery);

  
$(document).ready(function(){

  $('.header-navbar__btn').on('click', function() {
    $(this).toggleClass('active');
    $('.header-navbar__list').toggleClass('active');
  });

});