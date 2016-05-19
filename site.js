$(document).ready(function(){

	$('#menu li').click(function(){
		console.log(this);
		var sectionid = $(this).attr('id');
		console.log(sectionid);

		var url = "https://api.nytimes.com/svc/topstories/v2/"+ sectionid +".json";
		url += '?' + $.param({
  		'api-key': "895d0f9965844bdd93426e59dc2fce01"
		});

		$.ajax({
		  url: url,
		  method: 'GET',
		}).done(function(data) {
		  // console.log(data.results);

		  for (var i=0; i<data.results.length; i++){
          console.log(data.results[i].section);
		  }

		}).fail(function(err) {
		  throw err;
		});

	});

});

var information = document.getElementbyId('menu');
information.innerHTML = div.innerHTML + 'Extra stuff';