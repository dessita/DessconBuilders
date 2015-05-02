         
( function( $ ) 
 {
  $(".navbar-wrapper").load("includes/navbar.html", function()  { 
  
	  

	  var curPage = location.pathname.split("/")[1];
	  
	$("#"+curPage.substr.slice(-5)+"-button").addClass("active");
	
  $('.navbar a').on("click", function(event) {
  
	  $(event.target).parent("li").addClass("active");
   /*  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    } */
  });
  });  
 
       $(".footer").load("includes/footer.html");
  
 


    
})( jQuery );