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
    s += '  </div>';
    s += '  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>'
    s += '  <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>'
    s += '  <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>'
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

$('#work').on('click', function(clickEvent) {
    // $("ul.nav a").slide('slow').hasClass('active');
    var s = ''
    s += '<div id="workContaier" style="display: none;">';
    s += '  <div class="row">';
    s += '    <ul>';
    s += '      <li class="work-one"><img src="css/images/work-1.jpg"></li>';
    s += '      <li class="work-two"><img src="css/images/work-2.jpg"></li>';
    s += '      <li class="work-three"><img src="css/images/work-3.jpg"></li>';
    s += '      <li class="work-one"><img src="css/images/work-1.jpg"></li>';
    s += '      <li class="work-two"><img src="css/images/work-2.jpg"></li>';
    s += '    </ul>';
    s += '    <ul>';
    s += '      <li class="work-one"><img src="css/images/work-1.jpg"></li>';
    s += '      <li class="work-two"><img src="css/images/work-2.jpg"></li>';
    s += '      <li class="work-three"><img src="css/images/work-3.jpg"></li>';
    s += '      <li class="work-one"><img src="css/images/work-1.jpg"></li>';
    s += '      <li class="work-two"><img src="css/images/work-2.jpg"></li>';
    s += '    </ul>';
    s += '  </div>';
    s += '</div>';



    var slider = function(e) {
    
    $(".content").children().slideUp();
    $(".content").append(s);

    // alert('yo');
    function sliderDown(e) {
      $("#workContaier").delay(650).slideDown(300);
      console.log($(s));

      // alert('working')
    }
    sliderDown();
  }
  slider();

  })

$('#social').on('click', function(clickEvent) {
    // $("ul.nav a").slide('slow').hasClass('active');
    var s = ''
    s += '<div id="social" style="display: none;">';
    s += '  <div class="row">';
    s += '    <ul>';
    s += '      <li class="work-one"><img src="css/images/work-1.jpg"></li>';
    s += '      <li class="work-two"><img src="css/images/work-2.jpg"></li>';
    s += '      <li class="work-three"><img src="css/images/work-3.jpg"></li>';
    s += '      <li class="work-one"><img src="css/images/work-1.jpg"></li>';
    s += '      <li class="work-two"><img src="css/images/work-2.jpg"></li>';
    s += '    </ul>';
    s += '    <ul>';
    s += '      <li class="work-one"><img src="css/images/work-1.jpg"></li>';
    s += '      <li class="work-two"><img src="css/images/work-2.jpg"></li>';
    s += '      <li class="work-three"><img src="css/images/work-3.jpg"></li>';
    s += '      <li class="work-one"><img src="css/images/work-1.jpg"></li>';
    s += '      <li class="work-two"><img src="css/images/work-2.jpg"></li>';
    s += '    </ul>';
    s += '  </div>';
    s += '</div>';



    var slider = function(e) {
    
    $(".content").children().slideUp();
    $(".content").append(s);

    // alert('yo');
    function sliderDown(e) {
      $("#workContaier").delay(650).slideDown(300);
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