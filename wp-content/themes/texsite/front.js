function getInstagram(a){var i=0,s='<div class="container-fluid  instagram-bkg">';s+='<div class="row">',s+='<div class="instagram-pic col-lg-1 col-md-2 col-sm-3 col-xs-4">',s+='<div class="instagram-logo">',s+='<a href="https://instagram.com/texadelphianation" target="_blank">',s+='<img src="/wp-content/uploads/2017/08/InstagramIcon.png" alt="instagram">',s+='<div class="caption">',s+="</div>",s+="</a>",s+="</div>",s+="</div>",a.data.map(function(a){i<11&&(i++,s+='<div class="instagram-pic col-lg-1 col-md-2 col-sm-3 col-xs-4">',s+='<div class="">',s+='<a href="'+a.link+'" target="_blank">',s+="<img src="+a.images.low_resolution.url+' alt="Lights" style="width:100%">',s+='<div class="caption">',s+="</div>",s+="</a>",s+="</div>",s+="</div>")}),s+="</div>",s+="</div>",jQuery(".result").html(s)}