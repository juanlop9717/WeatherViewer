

if (navigator.geolocation){
	navigator.geolocation.getCurrentPosition(function(position){
		var latitude = position.coords.latitude
		var longitude = position.coords.longitude


	$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=4784fd11640d83a5190c5037a053ec7b", function(a) {
		// Current COndition
		console.log("se");
		var clima = Math.round(a.main.temp -  273);
		$("#temp").html(clima+ "°");
		$("#weat").html("<img src='http://openweathermap.org/img/w/" + a.weather[0].icon + ".png' alt='Icon depicting current weather.'>");
		clima2 = Math.round(1.8*clima+32);

		$("#changef").click(function(){
		$("#temp").html(clima2+"°");
	})

	$("#changec").click(function(){
		$("#temp").html(clima+"°");
	})
		
	})


  })
	

	var $loading = $('#loadingDiv').hide();
	$(document)
  .ajaxStart(function () {
    $loading.show();
  	})
  	.ajaxStop(function () {
    $loading.hide();
  	});
}

