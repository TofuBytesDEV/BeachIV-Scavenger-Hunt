var starthunt = false



do {
    $.ajax({
  url: '/start.txt',
  dataType: 'text',
  success: function(data){
    console.log( data );
      starthunt = data;
  }
});
    if (starthunt == "true");
        window.location.replace("https://tofubytesrbx.github.io/BeachIV-Scavenger-Hunt/start.html");
    break;
}

while (starthunt == "false");