$(document).ready(function(){
	var quart = 0;
	var panda = ["lama", "asticot", "loutre", "panda"];
	var len = panda.length;
	$(".cake").click(function() {
		quart++;
		$("#count").text(quart);
		if(quart % 20 === 0) {
			alert(panda[Math.floor(Math.random() * len)]);
		} else {
			console.log("ok");
		}
	});

});