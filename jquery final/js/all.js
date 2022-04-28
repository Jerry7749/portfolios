$(document).ready(function() {
  const swiper = new Swiper('.swiper', {
    
    
    
    autoplay: { delay: 5000,    },
   
    
    
    pagination: { el: '.swiper-pagination',clickable:true },
    navigation: { nextEl: '.swiper-button-next',prevEl: '.swiper-button-prev',},
  
  });

  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    
  });

  //product的下拉式選單
  $('.topbar>ul>li>a').click(function(event){
      event.preventDefault();
      event.stopPropagation();
      $(this).toggleClass('active');
      $(this).parent().siblings().find('a').removeClass('active');
      $(this).parent().siblings().find('ul').slideUp();
      $(this).parent().find('ul').slideToggle();
  

  });
  $('body,.container ').click(function(event) {
    const aLink = $('.topbar>ul>li>a')
    console.log(aLink)
    console.log($(this))
    event.preventDefault();
    aLink.removeClass('active');
    aLink.parent().siblings().find('a').removeClass('active');
    aLink.parent().siblings().find('ul').slideUp();
    aLink.parent().find('ul').slideUp();
});




  //TOP功能
  $('.top a').click(function (event) { 
    event.preventDefault();
    $('html,body').animate({scrollTop:0},1000)

    
  });

  

  


});

// speed:3000,     loop: true,  effect:'fade',
 
