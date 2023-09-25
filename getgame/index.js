var game = location.hash
var iframe = document.getElementsByClassName('gameframe')
var gamename = document.getElementsByClassName('gamename')
if (game == "" || game == "#") {
    console.log("no gammer")
    iframe[0].src = "../games/404/index.html"
    document.title = "404"
    
}else {
    console.log("gamer")
    var gamedir = "../games/" + game
    iframe[0].src = gamedir.replace("#", "") + "/index.html"
    document.title = "Playing:"+game.replace("#", "")
    gamename[0].innerHTML = document.title
    localStorage.setItem("lastgame", game.replace("#", ""))
}