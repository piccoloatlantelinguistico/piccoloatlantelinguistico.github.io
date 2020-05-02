$(document).ready(function(){
	
	$("#thesis").attr({href:"thesis.html"});
	
	
	$("#hover-bottone-fondo-0,#hover-bottone-sopra-1,#hover-bottone-fondo-1,#hover-bottone-sopra-2").hide();
	
	$("#bottone-fondo-0").hover(
		function(){
			$("#hover-bottone-fondo-0").show("fast");
		},
		function(){
			$("#hover-bottone-fondo-0").hide("fast");
		}
	);
	
	$("#bottone-fondo-1").hover(
		function(){
			$("#hover-bottone-fondo-1").show("fast");
		},
		function(){
			$("#hover-bottone-fondo-1").hide("fast");
		}
	);
	
	$("#bottone-sopra-1").hover(
		function(){
			$("#hover-bottone-sopra-1").show("fast");
		},
		function(){
			$("#hover-bottone-sopra-1").hide("fast");
		}
	);
	
	$("#bottone-sopra-2").hover(
		function(){
			$("#hover-bottone-sopra-2").show("fast");
		},
		function(){
			$("#hover-bottone-sopra-2").hide("fast");
		}
	);
	
	$("#bottone-fondo-0").attr({href:"pagina1.html"});
	
	$("#bottone-fondo-1").attr({href:"pagina2.html"});
	
	$("#bottone-sopra-1").attr({href:"index.html"});
	
	$("#bottone-sopra-2").attr({href:"pagina1.html"});
	
	
	$("#scritta-louis-hjelmslev rect,#testo-louis-hjelmslev,#scritta-prolegomena rect,#testo-prolegomena").hide();
	
	$("#scritta-louis-hjelmslev").hover(
		function(){
			$("#scritta-louis-hjelmslev rect,#testo-louis-hjelmslev").fadeIn("fast");
			$("#scritta-louis-hjelmslev").css("cursor", "default");
		},
		function(){
			$("#scritta-louis-hjelmslev rect,#testo-louis-hjelmslev").fadeOut("fast");
		}
	);
	
	$("#scritta-prolegomena").hover(
		function(){
			$("#scritta-prolegomena rect,#testo-prolegomena").fadeIn("fast");
			$("#scritta-prolegomena").css("cursor", "default");
		},
		function(){
			$("#scritta-prolegomena rect,#testo-prolegomena").fadeOut("fast");
		}
	);
	
	
	$("#testo-colori,#testo-feelings,#testo-tempo").css({transform:"translate(0px,150px)"});
	
	$("#testo-colori .st7.st15,#testo-feelings .st7.st15,#testo-tempo .st7.st15").hide();
	
	$("#colori").hover(
		function(){ 
			$("#testo-colori").css({transform:"translate(0px,0px)",transition:"0.3s"});
			$("#testo-colori .st7.st15").show(300);
			$("#colori").css("cursor", "default");
		},
		function(){ 
			$("#testo-colori").css({transform:"translate(0px,150px)",transition:"0.3s"});
			$("#testo-colori .st7.st15").hide();
		}
	);
	
	$("#feelings").hover(
		function(){ 
			$("#testo-feelings").css({transform:"translate(0px,0px)",transition:"0.3s"});
			$("#testo-feelings .st7.st15").show(300);
			$("#feelings").css("cursor", "default");
		},
		function(){ 
			$("#testo-feelings").css({transform:"translate(0px,150px)",transition:"0.3s"});
			$("#testo-feelings .st7.st15").hide();
		}
	);
	
	$("#tempo").hover(
		function(){ 
			$("#testo-tempo").css({transform:"translate(0px,0px)",transition:"0.3s"});
			$("#testo-tempo .st7.st15").show(300);
			$("#tempo").css("cursor", "default");
		},
		function(){ 
			$("#testo-tempo").css({transform:"translate(0px,150px)",transition:"0.3s"});
			$("#testo-tempo .st7.st15").hide();
		}
	);
	
	
	$("#discover-colori a").attr({href:"1-colori.html"});
	
	$("#discover-feelings a").attr({href:"2-sentimenti.html"});
	
	$("#discover-tempo a").attr({href:"3-tempo.html"});
	
	
	$("#test-colori a").attr({href:"test/1-colori-test0.html"});
	
	$("#test-feelings a").attr({href:"test/2-sentimenti-test0.html"});
	
	$("#test-tempo a").attr({href:"test/3-tempo-test0.html"});
	
});