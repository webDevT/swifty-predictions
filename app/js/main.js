$(function(){
	$('.menu-btn').click(function(){
		$(this).toggleClass('active');
    $('.header__menu').slideToggle();
	})
 if( window.innerWidth <= 768 ){
$('.login-button, .header__menu-link').click(function(){
  $('.menu-btn').removeClass('active');
    $('.header__menu').slideUp();
})
}
//start slider init
$('.slider').slick({
  slidesToShow: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 5000,
  fade: true,
  dots: true
})
//end slider intit

//start slider init
 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.video-slider'
});
$('.video-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  focusOnSelect: true,
  variableWidth: true,
  useTransform: false,
  touchMove: false,
  infinite: false,
  responsive: [
    {
      breakpoint: 992,
      settings: { 
      infinite: true,
      touchMove: true,  
      useTransform: true, 
        //variableWidth: false,
        //slidesToShow: 4
      }
    },
    {
      breakpoint: 480,
      settings: {
        
      }
    }
  ]

});
//end slider intit

//start cookies fadeOut

//end cookies fadeOut

//start modal
$('.open-modal').click(function(){
  $('.modal-window--login').fadeIn();
})
$('.close').click(function() {
  $('.modal-window').fadeOut();
})
jQuery(function($){
  $(document).mouseup(function (e){ 
    var searchWrapper = $(".modal__content"); 
     var searchRow = $(".modal-window"); 
    if (!searchWrapper.is(e.target) 
        && searchWrapper.has(e.target).length === 0) { 
      searchRow.fadeOut();
    }
  });
});
// $('.submit-button').click(function(){
//    //event.preventDefault();
//   $('.modal-window--thank-you').fadeIn();
// })
//end modal

//start read more button
 $(".read-more").on("click", function () {
        var txt = $(".hide-text").is(':visible') ? 'Read More' : 'Read Less';
        $(".read-more").text(txt);
        $(this).prev('.hide-text').slideToggle();
    });
//end read more button

//start faq
$('.faq__header').click(function(){
  $(this).parent().toggleClass('active');
  $(this).parent().find('.faq__text').slideToggle();
})
//end faq


});

if (!$.cookie('alert')) {
    $( ".cookies" ).show();
    $(".cookies__button").click(function() {
        $( ".cookies" ).fadeOut( "slow" );
        var date = new Date();
        date.setTime(date.getTime() + 24 * 60 * 60 * 1000); 
        $.cookie('alert', true, { expires: date });
    });
}