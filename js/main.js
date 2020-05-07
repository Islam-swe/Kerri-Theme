//function change the background of the navbar when scrolling
$(window).scroll(function(){
let aboutMeTop=$('#aboutMe').offset().top;
let scrolValue=$(window).scrollTop();
if(scrolValue>=(aboutMeTop-100)){
$('.navbar').css({backgroundColor:'rgba(0,0,0,0.5)',transition:'all 1s'})
$('.right-icon').fadeIn(500);
}
else{
$('.navbar').css('backgroundColor','transparent').css("transition",'all 1s')
$('.right-icon').fadeOut(500);
}
})

$('#btnUp').click(function(){
    $('body,html').animate({scrollTop:0},3000);
})
$('nav a').click(function(){
  let x= $(this).attr('href');
  let secTop=$(x).offset().top;
$('body').animate({scrollTop:secTop},3000);
})

$('a[href="#blog"]').click(function(){
    window.alert('hello');
})

$('#the-icon').click(function () {
  let divWidth=$('#color-box').outerWidth();
  let divLeft=$('.left-icon').css('left');

  if(divLeft=='0px'){
    $('.left-icon').animate({left:-`${divWidth}`},1000);
  }
  else{
    $('.left-icon').animate({left:"0px"},1000);
  }

  })

$('.color').click(function () {
  let color=$(this).css('backgroundColor');
  $('body').css('color',color);
})
$('#color-box img').click(function () {
 let url= $(this).attr('src');
 $('header').css({backgroundImage:`url(${url})`});
})
$(document).ready(function (param) {  
  $('#loading-layer').fadeOut(3000,function () {
    $('body').css({overflow:'auto'})
    });
 
})
