
function httpGet(theUrl, nocors) {
    var xmlHttp = new XMLHttpRequest();
    if (nocors == true) {
      var realurl = theUrl;
    } else {
      var realurl = "https://uncors.vercel.app?url=" + theUrl;
    }
    xmlHttp.open("GET", realurl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
  } 

function fetchgames() {
    var games = JSON.parse(httpGet("./gaming.json", true));
    return games;
}