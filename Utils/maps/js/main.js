$(document).ready(pageReady);

function pageReady() {

    // Geolocation on page load w/o map stuff
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          console.log(pos);
           // Rest of your geolocation dependent code goes here

        }, function() {

        });
      }     
      else {
        // browser doesn't support geolocation
      }



	// Initialize map variable.
	var map;

	// Initialize place variable (used by autocomplete later).
	var place;


	// Initializes new Google Map object with parameters
	function initializeMap() {
	  var mapProp = {
	    center: new google.maps.LatLng(51.508742,-0.120850),
	    zoom: 5	    
	  };
	  	// Create map element on page
	    var mapElement = $("#map-container")[0];
	    map = new google.maps.Map(mapElement, mapProp);
	    
        // Geolocation
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };

            // Creates map marker
              var marker1 = new google.maps.Marker({
                position: pos,
                map: map,
                title: 'Hello World!'
              });                

              map.setCenter(pos);
            }, function() {

            });
          }     


	}
	initializeMap();


	$("#latlng-button").click(latLngButton);

	function latLngButton() {
		// Get inputs for latlng
		var lat = $("#lat-input").val();
		var lng = $("#lng-input").val();

		// Set new map center
		map.setCenter(new google.maps.LatLng( lat, lng ) );

	}

	$("#map-button").click(mapButton);

	function mapButton() {
		if (place != undefined) {
			var lat = place.geometry.location.lat();
			var lng = place.geometry.location.lng();			
			map.setCenter(new google.maps.LatLng(lat, lng));
			map.setZoom(18);
		}

	}	

	// Set up autocomplete functionality
	var input = $("#address-input")[0];
	var autocomplete = new google.maps.places.Autocomplete(input);

	autocomplete.addListener('place_changed', function() {
		place = autocomplete.getPlace();
		if (!place.geometry) {
		  window.alert("Autocomplete's returned place contains no geometry");
		  return;
		}
	});	

}

