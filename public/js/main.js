$.getJSON('data', function(data) {
	$('#temp')[0].innerHTML = data[0].temp;
	$('#humidity')[0].innerHTML = data[0].humidity;
	$('#time')[0].innerHTML = new Date(data[0].time).toLocaleString();
});
