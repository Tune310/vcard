
$(document).ready(function(){

  $(".fancybox").fancybox({
      openEffect: 'elastic',
      closeEffect: 'elastic',
      prevEffect: 'fade',
      nextEffect: 'fade',
      fitToView: true, // images won't be scaled to fit to browser's height
      maxWidth: '90%', // images won't exceed the browser's width
      width    : 'auto',
      height   : 'auto',
      beforeShow : function() {
          console.info( this ); //Current object
          console.info( this.element ); //Group
          console.info( this.group ); // Element (link)
          console.info( this.index + 1); // Element index in the group
          this.title = '<span> ' + 'Image ' + (this.index + 1) + ' / ' + ($(".fancybox").length) + ' ' + ' <p>Lorem</p>' + '</span>'; // Example of changing the title
      },
      helpers:  {

              title : {

                  type : 'over',

              }

          }

      });
  });   
  
  
  // Fancy Box image modal
$("#workContainer").on('click', '.fancybox', function(clickEvent) {
  var images = $("img")
  for (var i = 0; i < images.length; i++) {
    console.log(images[i]);
  };
})



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
    s += '<div id="workContainer" style="display: none;">';
    s += '  <div class="row">';
    s += '    <ul>';
    s += '      <li class="work-one"><a class="fancybox" rel="group" href="css/images/work-1_big.jpg" title="Lorem"><img src="css/images/work-1.jpg" alt="" /></a></li>';
    s += '      <li class="work-two"><a class="fancybox" rel="group" href="css/images/work-2_big.jpg"><img src="css/images/work-2.jpg"></a></li>';
    s += '      <li class="work-three"><a class="fancybox" rel="group" href="css/images/work-3_big.jpg"><img src="css/images/work-3.jpg"></a></li>';
    s += '      <li class="work-one"><a class="fancybox" rel="group" href="css/images/work-1_big.jpg" title="Lorem"><img src="css/images/work-1.jpg" alt="" /></a></li>';
    s += '      <li class="work-two"><a class="fancybox" rel="group" href="css/images/work-2_big.jpg"><img src="css/images/work-2.jpg"></a></li>';
    s += '    </ul>';
    s += '    <ul>';
    s += '      <li class="work-one"><a class="fancybox" rel="group" href="css/images/work-1_big.jpg" title="Lorem"><img src="css/images/work-1.jpg" alt="" /></a></li>';
    s += '      <li class="work-two"><a class="fancybox" rel="group" href="css/images/work-2_big.jpg"><img src="css/images/work-2.jpg"></a></li>';
    s += '      <li class="work-three"><a class="fancybox" rel="group" href="css/images/work-3_big.jpg"><img src="css/images/work-3.jpg"></a></li>';
    s += '      <li class="work-one"><a class="fancybox" rel="group" href="css/images/work-1_big.jpg" title="Lorem"><img src="css/images/work-1.jpg" alt="" /></a></li>';
    s += '      <li class="work-two"><a class="fancybox" rel="group" href="css/images/work-2_big.jpg"><img src="css/images/work-2.jpg"></a></li>';
    s += '    </ul>';
    s += '  </div>';
    s += '</div>';

    var slider = function(e) {
    $(".content").children().slideUp();;
    $("#workContainer").remove();
    


    // alert('yo');
    function sliderDown(e) {
      $(".content").append(s)
      $("#workContainer").delay(650).slideDown(300);
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
    s += '<div id="socialContainer" style="display: none;">';
    s += '    <ul>';
    s += '      <li><img src="css/images/twitter_32.png" /><a href><strong>Twitter</strong><br>www.linkedin.com/in/johndoevcard </a></li>';
    s += '      <li><img src="css/images/flickr_32.png" /><a href><strong>Flickr</strong><br>www.flickr.com/johndoevcardpage </a></li>';
    s += '      <li><img src="css/images/lastfm_32.png" /><a href><strong>Last.fm</strong><br>www.last.fm/johndoevcardpage </a></li>';
    s += '      <li><img src="css/images/linkedin_32.png" /><a href><strong>Linkedin</strong><br>www.linkedin.com/in/johndoevcard </a></li>';
    s += '    </ul>';
    s += '    <ul>';
    s += '      <li><img src="css/images/facebook_32.png" /><a href><strong>Facebook</strong><br>www.facebook.com/johndoevcardpage </a></li>';
    s += '      <li><img src="css/images/deviantart_32.png" /><a href><strong>Deviantart</strong><br>www.deviantart.com/johndoevcard </a></li>';
    s += '      <li><img src="css/images/youtube_32.png" /><a href><strong>Youtube</strong><br>www.youtube.com/johndoevcardpage </a></li>';
    s += '      <li><img src="css/images/tumblr_32.png" /><a href><strong>Tumblr</strong><br>www.tumblr.com/johndoevcardpage </a></li>';
    s += '    </ul>';
    s += '</div>';



    var slider = function(e) {
    
    $(".content").children().slideUp();
    $(".content").append(s);

    // alert('yo');
    function sliderDown(e) {
      $("#socialContainer").delay(650).slideDown(300);
      console.log($(s));

      // alert('working')
    }
    sliderDown();
  }
  slider();

  })

$('#contact').on('click', function(clickEvent) {
    // $("ul.nav a").slide('slow').hasClass('active');
    var s = ''
    s += '<div id="contactContainer" style="display: none;">';
    s += '    <ul>';
    s += '      <li><strong>John Doe</strong></li>';
    s += '      <li>56 Creative Q Box Street</li>';
    s += '      <li>E-800 Edinburgh</li>';
    s += '      <li>Phone: +510 123-4567</li>';
    s += '      <li>Cell: +510 123-4567</li>';
    s += '      <li>E-Mail: hello@creativeqbox.com</li>';
    s += '    </ul>';
    s += '    <ul>';
    s += '      <li><strong>Contact Form</strong></li>';
    s += '      <li><span>Name:</span> <input type="text" name="name" id="name"></li>';
    s += '      <li><span>E-Mail:</span> <input type="text" name="email" id="email"></li>';
    s += '      <li><span>Message:</span> <textarea name="message" id="message" cols="40" rows="10"></textarea></li>';
    s += '      <li id="buttonsContainer"><input type="submit" value="Submit" name="submit" class="button"> <input type="reset" value="Reset" class="button"></li>';
    s += '    </ul>';
    s += '</div>';



    var slider = function(e) {
    
    $(".content").children().slideUp();
    $(".content").append(s);

    // alert('yo');
    function sliderDown(e) {
      $("#contactContainer").delay(650).slideDown(300);
      console.log($(s));

      // alert('working')
    }
    sliderDown();
  }
  slider();

  })

$('#ui').on('click', function(clickEvent) {
    // $("ul.nav a").slide('slow').hasClass('active');
    var s = ''
    s += '<div id="uiContainer" class="scroll-pane" style="display: none;">';
    s += '  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>';
    s += '  <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>';
    s += '  <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>';
    s += '  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>';
    s += '  <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>';
    s += '  <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>';
    // s += '  <div class="jspVerticalBar">text</div>'
    s += '</div>';



    var slider = function(e) {
    
    $(".content").children().slideUp();
    $(".content").append(s);

    // alert('yo');
    function sliderDown(e) {
      $("#uiContainer").delay(650).slideDown(300);
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

// jScrollPane


  


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