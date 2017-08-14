// get Json using plain javascript to avoid conflict with jquery
var getJSON = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        if (status == 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };
    xhr.send();
};

function initMap() {

     var map = new google.maps.Map(document.getElementById('map'), {
     // center and zoom in bounds
    });

    // center to bounds
    var bounds = new google.maps.LatLngBounds();

    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    getJSON('../wp-content/themes/texsite/json/locations.json', function (err, data) {

        var markers = data.locations.map(function (location, i) {
            // center to bounds
            var loc = new google.maps.LatLng(location.coordinates);
            bounds.extend(loc);

            // adding markers
            return new google.maps.Marker({
                position: location.coordinates,
                //labels
                label: location.label,
            });
        });
        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

        // Add links to markers to open in google maps for directions
        var gMapsClick = data.locations.map(function (location, i) {
            return markers[i].addListener('click', function () {
                window.open('https://www.google.com/maps/dir/?api=1&destination=' + location.coordinates.lat + ',' + location.coordinates.lng, '_blank');
            })
        });

        // center to bounds
        map.fitBounds(bounds);
        map.panToBounds(bounds);

    });
}