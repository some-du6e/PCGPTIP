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
  } //copy old code cuz i still dont know cors
  

function silly() {
    var ayuncraft = httpGet("./ayuncraft/start.bat", true)
    alert(ayuncraft)
}

alert("loaded")
document.getElementById("silly").addEventListener("click", silly);