function myfunction(){
    var randomcolor = '#'+Math.floor(Math.random()*16777215).toString(16); //16777215 = ffffff in decimal
    var link = '<a href = "http://www.paulirish.com/2009/random-hex-color-code-snippets/"> Random HEX </a>';
    document.getElementById("demo").innerHTML="First I'm showing you some random color. Found a great article: " + link + ", looks pretty useful. Just gonna throw it out there";
    document.getElementById("body").style.background = randomcolor;
}

