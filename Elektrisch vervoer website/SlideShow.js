// Defines the function that makes slideshows
var SSmaker = function(SSpics,id){
	// Set variables –––––––––––––––––––––––––––––––––
	var ID = "#"+id;
	var buttonclass = id+"button"

	var len = SSpics.length, 
		h = $(ID).height(), 
		w = $(ID).width(), 
		w2 = w/2+5;

	// Adds all pictures to the div matching the 'id' and sets pictures to be hidden. –––––––––––––––––––––––––––––––––
	for (var i = 0; i < SSpics.length; i++) {
		$(ID).append("<img class='SS hidden' src="+ SSpics[i] +" style='position:absolute;border: 1px solid silver'>");
	};

	// Makes sure that the first picture is no longer hidden, by toggling the 'hidden' class –––––––––––––––––––––––––––
	var i = 1;
	$(ID + " img:nth-child("+i+")").toggleClass("hidden");

	// Adds overlaying buttuns to go back and forward
	$(ID).append("<div id='previous' class="+buttonclass+" style='position:absolute;width:"+w2+"px;height:"+h+"px;background-color:transparent'></div>");
	$(ID).append("<div id='next' class="+buttonclass+" style='position:absolute;left:"+w2+"px;width:"+w2+"px;height:"+h+"px;background-color:transparent'></div>");

	// Enables the buttons to toggle the current and next/previous picture, depending on the button –––––––––––––––––––––
	$("div."+buttonclass+"#previous").click(function(){
		if(i>1){
			$(ID+" img:nth-child("+i+")").toggleClass("hidden");
			$(ID+" img:nth-child("+(i-1)+")").toggleClass("hidden");
			i=i-1
		}
	});

	$("div."+buttonclass+"#next").click(function(){
		if(i<14){
			$(ID+" img:nth-child("+i+")").toggleClass("hidden");
			$(ID+" img:nth-child("+(i+1)+")").toggleClass("hidden");
			i=i+1
		}	
	});
};

// List with filedirectories for the first slideshow (SS1)
var picdir = '/Assets/Porsche.'
var SS1pics = [
	picdir + '001.jpg',
	picdir + '002.jpg',
	picdir + '003.jpg',
	picdir + '004.jpg',
	picdir + '005.jpg',
	picdir + '006.jpg',
	picdir + '007.jpg',
	picdir + '008.jpg',
	picdir + '009.jpg',
	picdir + '010.jpg',
	picdir + '011.jpg',
	picdir + '012.jpg',

];

// Exectures the SSmaker function with the SS1 picturelist when the document is ready
$(document).ready(function(){
SSmaker(SS1pics,"SS1");
})
