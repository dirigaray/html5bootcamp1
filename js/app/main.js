require(["jquery", "jquery.mobile", "app/MovieModule", "app/DirectorModule"], function($, $Mob, Movie, Director) {
	var et = new Movie();
	et.set("name", "E.T.");
	
	var director = new Director(
		"Steven Spielberg", 
		[
			"I dream for a living", 
			"I'm not really interested in making money",
			"When I grow up, I still want to be a director"
		]
	);
	
	et.set("director", director);
	
	et.get("director").speak();
	
	et.play();
	
	$("#quote-button").click(function(){
		$("#quote-content").html(et.get("director").getAQuote());
	});
	
});