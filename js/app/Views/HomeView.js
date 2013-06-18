define([
	'jquery', 
	'backbone',
	'underscore',
	'app/Collections/MovieCollection'
], function($, Backbone, _, MovieCollection) {

    var HomeView = Backbone.View.extend({

        el : ('.main'),
		
        initialize : function() {
			var _this = this;

			this.collection = new MovieCollection();
			this.collection.fetch();

            this.listenTo(this.collection,'all', this.render);
            
            this.render();
        },

		render : function() {
			var data = {
				movies : this.collection.toJSON(),
				_ : _
			};
			var compiledTemplate = _.template($('#underscore-template').html(), data);
			this.$el.html(compiledTemplate);
		}
		
    });

    return HomeView;

}); 