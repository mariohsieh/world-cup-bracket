// connect to google maps api
//src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCq2uDo_7_aVnJ4jza4vP5CVoURwLr3pa4&sensor=false">

function initialize() {
	
	// define map styles in an array of styles
	var styles = [
		{
			stylers: [
				{ hue: "#00dder" },
				{ saturation: -15 }
			]
		},
		// to turn off labels
		{
			featureType: "all",
			elementType: "labels",
			stylers: [
				{	visibility: "off"	}
			]
		}
	];
	// set map options with mapOptions object
	var mapOptions = {
		center: new google.maps.LatLng(25, 0),
		zoom: 3,
		
		// disable all controls
		disableDefaultUI: true,
		panControl: false,
		draggable: true,
		scrollwheel: true,
		disableDoubleClickZoom: true,
		//zoomControl: false
		//panControlOptions: {
		//}
		//zoomControl: false
		//zoomControlOptions: {
		 // style: google.maps.ZoomControlStyle.SMALL
		//}
		
		styles: styles
	};
	
	// map object creates instance of map class.  can have multiple instances
	// takes two parameters: a div to specifiy where map is located, and map options
	var map = new google.maps.Map(document.getElementById("map-canvas"),
		mapOptions);
}


// for asychronous loading     
function loadMap() {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	// using my own api key
	script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCq2uDo_7_aVnJ4jza4vP5CVoURwLr3pa4&sensor=false&' + 'callback=initialize';
		
	// using example api key
	//script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initialize';
	document.body.appendChild(script);
}

// this can be changed to whatever event you want to load the map
window.onload = loadMap;
//google.maps.event.addDomListener(window, 'load', initialize);
