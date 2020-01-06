var jsonData = JSON.parse('/start.json');
                          
while (jsonData.starthunt == false) {
    // ...
    jsonData = JSON.parse("/start.json");
    if (jsonData.starthunt == true) {
        window.location.replace("https://tofubytesrbx.github.io/BeachIV-Scavenger-Hunt/start.html");
        break;
    } 
}