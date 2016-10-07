$(document).ready(function(){

	var clic = 0;
	var message = ["lama", "asticot", "loutre", "panda"];
	var random = Math.floor(Math.random() * len);
	var len = panda.length;

	$(".cake").click(function(){
		clic++;
		$("#count").text(clic);
		if(clic % 20 === 0) {
			alert(message(random));
		}
	});

});