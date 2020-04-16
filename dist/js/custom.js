 // MDB Lightbox Init
 $(function () {
	$("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});

// Adding animations to the sections
$("section").addClass("wow fadeIn");

// Animations Init
new WOW().init();

//Custom Slide In Animation 
$(document).scroll(function(){
    windowScroll()
});

function windowScroll(){
	var st = $(document).scrollTop();
  
	$("#movingDiv").css({"top": 32 - st * 0.15 + "px"});
	$("#movingDiv").css({"left": 48 - st * 0.15 + "px"});
   }