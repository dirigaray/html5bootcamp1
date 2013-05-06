function getTweets() {
	$.getJSON('http://search.twitter.com/search.json?q=html5&callback=?&rpp=5&include_entities=true&result_type=mixed', function(data) {
		var list = "<ul>";
		$.each(data.results, function(index, item){
			list +="<li>";
			list +="<img src='"+ item.profile_image_url + "'/>";
			list +="<p>" + item.from_user + "</p>";
			list +="<p>" + item.text + "</p>";
			list +="<p>" + item.created_at + "</p>";
			list +="</li>";
		});

		list += "</ul>";

		$('#tweetsContainer').html(list).show();
		
	});
}

function getName() {
	
	$.ajax({
  		dataType: "json",
		url: 'http://bootcamp.aws.af.cm/welcome/Damian',
		success: function(data) {
			$('#serviceResponse').html(data.response).css('background', 'yellow');

		},
		error: function(data) {
			$('#serviceResponse').html('An error occurred').css('background', 'red');
		}
	});

	$('.block').show();

	getTweets();

}



$(document).ready(function(){
	//Alert when page is loaded 
	//alert('Hiiiiii');

	// Focus on the input
	$('#alias').focus();

	$('#btSearch').click(getName);


});