
// const widthScreen = window.innerWidth;

if ( window.innerWidth <= 780 ) {
     const Selector = document.getElementById("menu-container");
    //  Selector.classList.remove("menu-container");
     Selector.classList.add("menu");
} 
$(document).ready(function() {
   
     $('.item-header').click(function() {
          // $(this).addClass('active').siblings().removeClass('active');
          if ( !($(this).hasClass('active')))
          {
               $(this).addClass('active').siblings().removeClass('active');
          }
          else{
               $(this).removeClass('active').siblings().removeClass('active');
          }
         
     })
     $('.tab-item').click(function() {
          $(this).addClass('active').siblings().removeClass('active');
     })

     $('.tab-item').click(function() {

          const value = $(this).attr('data-filter');
          if (value == 'Popular'){
               $('.card').show('1000');
          }
          else{
               $('.card').not('.'+value).hide('1000');
               $('.card').filter('.'+value).show('1000');
          }
     })

     $(".humborger").click(function() {
          $('ul').toggleClass('show');

     })
})