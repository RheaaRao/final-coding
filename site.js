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
var result= document.createElement("div")
var title= getElementById(".opinion").appendChild(result)


// function showOnScreen(){
// _.each(section, function(data){
	// $(".list").append("<option value="+section+">"+section+"</option");
// });
// }

// function onPage(data){
// 	var html=[];
// 	_.each(data, function(data){
// 		html.push("<a href"+ section.url+">"+section.title+ "</a><p>"+ story.abstract);
		
// 	)};
// }