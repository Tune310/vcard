$(document).ready(function(){
  $('#about').on('click', function(clickEvent) {
  	$('.content').html('');
  })
  $('#home').on('click', function(clickEvent) {
  	var s = '';
    s += '<div class="content">';
    s += '  <h2>Hello, I\'m John</h2>';
    s += '  <p> Project Manager /  Art Director</p>';
    s += '  <a href class="vcard">Download VCard</a>';
    s += '</div>';
 	$('.content').fadeOut("slow");
 	$('.content').fadeIn("slow"); 	
 	$('.content').html(s);

  })

});