/**
 * File header.js.
 *
 * scripts for header elements
 *
 */
(function( $ ) {
    const access_token = '3959116306.6ae6b94.93ae2da0898848099338d9cde7ac0ad2';

    $.get( "https://api.instagram.com/v1/users/self/media/recent/?access_token=" + access_token, function( data ) {
        data.data.map(function (element) {
            $( ".result" ).append( "<img class='col-lg-2 col-sm-3' src=" + element.images.standard_resolution.url + ">" );
        })
        // $( ".result" ).html( "<img src=" + data.data[0].images.standard_resolution.url + ">" );
        //alert( "Load was performed." );
        //console.log(data);
    });

//    const access_token = '3959116306.6ae6b94.93ae2da0898848099338d9cde7ac0ad2';
//    const result = HTTP.call('GET', 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + access_token,
})( jQuery );