$(document).ready(function(){
  // $('#about').on('click', function(clickEvent) {
  // 	$('.content').html('');
  // })
  $('#home').on('click', function(clickEvent) {
  	var s = ''
    s += '<div id="homeContainer" style="display: none;">';
    s += '  <h2>Hello, I\'m John</h2>';
    s += '  <p> Project Manager /  Art Director</p>';
    s += '  <a href class="vcard">Download VCard</a>';
    s += '</div>';

     var slider = function(e) {
    
    $(".content").children().slideUp();
    $(".content").append(s);

    // alert('yo');
    function sliderDown(e) {
      $("#homeContainer").delay(650).slideDown(300);
      console.log($(s));

      // alert('working')
    }
    sliderDown();
  }
  slider();

  })

  $('#about').on('click', function(clickEvent) {
    // $("ul.nav a").slide('slow').hasClass('active');
    var s = ''
    s += '<div id="aboutContainer" style="display: none;">';
    s += '  <div id="avatarContainer">';
    s += '    <img src="css/images/pic_100x100.jpg">';
    s += '</div>';



    var slider = function(e) {
    
    $(".content").children().slideUp();
    $(".content").append(s);

    // alert('yo');
    function sliderDown(e) {
      $("#aboutContainer").delay(650).slideDown(300);
      console.log($(s));

      // alert('working')
    }
    sliderDown();
  }
  slider();

  })

  // LOOP
  var navItems = $("ul.nav").find('a');


  for ( var i = 0; i < navItems.length; i++ ) (function(i){ 
   navItems[i].onclick = function() {
      console.log(navItems[i]);
      console.log(this);
      $("ul.nav a").removeClass('active');
      $(this).fadeIn().addClass('active');
   }
  })(i);

    
  

  $("ul.nav a").on('click', function(clickEvent){
    
    console.log(clickEvent);

  })



});

// Slider Function///////////////////////////////////////////////

// var slider = function(e) {
    
//     $(".content").children().slideUp();
//     $(".content").append(s);

//     // alert('yo');
//     function sliderDown(e) {
//       $("#aboutContainer").delay(650).slideDown(300);
//       console.log($(s));

//       // alert('working')
//     }
//     sliderDown();
//   }
//   slider();