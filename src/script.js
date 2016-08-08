//Portfolio Site
//created by Michael Braverman on April 16, 2016

// welcome animations
if(!window.location.hash){
  TweenLite.to($('body'), 0.7, {opacity:1});
  TweenLite.from($('#title'), 1.5, {opacity:0.4, scale:3, rotationZ:360, rotationY:360, perspective:200, delay:0.7, ease:Elastic.easeInOut});
  TweenLite.from($('nav ul'), 1.5, {opacity:0, scaleX:0, delay:1.0, transformOrigin:"left", ease:Elastic.easeInOut});
  TweenLite.from($('#slide-img'), 1.5, {opacity:0, scale:0, rotationX:360, delay:1.5, ease:Elastic.easeOut});
  TweenLite.from($('#nav-toggle-button'), 1.5, {opacity:0, scale:2, rotationX:720, delay:1.5, scale:0, ease:Elastic.easeInOut});
  TweenLite.from($('.img-caption'), 1.5, {opacity:0, scale:0, delay:1,ease:Elastic.easeIn});
  TweenLite.from($('.content'), 1.5, {opacity:0, scale:0, rotationY:180, delay:2.0, ease:Elastic.easeOut});
  TweenLite.from($('footer'), 1.5, {opacity:0, scale:0, delay:2.0});
} else {
  // when something other than home is specified
  TweenLite.to($('body'), 0, {opacity:1});
  TweenLite.from($('#title'), 1, {opacity:0});
  TweenLite.from($('nav ul'), 1, {opacity:0, transformOrigin:"left", scaleX:0, ease:Elastic.easeInOut});
  TweenLite.from($('footer'), 0.5, {opacity:0, scale:0, delay:1});
}

// on load
$( document ).ready(function() {
  // get window dimensions
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();
  // update values on resize
  $(window).resize(function() {
    windowWidth = $(window).width();
    windowHeight = $(window).height();
  });

  // CHECK THE URL
  checkHash();
  // check if user presses back in history
  $(window).on('hashchange', function(){
    checkHash();
  });
  // open window based on hash
  function checkHash() {
    // open pages on load based on the url hash
    var windowHash = window.location.hash;
    switch (windowHash  ) {
      case "#about":
      loadAboutPage();
      break;
      case "#gallery":
      loadGalleryPage();
      break;
      case "#projects":
      loadProjectPage();
      break;
      case "#resume":
      loadResumePage();
      break;
      case "#contact":
      loadContactPage();
      break;
      default:
      // check if it's a project
      var project = false;
      for (var i in mediaData) {
        var url = "/pages/" + mediaData[i]["page"];
        if (("#"+mediaData[i]["page"]) == windowHash) {
          $("#ajax > .content").load(url, function(){
            // scroll to top of menu
            $(window).scrollTop(0);
            // wait before loaded
            pageTransition("main", "#ajax");
            project = true;
          });
        }
      }
      // default home page
      if (!project) {
        loadAboutPage();
      }
      break;
    }
  }

  ////////////////////////// AJAX LOAD /////////////////////////////
  // ANY page click
  $(".page-link").click(function() {
    // hides menu when in mobile view
    $("nav ul").removeClass("show-nav-mobile");
    // remove blur effect
    $("main").removeClass("blur-effect");
    $("footer").removeClass("blur-effect");
  });

  // ABOUT PAGE click
  function loadAboutPage() {
    $("li").removeClass("selected-link");
    $(this).addClass("selected-link");

    pageTransition("main", "#about");
  }
  $("#about-link").click(function() {
    loadAboutPage();
  });

  // PROJECT PAGE click
  function loadProjectPage() {
    $("li").removeClass("selected-link");
    $(this).addClass("selected-link");

    // load project grid
    // reloadMasonry();

    pageTransition("main", "#projects");

    // fade out return text
    TweenMax.to($('#return-to-projecs'), 1, {opacity:0, onComplete:next});
    function next() {
      // clear return text
      $("#return-to-projecs").empty();
    }
  }
  $("#projects-link").click(function() {
    loadProjectPage();
  });

  // GALLERY PAGE click
  function loadGalleryPage() {
    $("li").removeClass("selected-link");
    $(this).addClass("selected-link");

    pageTransition("main", "#gallery");
  }
  $("#gallery-link").click(function() {
    loadGalleryPage();
  });

  // RESUME PAGE click
  function loadResumePage() {
    $("li").removeClass("selected-link");
    $(this).addClass("selected-link");

    pageTransition("main", "#resume");
  }
  $("#resume-link").click(function() {
    loadResumePage();
  });

  // CONTACT PAGE click
  function loadContactPage() {
    $("li").removeClass("selected-link");
    $(this).addClass("selected-link");

    pageTransition("main", "#contact");
  }
  $("#contact-link").click(function() {
    loadContactPage();
  });

  // Generate project links for PROJECT PAGE
  for (var i in mediaData) {
    if(mediaData[i]["type"] == "project"){
      $("#project-grid").append(
        $("<div>").attr("id","project-" + i).addClass(function(){
          // set first element to grid-sizer
          // needed for responsive Masonry grid
          if( i == 0){
            return "grid-sizer";
          } else {
            return "grid-item";
          }
        })
        // make a tall tile every other 3 tiles
        .addClass(function(){
          if ( i % 2 == 0 && i !=0) {
            return "grid-item--height2";
          } else {
            return null;
          }
        })

        // background-image
        .css({
          "background-image" : function(){
            var mediaURL = " ";
            // load the Gif if availabe
            if (mediaData[i]["gifFile"] != null) {
              var mediaURL = "url(" + mediaData[i]["gifFile"] + ")";
            } else if (mediaData[i]["imgFile"] != null) {
              var mediaURL = "url(" + mediaData[i]["imgFile"] + ")";
            }
            return mediaURL;
          },
          "background-size" : "cover",
          "background-position" : "center"
        })

        // content that goes inside each grid element
        .append(
          $("<div>").addClass("grid-description").append(
            // link to project
            $("<a>", {
              href : "#" + mediaData[i]["page"],
              text : mediaData[i]["name"]
            }),
            // span same level as <a>
            $("<span>", {text : mediaData[i]["year"]})
          )
        )
      );
    }
  }

  // Generate Media for Gallery PAGE
  var j = 0;
  for (var i in mediaData) {
    if(mediaData[i]["type"] != "project"){
      $("#gallery-grid").append(
        $("<div>").attr("id","media-" + j).addClass(function(){
          // set first element to grid-sizer
          // needed for responsive Masonry grid
          if( j == 0){
            return "grid-sizer";
          } else {
            return "grid-item";
          }
        })
        // make a tall tile every other 3 tiles
        .addClass(function(){
          if ( j % 2 == 0 && j !=0) {
            return "grid-item--height2";
          } else {
            return null;
          }
        })
        // media image in the background
        .css({
          "background-image" : "url(" + mediaData[i]["tumbnail"] + ")",
          "background-size" : "cover",
          "background-position" : "center"
        })
      );
      j++;
    }
  }

  // On project link click load AJAX
  $(".grid-description > a").on('click', function(event) {
    // event.preventDefault(); // ignore default link behaviour
    var url = "/pages/" + $(this).attr("href"); // get link path

    // change nav button text for mobile
    $("#nav-toggle-button").html("BACK");
    // show and animate return text for non-mobile
    $("#return-to-projecs").html("back");
    TweenMax.fromTo($('#return-to-projecs'), 0.7, {opacity:1, scale:2}, {opacity:0.5, scale:1, repeat:-1, yoyo:true});

    // load page
    $("#ajax > .content").load(url, function(){
      // scroll to top of menu
      $(window).scrollTop(0);
      // wait before loaded
      pageTransition("main", "#ajax");
    });
  });



  // General page transitions
  function pageTransition(hide, show) {
    // HIDE exeptions
    var ajaxExeption = false;
    if ($("#ajax").hasClass("current-main") && show == "#projects") {
      // different animation when returning FROM project view
      TweenLite.to($(hide), 0.75, {opacity:0.5 , rotationY:-90, transformPerspective:1000, transformOrigin:"right 0% 20%", onComplete:next1, ease:Power2.easeIn});
      ajaxExeption = true;
    } else {
      // default animation for other elements
      TweenLite.to($(hide),  0.75, {opacity:0.5 , rotationY:90, transformPerspective:1000, transformOrigin:"right 0% 20%", onComplete:next1, ease:Power2.easeIn});
    }

    function next1() {
      $(hide).removeClass("current-main");
      $(show).addClass("current-main");

      // SHOW exeptions
      if (show == "#projects" || show == "#gallery") {
        // reload tiles
        reloadMasonry();
      }

      if(ajaxExeption) {
        // different animation when returning back from project view
        TweenLite.fromTo($(show), 1, {transformOrigin:"right 0% 20%", rotationY:90, transformPerspective:1200, opacity:0.5}, {rotationY:0, opacity:1, ease:Power2.easeOut});
        ajaxExeption = false;
      } else {
        // SHOW exeptions
        if (show == "#ajax") {
          // different animation when going INTO project view
          TweenLite.from($(show), 1, {transformOrigin:"left 0% 20%", rotationY:90});
          TweenLite.to($(show), 1, {opacity:1, rotationY:0, ease:Power3.easeOut});
        }
        // DEFAULT
        else {
          TweenLite.from($(show), 1, {transformOrigin:"left 0% 20%", rotationY:90});
          TweenLite.to($(show), 1, {opacity:1, rotationY:0, ease:Elastic.easeOut});
        }
      }
    }
  }

  /////////////////////// INDIVIDUAL ANIMATIONS ///////////////////////
  // change image on load
  changeImg(100);
  // change image slide on click
  $("#slide-img").click(function() {
    changeImg(100);
  })

  // change slide every 4 seconds
  setInterval(function(){
    changeImg(1000);
  }, 5000);

  // cool nav select effect
  $(".page-link").hover(
    function() {
      TweenLite.to($(this), 1, {scale:1.2});
    },
    function() {
      TweenLite.to($(this), 1, {scale:1});
    }
  );

  // get the user busy with the title
  $("#title > h1").hover(
    function() {
      TweenLite.to($(this), 1, {opacity:0.3, rotationY:180});
    },
    function() {
      TweenLite.to($(this), 1, {opacity:1, rotationY:0});
    }
  );

  // return to about page when clicked
  $("#title").click(function() {
    pageTransition("main", "#about");
  });

  // mobile menu click animation
  $("#nav-toggle-button").click(function() {
    var navUl = $("nav ul");
    TweenLite.fromTo($(this), 0.7, {rotationY:180, rotationX:180}, {rotationY:0, rotationX:0});

    // scroll to top of menu
    $(window).scrollTop(0);
    // add blur effect
    $("main").toggleClass("blur-effect");
    $("footer").toggleClass("blur-effect");

    // if "project view" is the the current visible main
    if ($("#ajax").hasClass("current-main")){
      // load projects page
      loadProjectPage();
      // change nav button text back to MENU when done
      $("#nav-toggle-button").html("MENU");
      // remove blur effect
      $("main").removeClass("blur-effect");
      $("footer").removeClass("blur-effect");
    } else {
      // show navigation menu for mobile
      navUl.toggleClass("show-nav-mobile");
      TweenLite.to(navUl, 0, {css:{"z-index":5, "translateZ":100}});
      TweenLite.from(navUl, 0.8, {transformOrigin:"50% 50%", scaleX:0, scaleY:0, opacity:0.4, ease:Elastic.easeOut});
    }
  });
});

function reloadMasonry() {
  // layout tiles using Masonry jQuery plugin
  $(".tile-grid").masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentagePosition: true
  });
}
/////////////////////////////////// MISC ///////////////////////////////////

// var isMobile = false;
// // check if mobile device
//
// if (isMobile) {
//   $(".grid-description > a").show();
//   $(".grid-description > span").show();
// } else {
//   $(".grid-description > a").hide();
//   $(".grid-description > span").hide();
//   $(".grid-description > a").hover(function() {
//     $(this).show();
//   });
//   $(".grid-description > span").hover(function() {
//     $(this).show();
//   });
// }

var previousIndex;
var imageIndex;
function changeImg(time) {
  // Randomize the sequence of photos
  previousIndex = imageIndex;
  // on start
  if (previousIndex == null) {
    imageIndex = (Math.floor(Math.random() * mediaData.length) + 1) % (mediaData.length);
  }

  // next image until it is different
  // avoids duplicates and projects without images
  while (previousIndex == imageIndex || mediaData[imageIndex]["imgFile"] == null || mediaData[imageIndex]["type"] != "project" ||imageIndex == 0) {
    imageIndex++;
    imageIndex = (imageIndex + 1) % mediaData.length;
  }

  var imgText = mediaData[imageIndex]["name"] + " (" + mediaData[imageIndex]["year"]  + ")";

  var slideImg = $("#slide-img > img");
  var imgCaption = $(".img-caption");
  TweenLite.to(slideImg, (time/1000)/2, {opacity:0, ease:Power2.easeIn, onComplete:next});
  TweenLite.to(imgCaption, (time/1000)/2, {opacity:0, ease:Power2.easeIn, onComplete:next});
  function next() {
    slideImg
      .attr('src', mediaData[imageIndex]["imgFile"])
      .attr('alt', imgText);
    imgCaption.text(imgText);
    TweenLite.to(slideImg, (time/1000)/2, {opacity:1, ease:Power2.easeIn});
    TweenLite.to(imgCaption, (time/1000)/2, {opacity:1, ease:Power2.easeIn});
  }
}

// Project Metadata
var mediaData = [
    {
      'type':'project',
      'imgFile':'https://c1.staticflickr.com/9/8674/28310046481_76696628b6_c.jpg',
      'name':'Infrastructural Utopia Towerr',
      'page':'utopia-tower.html',
      'year': 2016
    },
    {
      'type':'project',
      'gifFile':'http://i.giphy.com/26BoEscVHpDa5XYre.gif',
      'imgFile':'https://c1.staticflickr.com/9/8695/28808877635_c977be1337_c.jpg',
      'name':'Ossacip Bot',
      'page':'ossacip-bot.html',
      'year': 2016,
    },
    {
      'type':'project',
      'imgFile':'https://c1.staticflickr.com/9/8674/28310046481_76696628b6_c.jpg',
      'name':'Infrastructural Utopia Tower',
      'page':'utopia-tower.html',
      'year': 2016
    },
    {
      'type':'project',
      'imgFile':'https://c1.staticflickr.com/9/8802/28388678085_ac9fdce3fe_c.jpg',
      'gifFile':'http://i.giphy.com/3o6Zt8gmabVDL2AQV2.gif',
      'name':'Multiverse Clockwork',
      'page':'multiverse-clockwork.html',
      'year': 2016
    },
    {
      'type':'project',
      'imgFile':'https://c1.staticflickr.com/9/8277/27772929903_68a55209e1_c.jpg',
      'name':'Artificial Personality Box',
      'page':'personality-box.html',
      'year': 2015,
    },
    {
      'type':'project',
      'imgFile':'https://c2.staticflickr.com/8/7675/28284474322_5efdb11d54_c.jpg  ',
      'name':'Poem Maschine',
      'page':'poem-maschine.html',
      'year': 2015
    },
    {
      'type':'project',
      'imgFile':'https://c2.staticflickr.com/8/7570/27772929823_ae1922ff53_c.jpg',
      'name':'infORM alpha',
      'page':'inform.html',
      'year': 2016
    },
    {
      'type':'project',
      'imgFile':'https://c2.staticflickr.com/8/7656/27772929453_622e677747_c.jpg',
      'name':'Emotion Cube',
      'page':'emotion-cube.html',
      'year': 2015
    },
    {
      'type':'project',
      'imgFile':'https://c1.staticflickr.com/9/8824/28191822784_c837bc1ee4_c.jpg',
      'name':'Data Poetics',
      'page':'data-poetics.html',
      'year': 2016
    },
    {
      'type':'project',
      'imgFile':'https://c1.staticflickr.com/9/8819/27772928563_557a48d304_o.png',
      'name':'Flowing Pagoda',
      'page':'flowing-pagoda.html',
      'year': 2015
    },
    {
      'type':'project',
      'imgFile':'https://c1.staticflickr.com/9/8638/28388677955_4c28b7db75_z.jpg',
      'name':"The Endevour's Guide to The 21st Century",
      'page':'endevour.html',
      'year': 2016
    },
    {
      'type':'project',
      'imgFile':'https://c1.staticflickr.com/9/8787/28389454205_6c3c3ffe1a_c.jpg',
      'name':'Stardust Music Composer',
      'page':'stardust-composer.html',
      'year': 2015
    },
    {
      'type':'project',
      'imgFile':'https://c1.staticflickr.com/9/8692/28206313953_c4b26799de_c.jpg',
      'name':'Logos',
      'page':'logos.html',
      'year': 2015
    },
    {
      'type':'project',
      'imgFile':'https://c1.staticflickr.com/9/8157/28744393481_a61f2cb437_c.jpg',
      'name':'9x6',
      'page':'9x6.html',
      'year': 2015
    },
    {
      'type':'project',
      'imgFile':'https://usercontent1.hubstatic.com/1137335_f496.jpg',
      'name':'Feeduino',
      'page':'feeduino.html',
      'year': 2012
    },

    // IMAGES
    {
      'type':'photo',
      'name':'Unconditional Gratitude',
      'tumbnail':'https://c2.staticflickr.com/2/1543/24610481726_eef9d8a7f5_n.jpg',
      'imgFile':'https://c2.staticflickr.com/2/1543/24610481726_eef9d8a7f5_b.jpg',
      'year': 2016
    },
    {
      'type':'photo',
      'name':'Unconditional Gratitude',
      'tumbnail':'https://c2.staticflickr.com/2/1543/24610481726_eef9d8a7f5_n.jpg',
      'imgFile':'https://c2.staticflickr.com/2/1543/24610481726_eef9d8a7f5_b.jpg',
      'year': 2016
    },
    {
      'type':'photo',
      'name':'Venice In Detail',
      'tumbnail':'https://c1.staticflickr.com/1/583/21344021219_536a380f88_n.jpg',
      'imgFile':'https://c1.staticflickr.com/1/583/21344021219_536a380f88_b.jpg',
      'year': 2015
    },
    {
      'type':'photo',
      'name':'Sea Wonder',
      'tumbnail':'https://c1.staticflickr.com/1/663/21519790602_db05c34eac_n.jpg',
      'imgFile':'https://c1.staticflickr.com/1/663/21519790602_db05c34eac_b.jpg',
      'year': 2015
    },
    {
      'type':'photo',
      'name':'Classics',
      'tumbnail':'https://c2.staticflickr.com/6/5659/21539637051_33e908a0be_n.jpg',
      'imgFile':'https://c2.staticflickr.com/6/5659/21539637051_33e908a0be_b.jpg',
      'year': 2015
    },
    {
      'type':'photo',
      'name':'Mystical',
      'tumbnail':'https://c1.staticflickr.com/1/625/21344007079_1eb9f7f574_n.jpg',
      'imgFile':'https://c1.staticflickr.com/1/625/21344007079_1eb9f7f574_b.jpg',
      'year': 2015
    },
    {
      'type':'photo',
      'name':'Modern Gondola',
      'tumbnail':'https://c1.staticflickr.com/1/659/21504731546_7db50fe7d9_n.jpg',
      'imgFile':'https://c1.staticflickr.com/1/659/21504731546_7db50fe7d9_b.jpg',
      'year': 2015
    },
    {
      'type':'photo',
      'name':'Venice In Detail',
      'tumbnail':'https://c2.staticflickr.com/6/5802/21539659241_8215aba2ed_n.jpg',
      'imgFile':'https://c2.staticflickr.com/6/5802/21539659241_8215aba2ed_b.jpg',
      'year': 2015
    },
    {
      'type':'photo',
      'name':'View Of Venice',
      'tumbnail':'https://c2.staticflickr.com/6/5627/20908182644_37611fe49f_n.jpg',
      'imgFile':'https://c2.staticflickr.com/6/5627/20908182644_37611fe49f_b.jpg',
      'year': 2015
    },
    {
      'type':'photo',
      'name':'Pleasure',
      'tumbnail':'https://c2.staticflickr.com/6/5812/21530938305_307d43ff4f_n.jpg',
      'imgFile':'https://c2.staticflickr.com/6/5812/21530938305_307d43ff4f_b.jpg',
      'year': 2015
    },
    {
      'type':'photo',
      'name':'Content',
      'tumbnail':'https://c2.staticflickr.com/6/5820/20909797523_9cdbe7883c_n.jpg',
      'imgFile':'https://c2.staticflickr.com/6/5820/20909797523_9cdbe7883c_b.jpg',
      'year': 2015
    },
    {
      'type':'photo',
      'name':'The Just Gardens',
      'tumbnail':'https://c1.staticflickr.com/1/633/21343069138_921ce7e54d_n.jpg',
      'imgFile':'https://c1.staticflickr.com/1/633/21343069138_921ce7e54d_b.jpg',
      'year': 2015
    },
    {
      'type':'photo',
      'name':'Silent Resonance',
      'tumbnail':'https://c2.staticflickr.com/6/5759/21539620721_69a2ae8dc9_n.jpg',
      'imgFile':'https://c2.staticflickr.com/6/5759/21539620721_69a2ae8dc9_b.jpg',
      'year': 2015
    },
    {
      'type':'photo',
      'name':'Spring Hybernation',
      'description':'This person was caught sleeping at the Union Square Park. It was interesting to see how people tried to avoid encountering the sleeping stranger even thought the park was crowded with people.',
      'tumbnail':'https://c2.staticflickr.com/8/7615/17068693648_07e6a22747_n.jpg',
      'imgFile':'https://c2.staticflickr.com/8/7615/17068693648_07e6a22747_b.jpg',
      'year': 2015
    },
    {
      'type':'photo',
      'name':'Mr. Vintage',
      'tumbnail':'https://c2.staticflickr.com/8/7630/16803620029_539d37542f_n.jpg',
      'imgFile':'https://c2.staticflickr.com/8/7630/16803620029_539d37542f_b.jpg',
      'year': 2015
    },
    {
      'type':'photo',
      'name':"Palm's Sunrise II",
      'tumbnail':'https://c2.staticflickr.com/8/7606/16968755992_26fce707cd_n.jpg',
      'imgFile':'https://c2.staticflickr.com/8/7606/16968755992_26fce707cd_b.jpg',
      'year': 2015
    },
    {
      'type':'photo',
      'name':"Dualism",
      'tumbnail':'https://c1.staticflickr.com/9/8732/16968753852_04143cb34d_n.jpg',
      'imgFile':'https://c1.staticflickr.com/9/8732/16968753852_04143cb34d_b.jpg',
      'year': 2015
    },
    {
      'type':'photo',
      'name':"Untitled",
      'tumbnail':'https://c2.staticflickr.com/8/7282/16347716254_e8f35a7e45_n.jpg',
      'imgFile':'https://c2.staticflickr.com/8/7282/16347716254_e8f35a7e45_b.jpg',
      'year': 2015
    },
    {
      'type':'photo',
      'name':"Urban Looks",
      'tumbnail':'https://c1.staticflickr.com/9/8737/16590957179_91cca283b0_n.jpg',
      'imgFile':'https://c1.staticflickr.com/9/8737/16590957179_91cca283b0_b.jpg',
      'year': 2015
    },
    {
      'type':'photo',
      'name':"East Village",
      'tumbnail':'https://c2.staticflickr.com/8/7285/16157163403_8cfb8d0e8c_n.jpg',
      'imgFile':'https://c2.staticflickr.com/8/7285/16157163403_8cfb8d0e8c_b.jpg',
      'year': 2015
    },
    {
      'type':'photo',
      'name':"Morning Waiters",
      'tumbnail':'https://c2.staticflickr.com/8/7631/16589702460_25c7bc2166_n.jpg',
      'imgFile':'https://c2.staticflickr.com/8/7631/16589702460_25c7bc2166_b.jpg',
      'year': 2015
    }
];

// Iluminati-conspiracy-surveilance Google Analytics script
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-78885933-1', 'auto');
ga('send', 'pageview');
