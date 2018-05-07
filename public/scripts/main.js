$(document).ready(function(){
	//made with forismatic api
	//api request for random quote
	getQuote();
	$("#generate").on("click", function(){
		getQuote();
	});

});

function getQuote(){
	fadeTextOut();
	$.getJSON('https://allorigins.me/get?url=https%3A//api.forismatic.com/api/1.0/%3Fmethod%3DgetQuote%26format%3Djson%26lang%3Den&callback=?', 
		function(data){
			var json = JSON.parse(data.contents);
			console.log(data.contents);
			console.log(json);
			$('#quote').html("<i class='fas fa-quote-left'></i> " +json["quoteText"]);
			if(json["quoteAuthor"]){
				$("#author").html(json["quoteAuthor"]);
			} else {
				$("#author").html("Anonymous");
			}
			fadeTextIn();
			setTweet($("#quote").text(), $("#author").text());	
		}
	);
}

function fadeTextIn(){
	$('#quote').css("color", "black");
	$("#author").css("color", "black");
}

function fadeTextOut(){
	$('#quote').css("color", "white");
	$("#author").css("color", "white");
}

function setTweet(text, author){
	var tweet = '"'+text+'" '+author;
	$("#tweetBtn").attr("href", "https://twitter.com/intent/tweet?text=" + tweet);
}