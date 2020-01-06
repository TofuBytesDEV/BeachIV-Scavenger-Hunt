var starthunt = false

do {
    $.ajax({
  url: 'https://raw.githubusercontent.com/TofuBytesRBX/BeachIV-Scavenger-Hunt/master/start.txt',
  dataType: 'json',
  success: function(data){
    console.log( data );
      starthunt = data;
  }
});
    if (starthunt == true);
        window.location.replace("https://tofubytesrbx.github.io/BeachIV-Scavenger-Hunt/start.html");
    break;
}

while (starthunt == false);