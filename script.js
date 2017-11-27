// urloldkey = 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC'
var custom = 'bearded dragon'
var imagecount = 20;
var queryURL = 'http://api.giphy.com/v1/gifs/search?q='+custom+'&api_key=dc6zaTOxFJmzC&MPAA=R&limit='+imagecount+''
var object;

$('#onePlus').click(function() {
	if(imagecount<99){
	imagecount+=1;
	$('#imgCounter').text(imagecount);
	queryURL = 'http://api.giphy.com/v1/gifs/search?q='+custom+'&api_key=dc6zaTOxFJmzC&MPAA=R&limit='+imagecount+''
	}
});

$('#oneMinus').click(function() {
	if(imagecount>1){
	imagecount-=1;
	$('#imgCounter').text(imagecount);
	queryURL = 'http://api.giphy.com/v1/gifs/search?q='+custom+'&api_key=dc6zaTOxFJmzC&MPAA=R&limit='+imagecount+''
	}
});

$('.buttonclick').click(function(){
	var value = this.value;
	custom = value;
	queryURL = 'http://api.giphy.com/v1/gifs/search?q='+custom+'&api_key=dc6zaTOxFJmzC&MPAA=R&limit='+imagecount+''
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
	queryURL = 'http://api.giphy.com/v1/gifs/search?q='+custom+'&api_key=dc6zaTOxFJmzC&MPAA=R&limit='+imagecount+''
	getgifs();

	if(document.getElementById(customL)){
		custom = value;
		queryURL = 'http://api.giphy.com/v1/gifs/search?q='+custom+'&api_key=dc6zaTOxFJmzC&MPAA=R&limit='+imagecount+''
		getgifs();
	}
	else{
	$('#buttons').append('<button id="'+customL+'" value="'+customL+'" class="btn btn-6 btn-6b">'+custom+'</button>');
	document.getElementById(customL).addEventListener("click", function(){
		var value = this.value;
		custom = value;
		queryURL = 'http://api.giphy.com/v1/gifs/search?q='+custom+'&api_key=dc6zaTOxFJmzC&MPAA=R&limit='+imagecount+''
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
		$('#imagesFound').text('Images: 0');
	}
	else {
		$('#imagesFound').text('Images: '+response.data.length+'');
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
	    				changeImg.attr("src",""+object.data[j].images.downsized_still.url+"").css('opacity', '0.6');
					});
				document.getElementById('gif'+i+'').addEventListener("mouseout", function(){
	    				var changeImg = $(this).children().eq(0).children().eq(0).children().eq(0);
	    				var j = changeImg.attr('numvalue');
	    				console.log('out');
	    				console.log(j);
	    				changeImg.attr("src",""+object.data[j].images.downsized.url+"").css('opacity', '1');
					});	    		
	    }
	}
    });
}

getgifs();

