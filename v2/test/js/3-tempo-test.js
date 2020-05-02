$(document).ready(function(){
	
	$("#thesis").attr({href:"../thesis.html"});
	
	
	$("#exit").attr({href:"../pagina2.html"});
	
	$("#back").attr({href:"javascript:window.history.back();"});
	
	
	$("#bottone-fondo-pagina-0").attr({href:"3-tempo-test1.html"});
	
	$("#bottone-fondo-pagina-1").attr({href:"3-tempo-test2.html"});
	
	$("#bottone-fondo-pagina-2").attr({href:"3-tempo-test3.html"});
	
	$("#bottone-fondo-pagina-3").attr({href:"3-tempo-test4.html"});
	
	$("#bottone-fondo-pagina-4").attr({href:"3-tempo-test5.html"});
	
	$("#bottone-fondo-pagina-5").attr({href:"3-tempo-test6.html"});
	
	$("#bottone-fondo-pagina-6").attr({href:"3-tempo-test7.html"});
	
	$("#bottone-fondo-pagina-7").attr({href:"3-tempo-test8.html"});
	
	$("#bottone-fondo-pagina-8").attr({href:"3-tempo-test9.html"});
	
	$("#bottone-fondo-pagina-9").attr({href:"3-tempo-test10.html"});
	
	$("#bottone-fondo-pagina-10").attr({href:"3-tempo-test11.html"});
	
	$("#bottone-fondo-pagina-11").attr({href:"../pagina2.html"});
	
	
	$("#pallini-rossi-a circle").css({fill:"#ea5239"});
	$("#pallini-rossi-b circle").css({fill:"#ffffff"});
	$("#risposta-a,#risposta-b").css("cursor", "default");
	
	$("#pallini-a circle,#pallini-rossi-a circle,#risposta-a").click(function() {
		$("#pallini-rossi-a circle").css({fill:"#ea5239"});
		$("#pallini-rossi-b circle").css({fill:"#ffffff"});
	});
	
	$("#pallini-b circle,#pallini-rossi-b circle,#risposta-b").click(function() {
		$("#pallini-rossi-a circle").css({fill:"#ffffff"});
		$("#pallini-rossi-b circle").css({fill:"#ea5239"});
	});

});