//home page function
<<<<<<< HEAD
function myfunction() {
    var link = '<a href = "http://www.paulirish.com/2009/random-hex-color-code-snippets/"> Random HEX </a>';
    var imglink = '<img src ="http://todaymade.com/blog/wp-content/uploads/2013/03/troll-face.png" height="320" width="320"></img>'
    document.getElementById("demo").innerHTML = "First I'm showing you some random background color. Found a great article: " + link + ", looks pretty useful. Just gonna throw it out there";
    document.getElementById("showbutton").innerHTML = imglink;
    document.getElementById("trollface").innerHTML = '<h2>trololololol</h2>';
    document.getElementById("continue").innerHTML = '<h3><a href="2/2.html">Stop!!!</a></h3>';
    setInterval(function () {
        var color = new String();
        color.becameRandom = '#' + Math.floor(Math.random() * 16777215).toString(16); //16777215 = ffffff in decimal
=======
function myfunction(){
    var link = '<a href = "http://www.paulirish.com/2009/random-hex-color-code-snippets/"> Random HEX </a>';
    var imglink = '<img src ="http://todaymade.com/blog/wp-content/uploads/2013/03/troll-face.png" height="320" width="320"></img>'
    document.getElementById("demo").innerHTML="First I'm showing you some random background color. Found a great article: " + link + ", looks pretty useful. Just gonna throw it out there";
    document.getElementById("showbutton").innerHTML=imglink;
    document.getElementById("trollface").innerHTML='<h2>trololololol</h2>'; 
    document.getElementById("continue").innerHTML='<h3><a href="2/2.html">Stop!!!</a></h3>';
    setInterval(function(){ 
        var color = new String();
        color.becameRandom = '#'+Math.floor(Math.random()*16777215).toString(16); //16777215 = ffffff in decimal
>>>>>>> e058248e57082a272862b5dff170955746c4fac4
        document.getElementById("body").style.background = color.becameRandom;
    }, 100);
}