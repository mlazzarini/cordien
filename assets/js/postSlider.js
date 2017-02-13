/*$(document).ready(function(e) {
	$('img[usemap]').rwdImageMaps();
});

function removeTrial() {
	document.body.innerHTML = document.body.innerHTML.replace( /Ninja Slider trial version/g, "");
	console.log("removed");
}*/

window.setInterval(function(){
	document.body.innerHTML = document.body.innerHTML.replace( /Ninja Slider trial version/g, "");
	console.log("removed");
}, 5000);
