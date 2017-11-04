var GETinfo = window.location.href.split('/');
console.log(GETinfo[3]);
if (GETinfo[3] === "locations-menu") {
    $.getJSON('../wp-content/themes/texsite/json/locations.json', function (data) {
        loadMapsScript(data.locations);
    });
} else if (GETinfo[3] === "great-hills") {
    $.getJSON('../wp-content/themes/texsite/json/locations.json', function (data) {
        var inputData = [data.locations[0]];
        loadMapsScript(inputData);
    });
} else if (GETinfo[3] === "lakeline") {
    $.getJSON('../wp-content/themes/texsite/json/locations.json', function (data) {
        var inputData = [data.locations[1]];
        loadMapsScript(inputData);
    });
} else if (GETinfo[3] === "sunset") {
    $.getJSON('../wp-content/themes/texsite/json/locations.json', function (data) {
        var inputData = [data.locations[2]];
        loadMapsScript(inputData);
    });
} else if (GETinfo[3] === "frisco-warren-pkwy") {
    $.getJSON('../wp-content/themes/texsite/json/locations.json', function (data) {
        var inputData = [data.locations[3]];
        loadMapsScript(inputData);
    });
} else if (GETinfo[3] === "las-colinas") {
    $.getJSON('../wp-content/themes/texsite/json/locations.json', function (data) {
        var inputData = [data.locations[4]];
        loadMapsScript(inputData);
    });
} else if (GETinfo[3] === "old-town") {
    $.getJSON('../wp-content/themes/texsite/json/locations.json', function (data) {
        var inputData = [data.locations[5]];
        loadMapsScript(inputData);
    });
} else if (GETinfo[3] === "plano") {
    $.getJSON('../wp-content/themes/texsite/json/locations.json', function (data) {
        var inputData = [data.locations[6]];
        loadMapsScript(inputData);
    });
} else if (GETinfo[3] === "richardson") {
    $.getJSON('../wp-content/themes/texsite/json/locations.json', function (data) {
        var inputData = [data.locations[7]];
        loadMapsScript(inputData);
    });
} else if (GETinfo[3] === "arlington-uta-campus") {
    $.getJSON('../wp-content/themes/texsite/json/locations.json', function (data) {
        var inputData = [data.locations[8]];
        loadMapsScript(inputData);
    });
} else if (GETinfo[3] === "okc") {
    $.getJSON('../wp-content/themes/texsite/json/locations.json', function (data) {
        var inputData = [data.locations[9]];
        loadMapsScript(inputData);
    });
} else if (GETinfo[3] === "laredo") {
    $.getJSON('../wp-content/themes/texsite/json/locations.json', function (data) {
        var inputData = [data.locations[10]];
        loadMapsScript(inputData);
    });
} else if (GETinfo[3] === "mcallen") {
    $.getJSON('../wp-content/themes/texsite/json/locations.json', function (data) {
        var inputData = [data.locations[11]];
        loadMapsScript(inputData);
    });
} else if (GETinfo[3] === "houston-westheimer") {
    $.getJSON('../wp-content/themes/texsite/json/locations.json', function (data) {
        var inputData = [data.locations[12]];
        loadMapsScript(inputData);
    });
}
