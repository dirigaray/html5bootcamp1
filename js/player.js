$(document).ready(function() {
	
	// Creating movie instances
	var terminator = new Movie();
	var ironman2 = new Movie();

	// Setting properties
	terminator.set("name", "Terminator");
	terminator.set("duration", "50");
	terminator.set("director", "Pepa");
	
	ironman2.set("name", "Ironman 2");
	ironman2.set("duration", "60");
	ironman2.set("director", "Pepa");

	// Creating an object that observe movies
	var movieObserver = {
		name: "Pepito",
		watching: function(movie) {
			console.log("Hi!!! I'm watching " + movie);
		},
		stoping: function(movie) {
			console.log("Ohhh! " + movie + " was stoped!");
		},
	};
	
	// Converting the movies created above into publishers
	makePublisher(terminator);
	makePublisher(ironman2);
	
	// Subscribing observer to movie events
	terminator.subscribe(movieObserver.watching, 'play');
	ironman2.subscribe(movieObserver.watching, 'play');
	terminator.subscribe(movieObserver.stoping, 'stop');
	ironman2.subscribe(movieObserver.stoping, 'stop');
	
	
	terminator.play();
	ironman2.play();
	ironman2.stop();
	terminator.stop();
	
	// Creating a downloadable movie
	downloadableMovie = new DownloadableMovie();
	
	downloadableMovie.set("name", "Terminator");
	downloadableMovie.set("duration", "50");
	downloadableMovie.set("director", "Pepa");
	
	downloadableMovie.download();
	
	// Extending movie class with social properties
	$.extend(Movie.prototype, Social);
	
	var rambo = new Movie();
	rambo.set("name", "Rambo");
	rambo.share("Damian");
	rambo.like();
	
	var simpsons = new Movie();
	simpsons.set("name", "The Simpsons");
	
	var bart = new Actor();
	bart.set("name", "Bart");
	
	var homero = new Actor();
	homero.set("name", "Homero");
	
	simpsons.addActor(bart);
	simpsons.addActor(homero);
	
	simpsons.showActors();
	
	
	


});


