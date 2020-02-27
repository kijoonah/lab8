function initMap() {

	L.mapquest.key = 'IvKLe6d5VVyxpFkXjyBcGUbIrfgawkgm';
	const map = L.mapquest.map('map', {
	  center: [32.8788033, -117.2381008],
	  layers: L.mapquest.tileLayer('map'),
	  zoom: 12
	  zoomControl: false
	});

  	L.marker([32.8788033, -117.2381008]).addTo(map);

}  