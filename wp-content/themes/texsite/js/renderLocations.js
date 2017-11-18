var Location = (function ($) {

    function renderLocations(locations, cb) {

        var output = '<ul class="searchresults">';
        $.each(locations, function (key, val) {
            output += get_output(val, key); // function
        });
        output += '</ul>';
        $('#update').html(output);

        cb(); //callback
    }

    function searchLocations(locations, cb) {
        $('#search').keyup(function () {
            var searchField = $('#search').val();
            var myExp = new RegExp(searchField, "i");
            var output = '<ul class="searchresults">';
            $.each(locations, function (key, val) {
                if ((val.name.search(myExp) != -1) ||
                    (val.address.search(myExp) != -1) ||
                    (val.zip.search(myExp) != -1) ||
                    (val.state.search(myExp) != -1) ||
                    (val.city.search(myExp) != -1)) {

                    output += get_output(val, key); // function
                }
            });
            output += '</ul>';
            $('#update').html(output);

            cb(); //callback
        });
    }

    function get_output(val, key) {
        var output = '';

        output += '<li>';
        output += '<div class="row main-location">';

        output += '<div class="location-info col-lg-6">';
        output += '<h4>' + val.name + '</h4>';
        output += '<p>' + val.address + '</p>';
        output += '<p>' + val.city + ', ';
        output += val.state + ' ';
        output += val.zip + '</p>';
        output += '<a href="tel:' + val.phone + '">' + 'T. ' + val.phone + '</a>';
        output += '<p>' + val.hours1 + '</p>';
        output += '<p>' + val.hours2 + '</p>';
        output += '<p>' + val.hours3 + '</p>';
        (val.miles ? output += '<p>Distance: ' + val.miles + '</p>' : output += '<p>' + '</p>');
        output += '</div>';

        output += '<div class="location-buttons col-lg-6">';
        output += '<div class="row">';
        output += '<a rel="Menu-House-' + val.label + '-' + val.name + '-' + key + '" class="btn btn-default col-lg-6 col-md-6 col-sm-6 col-xs-6" role="button" data-toggle="modal" data-target="' + '#' + val.label + 'HouseModal"> Menu</a>';
        output += '<a rel="Menu-Catering-' + val.label + '-' + val.name + '-' + key + '" class="btn btn-default col-lg-6 col-md-6 col-sm-6 col-xs-6" role="button" data-toggle="modal" data-target="' + '#' + val.label + 'CateringModal"> Catering Menu</a>';
        output += '</div>';
        output += '<div class="row">';
        output += '<a class="btn btn-danger" href="https://www.google.com/maps/dir/?api=1&destination=' + val.coordinates.lat + ',' + val.coordinates.lng + '" target="_blank" role="button"> Directions</a>';
        output += '</div>';
        output += '</div>';

        output += '</div>';
        output += '</li>';

        return output;
    }

    return {
        renderLocations: renderLocations,
        searchLocations: searchLocations
    };


})(jQuery);
