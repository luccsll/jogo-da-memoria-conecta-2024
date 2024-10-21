var boxItem = "<span class='boxItem'></span>"
var boxGreen = "<span class='boxItem boxGreen'></span>"
var boxCian = "<span class='boxItem boxCian'></span>"
var boxBlue = "<span class='boxItem boxBlue'></span>"

var background = $('#background')

var screenWidth = window.innerWidth
var screenHeight = window.innerHeight
var sizeBox = 80
var gap = 5;

var boxesInWidth = Math.floor(screenWidth / (sizeBox + gap));
var boxesInHeight = Math.floor(screenHeight / (sizeBox + gap));

var totalBoxes = boxesInWidth * boxesInHeight;

ct = 0;
while (ct < totalBoxes) {
    var randomValue = Math.random();

    var boxToInsert;
    if (randomValue < 0.75) {
        boxToInsert = boxItem;
    } else if (randomValue < 0.78) {
        boxToInsert = boxGreen;
    } else if (randomValue < 0.80) {
        boxToInsert = boxCian;
    } else if (randomValue < 0.89) {
        boxToInsert = boxBlue;
    }

    background.append(boxToInsert);
    ct++;
}