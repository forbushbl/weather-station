$.getJSON('family', function(data) {
	$('#temp')[0].innerHTML = data[0].name;
	$('#humidity')[0].innerHTML = data[1].name;

	$.each(data, function(i, e) {
		$('body').append('<p>' + e.name + '</p>');
	});
});
