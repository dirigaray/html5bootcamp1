define(['backbone'], function(Backbone) {

	var MovieModel = Backbone.Model.extend( {
		defaults : {
			name: "",
			duration: "",
			director: ""
		}

	});

	return MovieModel;

});