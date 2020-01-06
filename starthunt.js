var starthunt = false
$.ajax({
  url: 'https://raw.githubusercontent.com/TofuBytesRBX/BeachIV-Scavenger-Hunt/master/start.txt',
  dataType: 'json',
  success: function(data){
    console.log( data );
      starthunt = data;
  }
});

do {
    $.ajax({
  url: 'https://raw.githubusercontent.com/TofuBytesRBX/BeachIV-Scavenger-Hunt/master/start.txt',
  dataType: 'jsonp',
  success: function(data){
    console.log( data );
      starthunt = data;
  }
});
    if (starthunt == true);
    
    break;
}

while (starthunt == false);