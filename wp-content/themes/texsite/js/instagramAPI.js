/**
 * File header.js.
 *
 * scripts for header elements
 *
 */


function getInstagram(data) {
    console.log(data);
    var i = 0;
    var output = '<div class="container-fluid  instagram-bkg">';
    output += '<div class="row">';

    output += '<div class="instagram-pic col-lg-1 col-md-2 col-sm-3 col-xs-4">';
    output += '<div class="instagram-logo">';
    output += '<a href="https://instagram.com/texadelphianation" target="_blank">';
    output += '<img src=/wp-content/uploads/2017/08/InstagramIcon.png alt="Lights">';
    output += '<div class="caption">';
    output += '</div>';
    output += '</a>';
    output += '</div>';
    output += '</div>';

    data.data.map(function (element) {

        if (i < 11) {
            i++;

            output += '<div class="instagram-pic col-lg-1 col-md-2 col-sm-3 col-xs-4">';
            output += '<div class="">';
            output += '<a href="' + element.link + '" target="_blank">';
            output += '<img src=' + element.images.standard_resolution.url + ' alt="Lights" style="width:100%">';
            output += '<div class="caption">';
            // if ( element.caption) {
            // output += '<p>' + element.caption.text + '</p>';
            // }
            output += '</div>';
            output += '</a>';
            output += '</div>';
            output += '</div>';

        }
    });

    output += '</div>';
    output += '</div>';
    (function ($) {
        $('.result').html(output);
    })(jQuery);
}
    
