define([
	'jquery', 
	'underscore', 
	'backbone',
	'app/Models/MovieModel'
], function($, _, Backbone, MovieModel) {
	var MovieCollection = Backbone.Collection.extend({
		model: MovieModel,
		url : '/data.json',
		initialize : function() {}
    });
	
	return MovieCollection;
});