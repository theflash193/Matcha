function initMap() {
	var urulu = {lat: -25.363, lng: 131.044};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: urulu
	});
	var marker = new google.maps.Marker({
		position: urulu,
		map: map
	});
	console.log("hello world");
}
