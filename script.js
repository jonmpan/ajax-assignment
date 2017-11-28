//Variables for URL generation
var custom = 'cats typing'
var imagecount = 12;
var queryURL = 'https://api.giphy.com/v1/gifs/search?q='+custom+'&api_key=dc6zaTOxFJmzC&MPAA=R&limit='+imagecount+''
//Used to store the returned object from Giphy
var object;
//Variables to store the sound effects
var dioRoadroller = new Audio('media/dioroadroller.mp3');
var typing = new Audio('media/typing.mp3');
var typingslow = new Audio('media/typingslow.mp3');
var typewriter = new Audio('media/typewriter.mp3');
var thanksobama = new Audio('media/thanksobama.mp3');
var rubberduck = new Audio('media/rubberduck.mp3');
var meow = new Audio('media/meow.mp3');
var jake = new Audio('media/jake.mp3');
var mathematical = new Audio('media/mathematical.mp3');
var swoosh = new Audio('media/swoosh.mp3');
var dragonroar = new Audio('media/dragonroar.mp3');
var fail = new Audio('media/fail.mp3');
var explosion = new Audio('media/explosion.mp3');
var glassbreak = new Audio('media/glassbreak.mp3');
var glassbreak2 = new Audio('media/glassbreak.mp3');
var ding = new Audio('media/ding.mp3');
var boing = new Audio('media/boing.mp3');
var toasty = new Audio('media/toasty.mp3');
//Booleans for changing the background of the page
var gifbackground = false;
var geddanbackground = false;
var georgebackground = false;

//Stops sound effects function
var SEStop = function(){
	typing.pause();
	typing.currentTime = 0;
	typingslow.pause();
	typingslow.currentTime = 0;
	typewriter.pause();
	typewriter.currentTime = 0;
	thanksobama.pause();
	thanksobama.currentTime = 0;
	rubberduck.pause();
	rubberduck.currentTime = 0;
	meow.pause();
	meow.currentTime = 0;
	jake.pause();
	jake.currentTime = 0;
	mathematical.pause();
	mathematical.currentTime = 0;
	swoosh.pause();
	swoosh.currentTime = 0;
	dragonroar.pause();
	dragonroar.currentTime = 0;
	fail.pause();
	fail.currentTime = 0;
	explosion.pause();
	explosion.currentTime = 0;
	glassbreak.pause();
	glassbreak.currentTime = 0;
	glassbreak2.pause();
	glassbreak2.currentTime = 0;
	ding.pause();
	ding.currentTime = 0;
	boing.pause();
	boing.currentTime = 0;
	toasty.pause();
	toasty.currentTime = 0;
}

//Resets background and audio
var reset = function(){
	//Empties the text box just for Geddan
	if(geddanbackground){
		$('#gifs').empty();
	}
	//End Empty Geddan
	gifbackground = false;
	geddanbackground = false;
	georgebackground = false;
	$('#songplayer').get(0).pause();
	$('#songplayer2').get(0).pause();
	document.getElementById('geddanvideo').pause();
	document.getElementById('geddanvideo').currentTime=0;
	$('#geddanvideo').hide();
	$('body').css('background-image', '');
	$('body').css('background', '');
	$('.animatethis').removeClass("animated rubberBand flip hinge infinite");
	SEStop();
}

//Deletes user created buttons
$('#resetbuttons').click(function(){
	var parent = document.getElementById("buttons");
	var x = document.getElementById("buttons").childElementCount;
	var y = document.getElementById("buttons").childElementCount;
	console.log('#ofButtons '+x+'');

	if(x>12){
		for (var i = 0; i < y-12; i++) {
			var child = $('#buttons').children().eq(12);
			child.detach();
			var x = document.getElementById("buttons").childElementCount;
			console.log('Removed a button');
			SEStop();
			explosion.play();
		}
	}
	else{
		return;
	}
});

//Resets the background only if the background has been changed from default
$('#resetbackground').click(function(){
	if(gifbackground || georgebackground || geddanbackground){
		reset();
		ding.play();
		$('#gifs').empty();
	}
	else{
		return;
	}
});

//Turns gif background on and bounces everything
$('.logoclick').click(function(){
		reset();
		gifbackground = true;
		boing.play();
		$('#songplayer2').get(0).play();
		//Checks to see if the AJAX request has any images in it
		if(object.data.length>0){
			$('.animatethis').addClass("animated rubberBand infinite");
			getgifs();
		}
		//Sends you to the NO RESULTS section
		else{
			reset();
			gifbackground=true;
			boing.play();
			$('#songplayer2').get(0).play();
			$('body').css('background-image', 'url(images/marisaspin.gif)').css('background-color', 'pink');
			$('#gifs').empty();
			$('#gifs').append('<div class="row"><div class="col-xs-3"></div><div id="noresults" class="animatethis col-xs-6">NO RESULTS...</div><div class="col-xs-3"></div></div>');
			$('#gifs').append('<div class="row"><div class="col-xs-3"></div><div id="noresults" class="animatethis col-xs-6">TRY SOMETHING ELSE!</div><div class="col-xs-3"></div></div>');		
			$('.animatethis').addClass("animated rubberBand infinite");
		}
})

//Initializes George
$('#george').click(function(){
	reset();
	georgebackground = true;
	toasty.play();
	$('body').css('background-image', 'url(images/george.gif)').css('background-color', 'pink');
	$('#songplayer').get(0).play();
	$('#gifs').empty();
	$('#gifs').append('<div class="row"><div class="col-xs-3"></div><div id="noresults" class="animatethis col-xs-6">N0 R3SUL75...</div><div class="col-xs-3"></div></div>');
	$('#gifs').append('<div class="row"><div class="col-xs-3"></div><div id="noresults" class="animatethis col-xs-6">1337 TA 7H0UGH!</div><div class="col-xs-3"></div></div>');
	$('.animatethis').addClass("animated flip infinite");
});

//Initializes Geddan
$('#geddan').click(function(){
	reset();
	glassbreak.play();
	geddanbackground=true;
	$('body').css('background-image', '').css('background-color', '#FF9C00');
	$('#videocontainer').show();
	document.getElementById('geddanvideo').play();
	$('#geddanvideo').show();
	$('#gifs').empty();
	$('#gifs').append('<div class="row"><div class="col-xs-1"></div><div id="noresults" class="animated shake infinite col-xs-10">Get Down yureru  mawaru  fureru  setsunai kimochi futari de issho ni nemuru  Winter Land anata dake mitsumete  watashi dake mitsumete asu woOOooOOooOOoo chikau gyutto  dakare  moeru koigokoro hageshiku  maichiru  yuki ni tsutsumarete eien ni aishiteru  kyou yori aishiteru zuttoOOooOOooOOoo  Eternal Love</div><div class="col-xs-1"></div></div>');
	$('.animatethis').addClass("animated hinge");
});

//Counter Section
$('#onePlus').click(function() {
	if(imagecount<99){
	imagecount+=1;
	$('#imgCounter').text(imagecount);
	queryURL = 'https://api.giphy.com/v1/gifs/search?q='+custom+'&api_key=dc6zaTOxFJmzC&MPAA=R&limit='+imagecount+''
	}
});

$('#oneMinus').click(function() {
	if(imagecount>1){
	imagecount-=1;
	$('#imgCounter').text(imagecount);
	queryURL = 'https://api.giphy.com/v1/gifs/search?q='+custom+'&api_key=dc6zaTOxFJmzC&MPAA=R&limit='+imagecount+''
	}
});

$('.buttonclick').click(function(){
	var value = this.value;
	custom = value;
	queryURL = 'https://api.giphy.com/v1/gifs/search?q='+custom+'&api_key=dc6zaTOxFJmzC&MPAA=R&limit='+imagecount+''
	getgifs();
});
//End Counter Section

//Form Section
//Allows the user to press Enter to submit the form without reloading the page
$('#form1').keypress(function(e){
	if(e.keyCode==13){
	e.preventDefault();
	$('#formButton').click();
  	}
});

//Creates a button if the button doesn't exist
$('#formButton').click(function(){
	var x = document.getElementById("form1");
	custom=x.elements[0].value;
	console.log(x.elements[0].value);
	var customL=x.elements[0].value.toLowerCase();
	queryURL = 'https://api.giphy.com/v1/gifs/search?q='+custom+'&api_key=dc6zaTOxFJmzC&MPAA=R&limit='+imagecount+''
	getgifs();
	//Checks to see if the user's input exists as a button already
	if(document.getElementById(customL)){
		SEStop();
		swoosh.play();
	}
	//If the button does not exist, create a button
	else{
		SEStop();
		swoosh.play();
		$('#buttons').append('<button id="'+customL+'" value="'+customL+'" class="animatethis buttonswoosh buttonclick btn btn-6 btn-6b">'+custom+'</button>');
		//Adds event listener to the new button to function like the existing buttons
		document.getElementById(customL).addEventListener("click", function(){
			var value = this.value;
			custom = value;
			queryURL = 'https://api.giphy.com/v1/gifs/search?q='+custom+'&api_key=dc6zaTOxFJmzC&MPAA=R&limit='+imagecount+''
			SEStop();
			swoosh.play();
			getgifs();
		});
	};
});

//Code for AJAX request and appending images
function getgifs(){
$('#gifs').empty();
$.ajax({
	    url: queryURL,
	    method: "GET"
    }).done(function(response) {
	    console.log(response);
	    rowNum = 1;
	    object = response;
	//If AJAX returns no results, creates No Results scenario
	if(response.data.length<1){
		reset();
		gifbackground = true;
		$('#songplayer2').get(0).play();
		$('body').css('background-image', 'url(images/marisaspin.gif)').css('background-color', 'pink');
		swoosh.pause();
		SEStop();
		fail.play();
		$('#gifs').empty();
		$('#gifs').append('<div class="row"><div class="col-xs-3"></div><div id="noresults" class="animatethis col-xs-6">NO RESULTS...</div><div class="col-xs-3"></div></div>');
		$('#gifs').append('<div class="row"><div class="col-xs-3"></div><div id="noresults" class="animatethis col-xs-6">TRY SOMETHING ELSE!</div><div class="col-xs-3"></div></div>');		
		$('.animatethis').addClass("animated rubberBand infinite");
	}
	//If AJAX returns results, create Rows and Gifs
	else {
		for (var i = 0; i<response.data.length; i+=4){
			var i1=i+1;
			var i2=i+2;
			var i3=i+3;
			$('#gifs').append('<div id="gifrow'+rowNum+'" class="row justify-content-md-center"></div>');
			$('#gifrow'+rowNum+'').append('<div id="gif'+i+'"></div>');
			$('#gifrow'+rowNum+'').append('<div id="gif'+i1+'"></div>');
			$('#gifrow'+rowNum+'').append('<div id="gif'+i2+'"></div>');
			$('#gifrow'+rowNum+'').append('<div id="gif'+i3+'"></div>');
			rowNum +=1;
	    }
	    //Appends the image and the URL to each image. Adds event listeners for mouse in and mouse out to pause and play in the gifs respectively
	    for (var i = 0; i < response.data.length; i++) {
	    	$('#gif'+i+'').append('<div class="animatethis col-xs-3 gifContainer"><a href="'+response.data[i].url+'" target="_blank"><img numvalue="'+i+'" src="'+response.data[i].images.downsized.url+'"></a></div>');
	    		document.getElementById('gif'+i+'').addEventListener("mouseover", function(){
	    				var changeImg = $(this).children().eq(0).children().eq(0).children().eq(0);
	    				var j = changeImg.attr('numvalue');
	    				console.log('hovered');
	    				console.log(j);
	    				changeImg.attr("src",""+object.data[j].images.downsized_still.url+"").css('opacity', '0.85');
					});
				document.getElementById('gif'+i+'').addEventListener("mouseout", function(){
	    				var changeImg = $(this).children().eq(0).children().eq(0).children().eq(0);
	    				var j = changeImg.attr('numvalue');
	    				console.log('out');
	    				console.log(j);
	    				changeImg.attr("src",""+object.data[j].images.downsized.url+"").css('opacity', '1');
					});
	    }
	    	//Adds animation/background based on which background is active
		    if(gifbackground){
		    	var r = Math.floor(Math.random()*object.data.length);
				console.log(r);
				console.log(object.data[r].images.downsized.url);
				$('body').css('background-image', 'url('+object.data[r].images.downsized.url+')');
		    	$('.animatethis').addClass("animated rubberBand infinite");
		    }
		    else if(georgebackground){
				console.log('yes');			
				$('.animatethis').addClass("animated flip infinite");
			}
			else if(geddanbackground){
				$('.animatethis').addClass("animated hinge");
				SEStop();
				glassbreak2.play();
				$('#gifs').prepend('<div class="row"><div class="col-xs-1"></div><div id="noresults" class="animated shake infinite col-xs-10">Get Down yureru  mawaru  fureru  setsunai kimochi futari de issho ni nemuru  Winter Land anata dake mitsumete  watashi dake mitsumete asu woOOooOOooOOoo chikau gyutto  dakare  moeru koigokoro hageshiku  maichiru  yuki ni tsutsumarete eien ni aishiteru  kyou yori aishiteru zuttoOOooOOooOOoo  Eternal Love</div><div class="col-xs-1"></div></div>');
			}
		    else{
		    	return;
		    }
	}
    });
}

//Starts the document with the preset queryURL gifs
getgifs();
typing.play();

//Sound effects for clicking on buttons
$('.buttontyping').click(function(){
	SEStop();
	typing.play();
});

$('.buttontypingslow').click(function(){
	SEStop();
	typingslow.play();
});

$('.buttontypewriter').click(function(){
	SEStop();
	typewriter.play();
});

$('.buttonthanksobama').click(function(){
	SEStop();
	thanksobama.play();
});

$('.buttonrubberduck').click(function(){
	SEStop();
	rubberduck.play();
})

$('.buttonmeow').click(function(){
	SEStop();
	meow.play();
})

$('.buttonjake').click(function(){
	SEStop();
	jake.play();
})

$('.buttonmathematical').click(function(){
	SEStop();
	mathematical.play();
})

$('.buttonswoosh').click(function(){
	SEStop();
	swoosh.play();
})

$('.buttondragonroar').click(function(){
	SEStop();
	dragonroar.play();
})