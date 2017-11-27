// urloldkey = 'https://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC'
var custom = 'cats typing'
var imagecount = 20;
var queryURL = 'https://api.giphy.com/v1/gifs/search?q='+custom+'&api_key=dc6zaTOxFJmzC&MPAA=R&limit='+imagecount+''
var object;
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
var toasty = new Audio('media/toasty.mp3');
var fail = new Audio('media/fail.mp3');
var gifbackground = false;
var vidplaying = false;
var georgebackground = false;

$('.logoclick').click(function(){
	if(vidplaying){
		document.getElementById('cirnomathclass').pause();
		$('body').css('background-image', '');
		$('body').css('background', '');
		$('#cirnomathclass').hide();
		vidplaying=false;
	}
	else if(georgebackground){
		$('#songplayer').get(0).pause();
		$('body').css('background-image', '');
		$('body').css('background', '');
		georgebackground = false;
	}
	else if(gifbackground){
		gifbackground = false;
		console.log(gifbackground);
		$('body').css('background-image', '');
		$('body').css('background', '');
		document.getElementById('cirnomathclass').pause();
		$('#cirnomathclass').hide();
		$('#songplayer').get(0).pause();
		$('#songplayer2').get(0).pause();
	}
	else{
		gifbackground = true;
		console.log(gifbackground);
		$('body').css('background-image', 'url('+object.data[0].images.downsized.url+')');
		$('#songplayer2').get(0).play();
	}
})

$('#georgeyoo').click(function(){
	gifbackground = false;
	georgebackground = true;
	vidplaying=false;
	// $('#videocontainer').empty();
	$('#songplayer2').get(0).pause();
	$('body').css('background-image', 'url(images/george.gif)').css('background-color', 'pink');
	$('#songplayer').get(0).play();
	document.getElementById('cirnomathclass').pause();
	$('#cirnomathclass').hide();
	$('#gifs').empty();
	$('#gifs').append('<div class="row"><div class="col-xs-3"></div><div id="noresults" class="col-xs-6">N0 R3SUL75...</div><div class="col-xs-3"></div></div>');
	$('#gifs').append('<div class="row"><div class="col-xs-3"></div><div id="noresults" class="col-xs-6">1337 TA 7H0UGH!</div><div class="col-xs-3"></div></div>');
});

$('#geddan').click(function(){
	gifbackground = false;
	vidplaying=true;
	georgebackground = false;
	// $('#videocontainer').empty();
	// $('#videocontainer').append('<video id="cirnomathclass" autoplay loop><source src="media/cirnomathclass.mp4" type="video/mp4"></video>');
	$('#songplayer2').get(0).pause();
	$('body').css('background-image', '').css('background-color', '#FF9C00');
	$('#videocontainer').show();
	$('#songplayer').get(0).pause();
	document.getElementById('cirnomathclass').play();
	$('#cirnomathclass').show();
	$('#gifs').empty();
	$('#gifs').append('<div class="row"><div class="col-xs-1"></div><div id="noresults" class="col-xs-10">Get Down yureru  mawaru  fureru  setsunai kimochi futari de issho ni nemuru  Winter Land anata dake mitsumete  watashi dake mitsumete asu woOOooOOooOOoo chikau gyutto  dakare  moeru koigokoro hageshiku  maichiru  yuki ni tsutsumarete eien ni aishiteru  kyou yori aishiteru zuttoOOooOOooOOoo  Eternal Love</div><div class="col-xs-1"></div></div>');
});

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

$('#form1').keypress(function(e){
	if(e.keyCode==13){
	e.preventDefault();
	$('#formButton').click();
  	}
});

$('#formButton').click(function(){
	var x = document.getElementById("form1");
	custom=x.elements[0].value;
	console.log(x.elements[0].value);
	var customL=x.elements[0].value.toLowerCase();
	queryURL = 'https://api.giphy.com/v1/gifs/search?q='+custom+'&api_key=dc6zaTOxFJmzC&MPAA=R&limit='+imagecount+''
	getgifs();

	if(document.getElementById(customL)){
		swoosh.play();
		custom = x.elements[0].value;
		queryURL = 'https://api.giphy.com/v1/gifs/search?q='+custom+'&api_key=dc6zaTOxFJmzC&MPAA=R&limit='+imagecount+''
	}
	else{
	swoosh.play();
	$('#buttons').append('<button id="'+customL+'" value="'+customL+'" class="buttonswoosh buttonclick btn btn-6 btn-6b">'+custom+'</button>');
	document.getElementById(customL).addEventListener("click", function(){
		var value = this.value;
		custom = value;
		queryURL = 'https://api.giphy.com/v1/gifs/search?q='+custom+'&api_key=dc6zaTOxFJmzC&MPAA=R&limit='+imagecount+''
		swoosh.play();
		getgifs();
		});
	};
});

function getgifs(){
$('#gifs').empty();
$.ajax({
	    url: queryURL,
	    method: "GET"
    }).done(function(response) {
	    console.log(response);
	    rowNum = 1;
	    object = response;
	if(response.data.length<1){
		swoosh.pause();
		fail.play();
		$('#gifs').empty();
		console.log('Images: 0');
		$('#gifs').append('<div class="row"><div class="col-xs-3"></div><div id="noresults" class="col-xs-6">NO RESULTS...</div><div class="col-xs-3"></div></div>');
		$('#gifs').append('<div class="row"><div class="col-xs-3"></div><div id="noresults" class="col-xs-6">TRY SOMETHING ELSE!</div><div class="col-xs-3"></div></div>');		
	}
	else {
		console.log('Images: '+response.data.length+'');
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
	    for (var i = 0; i < response.data.length; i++) {
	    	$('#gif'+i+'').append('<div class="col-xs-3 gifContainer"><a href="'+response.data[i].url+'" target="_blank"><img numvalue="'+i+'" src="'+response.data[i].images.downsized.url+'"></a></div>');
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
	    if(gifbackground){
	    	$('body').css('background-image', 'url('+object.data[0].images.downsized.url+')');
	    }
	    else{
	    	return;
	    }
	}
    });
}

// function playtyping(){
// 	typing.play();
// }
// playtyping();

getgifs();

typing.play();

$('.buttontyping').click(function(){
	typing.play();
});

$('.buttontypingslow').click(function(){
	typingslow.play();
});

$('.buttontypewriter').click(function(){
	typewriter.play();
});

$('.buttonthanksobama').click(function(){
	thanksobama.play();
});

$('.buttonrubberduck').click(function(){
	rubberduck.play();
})

$('.buttonmeow').click(function(){
	meow.play();
})

$('.buttonjake').click(function(){
	jake.play();
})

$('.buttonmathematical').click(function(){
	mathematical.play();
})

$('.buttonswoosh').click(function(){
	swoosh.play();
})

$('.buttontoasty').click(function(){
	toasty.play();
})