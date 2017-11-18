function GoogleMap(){return{getGoogleMaps:function(t){var o=new google.maps.Map(document.getElementById("map")),n=new google.maps.LatLngBounds;return t.map(function(t,e){var a=new google.maps.LatLng(t.coordinates);n.extend(a),o.fitBounds(n),o.panToBounds(n)}),{map:o}},addMarkers:function(t,o){var n=o.map(function(o,n){return new google.maps.Marker({position:o.coordinates,label:o.label,map:t})});o.map(function(t,o){return n[o].addListener("click",function(){window.open("https://www.google.com/maps/dir/?api=1&destination="+t.coordinates.lat+","+t.coordinates.lng,"_blank")})}),$.getScript("https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js",function(){new MarkerClusterer(t,n,{gridSize:15,imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"})})},getDistance:function(t,o,n){(new google.maps.DistanceMatrixService).getDistanceMatrix({origins:[t],destinations:o,travelMode:"DRIVING",unitSystem:google.maps.UnitSystem.IMPERIAL,avoidHighways:!1,avoidTolls:!1},function(t,o){"OK"===o?n(t.rows[0].elements):alert("Geocode was not successful due to: "+o)})}}}function getCurrentPosition(t){if(navigator.geolocation)navigator.geolocation.getCurrentPosition(function(o){var n={lat:o.coords.latitude,lng:o.coords.longitude};t(n)},function(){console.log("geolocation error");t(null)});else{console.log("The browser does not support geolocation");t(null)}}function loadMapsScript(t){var o=t.map(function(t,o){return t.coordinates});$.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBZAdtCTX8ZlyU39tML3S_dOmmWWAh6cdk",function(){console.log("google maps script loaded");var n=GoogleMap();n.addMarkers(n.getGoogleMaps(t).map,t),getCurrentPosition(function(e){n.getDistance(e,o,function(o){var n=o.map(function(o,n){return t[n].distance=o.distance.value,t[n].miles=o.distance.text,t[n]}).sort(function(t,o){return t.distance-o.distance});Location.renderLocations(n,function(){menuClickEvent(t)}),Location.searchLocations(t,function(){menuClickEvent(t)})})})}),Location.renderLocations(t,function(){menuClickEvent(t)}),Location.searchLocations(t,function(){menuClickEvent(t)})}function menuClickEvent(t){$("[rel*='Menu-']").click(function(o){var n=$(o.target).attr("rel").split("-"),e=n[1],a=n[2],s=n[3],i=n[4],c="House"===e?t[i].houseMenuUrl:t[i].cateringMenuUrl;Menu.renderMenu(e,a,s,c)})}var Menu=function(t){return{renderMenu:function(o,n,e,a){var s="";s+='<div class="modal fade" id="'+n+o+'Modal" role="dialog">',s+='<div class="modal-dialog modal-lg">',s+='<div class="modal-content">',s+='<div class="modal-header">',s+='<button type="button" class="close" data-dismiss="modal">&times;</button>',s+='<p class="modal-title">'+e+" "+o+' Menu<a href="../wp-content/themes/texsite/pdf/'+o+"_"+n+'.pdf" target="_blank"><i class="fa fa-print" aria-hidden="true"></i></a></p>',s+="</div>",s+='<div class="modal-body">',s+='<div class="smaller-screen-locations">',a.map(function(t){return s+='<img src="../wp-content/themes/texsite/images/'+t+'.jpg" alt="'+t+' menu" width="100%"> <p></p>'}),s+="</div>",s+='<div class="large-screen-locations">',s+='<object rel="pdf-'+o+"-"+n+'" id="'+n+"-"+o+'-pdf" class="pdf-image" type="application/pdf" data="../wp-content/themes/texsite/pdf/'+o+"_"+n+'.pdf" style="width: 100%">',s+="Your browser does not support objects",s+="</object>",s+="</div>",s+="</div>",s+='<div class="modal-footer">',s+='<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>',s+="</div>",s+="</div>",s+="</div>",s+="</div>",t("#menus").html(s)}}}(jQuery),Location=function(t){function o(t,o){var n="";return n+="<li>",n+='<div class="row main-location">',n+='<div class="location-info col-lg-6">',n+="<h4>"+t.name+"</h4>",n+="<p>"+t.address+"</p>",n+="<p>"+t.city+", ",n+=t.state+" ",n+=t.zip+"</p>",n+='<a href="tel:'+t.phone+'">T. '+t.phone+"</a>",n+="<p>"+t.hours1+"</p>",n+="<p>"+t.hours2+"</p>",n+="<p>"+t.hours3+"</p>",t.miles?n+="<p>Distance: "+t.miles+"</p>":n+="<p></p>",n+="</div>",n+='<div class="location-buttons col-lg-6">',n+='<div class="row">',n+='<a rel="Menu-House-'+t.label+"-"+t.name+"-"+o+'" class="btn btn-default col-lg-6 col-md-6 col-sm-6 col-xs-6" role="button" data-toggle="modal" data-target="#'+t.label+'HouseModal"> Menu</a>',n+='<a rel="Menu-Catering-'+t.label+"-"+t.name+"-"+o+'" class="btn btn-default col-lg-6 col-md-6 col-sm-6 col-xs-6" role="button" data-toggle="modal" data-target="#'+t.label+'CateringModal"> Catering Menu</a>',n+="</div>",n+='<div class="row">',n+='<a class="btn btn-danger" href="https://www.google.com/maps/dir/?api=1&destination='+t.coordinates.lat+","+t.coordinates.lng+'" target="_blank" role="button"> Directions</a>',n+="</div>",n+="</div>",n+="</div>",n+="</li>"}return{renderLocations:function(n,e){var a='<ul class="searchresults">';t.each(n,function(t,n){a+=o(n,t)}),a+="</ul>",t("#update").html(a),e()},searchLocations:function(n,e){t("#search").keyup(function(){var a=t("#search").val(),s=new RegExp(a,"i"),i='<ul class="searchresults">';t.each(n,function(t,n){-1==n.name.search(s)&&-1==n.address.search(s)&&-1==n.zip.search(s)&&-1==n.state.search(s)&&-1==n.city.search(s)||(i+=o(n,t))}),i+="</ul>",t("#update").html(i),e()})}}}(jQuery),GETinfo=window.location.href.split("/");"locations-menu"===GETinfo[3]?$.getJSON("../wp-content/themes/texsite/json/locations.json",function(t){loadMapsScript(t.locations)}):"great-hills"===GETinfo[3]?$.getJSON("../wp-content/themes/texsite/json/locations.json",function(t){loadMapsScript([t.locations[0]])}):"lakeline"===GETinfo[3]?$.getJSON("../wp-content/themes/texsite/json/locations.json",function(t){loadMapsScript([t.locations[1]])}):"sunset"===GETinfo[3]?$.getJSON("../wp-content/themes/texsite/json/locations.json",function(t){loadMapsScript([t.locations[2]])}):"frisco-warren-pkwy"===GETinfo[3]?$.getJSON("../wp-content/themes/texsite/json/locations.json",function(t){loadMapsScript([t.locations[3]])}):"las-colinas"===GETinfo[3]?$.getJSON("../wp-content/themes/texsite/json/locations.json",function(t){loadMapsScript([t.locations[4]])}):"old-town"===GETinfo[3]?$.getJSON("../wp-content/themes/texsite/json/locations.json",function(t){loadMapsScript([t.locations[5]])}):"plano"===GETinfo[3]?$.getJSON("../wp-content/themes/texsite/json/locations.json",function(t){loadMapsScript([t.locations[6]])}):"richardson"===GETinfo[3]?$.getJSON("../wp-content/themes/texsite/json/locations.json",function(t){loadMapsScript([t.locations[7]])}):"arlington-uta-campus"===GETinfo[3]?$.getJSON("../wp-content/themes/texsite/json/locations.json",function(t){loadMapsScript([t.locations[8]])}):"okc"===GETinfo[3]?$.getJSON("../wp-content/themes/texsite/json/locations.json",function(t){loadMapsScript([t.locations[9]])}):"laredo"===GETinfo[3]?$.getJSON("../wp-content/themes/texsite/json/locations.json",function(t){loadMapsScript([t.locations[10]])}):"mcallen"===GETinfo[3]?$.getJSON("../wp-content/themes/texsite/json/locations.json",function(t){loadMapsScript([t.locations[11]])}):"houston-westheimer"===GETinfo[3]&&$.getJSON("../wp-content/themes/texsite/json/locations.json",function(t){loadMapsScript([t.locations[12]])});