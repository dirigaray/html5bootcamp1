require(["jquery", "handlebars", "underscore", "dust"], function($, Handlebars, _, dust) {

	var request = $.getJSON("/data.json");
	
	request.done(function(data) {
		
		$("#handlebars-template-link").bind("click", function() {
			var template = Handlebars.compile($("#handlebars-template").html());
			var html = template(data);
			$(".main").html(html);
		});
		
		$("#underscore-template-link").bind("click", function() {
			var source   = $("#underscore-template").html();
			var compiled = _.template(source, data);
			$(".main").html(compiled);
		});

		$("#dust-template-link").bind("click", function() {
			var source = $("#dust-template").html();
			var compiled = dust.compile(source, "template-dust");
			dust.loadSource(compiled);
			dust.render("template-dust", data, function(err, out) {
				$(".main").html(out);
			});
			
		});

	});
	
	request.fail(function(data) {
		console.log("Error")
	});
});