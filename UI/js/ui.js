var w = window.innerWidth;
var h = window.innerHeight;

//33vw + 8vh
var x = w - (33/100)*w 	- (8/100)*h;
var myWidth = x + "px";

//31vw + x + 4vh
var y = (w - (31/100)*w - x - (4/100)*h)/2;
var myMargin = y + "px";

document.getElementById("typeMessagesHere").style.width = myWidth;
document.getElementById("typeMessagesHere").style.marginRight = myMargin;