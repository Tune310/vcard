$(document).ready(function(){
  $('#about').on('click', function(clickEvent) {
  	$('.content').html('');
  })
  $('#home').on('click', function(clickEvent) {
  	var s = ''
    s += '  <h2>Hello, I\'m John</h2>';
    s += '  <p> Project Manager /  Art Director</p>';
    s += '  <a href class="vcard">Download VCard</a>';
 	// $('.content').fadeOut("slow");
 	// $('.content').fadeIn("slow");
 	$('.content').html(''); 	
 	
 	$(".content")
  		.css('opacity', 0)
  		// .fadeOut('3000')
  		.slideUp('3000')
  		// .append(s)
  		.animate(
    	{ opacity: 1 },
    	{ queue: false, duration: '100' }
  )
  		// .fadeOut('3000')
  		.slideDown('3000')
  		.append(s)
  		.animate(
    	{ opacity: 1 },
    	{ queue: false, duration: '100' }
  );
 	


  })

});