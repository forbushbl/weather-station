$.getJSON('data', function(data) {
	var tempCelsius = parseFloat(data[0].temp);
	var tempFahrenheit = (tempCelsius * (9 / 5)) + 32;
	$('#temp')[0].innerHTML = tempFahrenheit.toFixed(2);
	$('#humidity')[0].innerHTML = data[0].humidity.toFixed(2);
	$('#time')[0].innerHTML = new Date(data[0].time).toLocaleString();
});
