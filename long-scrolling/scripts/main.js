

/*$(document).ready(function(){

 // when the document is ready do a bunch of stuff

  console.log("your document is ready");
var fromTop = 0;

$(window).scroll(function(){

  //when you are scrolling, do a bunch of stuff


  fromTop = $(window).scrollTop();
  //update the variable fromTop to the current pixels count
  //fromLeft = $(window).scrollLeft();

  console.log("you are scrolling " + fromTop + " times awesone");

  if(fromTop >= 4000 ){
    console.log("you have scrolled so far");




  }else{
    console.log("going backwords are we?");

    $("#sleep").css({"top" : 10 + fromTop *.9 + "px"});
   $("#one").css({"top" : 50 + fromTop *1.1 + "px"});
    $("#two").css({"top" : 150 + fromTop *1.5  + "px"});
    $("#three").css({"top" : 200 + fromTop *2  + "px"});
    $("#four").css({"top" : 250 + fromTop *2.5  + "px"});
    $("#five").css({"top" : 300 + fromTop *3  + "px"});
    $("#six").css({"top" : 350 + fromTop *3.5  + "px"});
  }

   })//close.scroll
});//close.ready
*/


function parallax(){
  var sleep = document.getElementById('sleep');
	var one = document.getElementById('one');
	var two = document.getElementById('two');
  var three = document.getElementById('three');
  var four = document.getElementById('four');
  var five = document.getElementById('five');
   awake.style.top = -(window.pageYOffset / .60)+'px';
	one.style.top = -(window.pageYOffset / .45)+'px';
  	two.style.top = -(window.pageYOffset / .40)+'px';
    	three.style.top = -(window.pageYOffset / .35)+'px';
      	four.style.top = -(window.pageYOffset / .30)+'px';
        	five.style.top = -(window.pageYOffset / .25)+'px';
           six.style.top = -(window.pageYOffset / .20)+'px';
           seven.style.top = -(window.pageYOffset / .15)+'px';
           sleep.style.top = -(window.pageYOffset / .5)+'px';

}

window.addEventListener("scroll", parallax, false);


$("div").blast-root({ delimiter: "word" });
