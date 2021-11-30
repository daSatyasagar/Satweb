$(window).scroll(function(){
if($(window).scrollTop()){
  $("nav").addClass("scead");
}
else{
  $("nav").removeClass("scead");
}
});

$(".btn").click(function(){
   $(".links").toggle(".show");

});
