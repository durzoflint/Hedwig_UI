function openNav() {
    document.getElementById("mySidenav").style.width = "30%";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
var modalContent = document.getElementsByClassName("modal-content");
var myButton = document.getElementsByClassName("myButton");
window.onclick = function(event) {
	for (var i = modalContent.length - 1; i >= 0; i--)
	{
		if (event.target != modalContent[i] && event.target != myButton[i])
	    {
	        modalContent[i].style.display = "none";
	    }
	}
}
var ropModal = document.getElementById('ropModal');
var ropBtn = document.getElementById("ropButton");
var ropSpan = document.getElementById("closeROP");
ropBtn.onclick = function() {
    ropModal.style.display = "block";
}
ropSpan.onclick = function() {
    ropModal.style.display = "none";
}
var pamModal = document.getElementById('pamModal');
var pamButton = document.getElementById("pamButton");
var closePAM = document.getElementById("closePAM");
pamButton.onclick = function() {
    pamModal.style.display = "block";
}
closePAM.onclick = function() {
    pamModal.style.display = "none";
}
var resModal = document.getElementById('resModal');
var resButton = document.getElementById("resButton");
var closeRES = document.getElementById("closeRES");
resButton.onclick = function() {
    resModal.style.display = "block";
}
closeRES.onclick = function() {
    resModal.style.display = "none";
}
var oiModal = document.getElementById('oiModal');
var oisButton = document.getElementById("oisButton");
var closeOI = document.getElementById("closeOI");
oisButton.onclick = function() {
    oiModal.style.display = "block";
}
closeOI.onclick = function() {
    oiModal.style.display = "none";
}
var srModal = document.getElementById('srModal');
var srButton = document.getElementById("srButton");
var closeSR = document.getElementById("closeSR");
srButton.onclick = function() {
    srModal.style.display = "block";
}
closeSR.onclick = function() {
    srModal.style.display = "none";
}