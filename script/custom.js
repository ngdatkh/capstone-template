$(document).ready(function() {     
  $(".hamburger").click(function(event) {    
		event.preventDefault();
		event.stopPropagation();
    $(".hamburger").toggleClass("active");
    $("nav ul").toggleClass("active");
  });
  
  //Click outside the menu will close it
  $(document).click(function () {
		if($(".hamburger").hasClass("active")) {
			$(".hamburger").removeClass("active");
		}
		if($("nav ul").hasClass("active")) {
			$("nav ul").removeClass("active");
		}
	});
});