$(document).ready(function(){

	$('#menu li').click(function(){
		var sectionid = $(this).attr('id');

		

		var url = "https://api.nytimes.com/svc/topstories/v2/"+ sectionid +".json";
		url += '?' + $.param({
  		'api-key': "895d0f9965844bdd93426e59dc2fce01"
		});

		$.ajax({
		  url: url,
		  method: 'GET',
		}).done(function(data) {
		  console.log(data);

		  for (var i=0; i<data.results.length; i++){
		  	console.log("loop");
		  	console.log(data.results);
            console.log(data.results[i].section);
            var section = data.results[i];


            //var result = document.createElement("div");
            var result = '<div><a href="'+ section.url+'">'+section.title+ '</a><p>'+ section.abstract+'</div>';
            var sectionName = $('#'+sectionid).text();
            $('#'+sectionid).append(result);

		  }

		  

	   //   _.each(data, function(data){
		  //    html.push("<a href"+ section.url+">"+section.title+ "</a><p>"+ story.abstract);
		  // )};

	     _.each(data.results,function(data){
             
	     });


		}).fail(function(err) {
		  throw err;
		});

	});

});


// function showOnScreen(){
// _.each(section, function(data){
	// $(".list").append("<option value="+section+">"+section+"</option");
// });
// }

// function onPage(data){
// 	console.log(data);
// var html=[];
// 	// _.each(data, function(data){
// 	// 	// html.push("<a href"+ section.url+">"+section.title+ "</a><p>"+ story.abstract);
		
// 	// )};
//  }