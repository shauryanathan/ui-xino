$(document).ready(function(){
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    if (wScroll > $('.next').offset().top - ($(window).height()/1.5)){
      $('.para-one').each(function(){
        $('.para-one').addClass('is-showing');
      });
    }
  });
});
