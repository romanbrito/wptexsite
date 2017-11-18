function GoogleMap() {

    function getGoogleMaps(data) {

            //map and bounds
            var google_map = new google.maps.Map(document.getElementById('map'));
            var bounds = new google.maps.LatLngBounds();

            //center and fit to bounds
            data.map(function (location, i) {
                var loc = new google.maps.LatLng(location.coordinates);
                bounds.extend(loc);
                google_map.fitBounds(bounds);
                google_map.panToBounds(bounds);
            });

        return {
            map: google_map
        };

    }

    function addMarkers(map, data) {
        // Add markers
        var markers = data.map(function (location, i) {

            // adding markers
            return new google.maps.Marker({
                position: location.coordinates,
                label: location.label,
                map: map
            });

        });

        // Add links to markers to open in google maps for directions
        var gMapsClick = data.map(function (location, i) {
            return markers[i].addListener('click', function () {
                window.open('https://www.google.com/maps/dir/?api=1&destination=' + location.coordinates.lat + ',' + location.coordinates.lng, '_blank');
            });
        });

        // Add a marker clusterer to manage the markers.
        $.getScript("https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js", function () {

            var markerCluster = new MarkerClusterer(map, markers,
                {
                    gridSize: 15,
                    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
                });

        });

    }

    function getDistance(origin, destination, cb) {
        var service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix({
            origins: [origin],
            destinations: destination,
            travelMode: 'DRIVING',
            unitSystem: google.maps.UnitSystem.IMPERIAL,
            avoidHighways: false,
            avoidTolls: false
        }, function (response, status) {
            if (status === 'OK') {
                cb(response.rows[0].elements);
            } else {
                alert('Geocode was not successful due to: ' + status);
            }
        });
    }


    return {
        getGoogleMaps: getGoogleMaps,
        addMarkers: addMarkers,
        getDistance: getDistance
    };
}