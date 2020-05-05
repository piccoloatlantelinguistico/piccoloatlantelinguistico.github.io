$(document).ready(function(){
	
	$("#back").attr({href:"pagina2.html"});	
	
	$("#more").attr({href:"3-more-tempo.html"});
	
	$("#yiddish_parole").hide();
	
	/* 01 */
	$("#afrikaans").hover(
		function() {
			$("#afrikaans_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#afrikaans_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 02 */
	$("#albanian").hover(
		function() {
			$("#albanian_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#albanian_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 03 */
	$("#arabic").hover(
		function() {
			$("#arabic_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#arabic_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 04 */
	$("#bengali").hover(
		function() {
			$("#bengali_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#bengali_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 05 */
	$("#bulgarian").hover(
		function() {
			$("#bulgarian_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#bulgarian_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 06 */
	$("#catalan").hover(
		function() {
			$("#catalan_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#catalan_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 07 */
	$("#chen-chen").hover(
		function() {
			$("#chen-chen_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#chen-chen_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 08 */
	$("#chinese").hover(
		function() {
			$("#chinese_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#chinese_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 09 */
	$("#dalmatian").hover(
		function() {
			$("#dalmatian_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#dalmatian_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 10 */
	$("#danish").hover(
		function() {
			$("#danish_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#danish_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 11 */
	$("#dutch").hover(
		function() {
			$("#dutch_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#dutch_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 12 */
	$("#ewe").hover(
		function() {
			$("#ewe_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#ewe_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 13 */
	$("#french").hover(
		function() {
			$("#french_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#french_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 14 */
	$("#german").hover(
		function() {
			$("#german_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#german_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 15 */
	$("#greek").hover(
		function() {
			$("#greek_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#greek_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 16 */
	$("#hawaiian").hover(
		function() {
			$("#hawaiian_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#hawaiian_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 17 */
	$("#hebrew").hover(
		function() {
			$("#hebrew_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#hebrew_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 18 */
	$("#indonesian").hover(
		function() {
			$("#indonesian_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#indonesian_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 19 */
	$("#italian").hover(
		function() {
			$("#italian_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#italian_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 20 */
	$("#japanese").hover(
		function() {
			$("#japanese_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#japanese_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 21 */
	$("#korean").hover(
		function() {
			$("#korean_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#korean_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 22 */
	$("#kurdish").hover(
		function() {
			$("#kurdish_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#kurdish_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 23 */
	$("#lezgi").hover(
		function() {
			$("#lezgi_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#lezgi_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 24 */
	$("#macedonian").hover(
		function() {
			$("#macedonian_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#macedonian_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 25 */
	$("#maltese").hover(
		function() {
			$("#maltese_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#maltese_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 26 */
	$("#navajo").hover(
		function() {
			$("#navajo_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#navajo_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 27 */
	$("#polish").hover(
		function() {
			$("#polish_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#polish_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 28 */
	$("#russian").hover(
		function() {
			$("#russian_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#russian_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 29 */
	$("#serbo-croatian").hover(
		function() {
			$("#serbo-croatian_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#serbo-croatian_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 30 */
	$("#slovak").hover(
		function() {
			$("#slovak_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#slovak_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 31 */
	$("#slovene").hover(
		function() {
			$("#slovene_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#slovene_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 32 */
	$("#spanish").hover(
		function() {
			$("#spanish_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#spanish_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 33 */
	$("#swedish").hover(
		function() {
			$("#swedish_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#swedish_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 34 */
	$("#tok-pisin").hover(
		function() {
			$("#tok-pisin_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#tok-pisin_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 35 */
	$("#turkish").hover(
		function() {
			$("#turkish_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#turkish_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 36 */
	$("#ukranian").hover(
		function() {
			$("#ukranian_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#ukranian_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 37 */
	$("#urdu").hover(
		function() {
			$("#urdu_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#urdu_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 38 */
	$("#voro").hover(
		function() {
			$("#voro_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"visible",transform:"none",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
			$("#yiddish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
		},
		function(){ 
			$("#voro_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
	/* 39 */
	$("#yiddish").hover(
		function() {
			$("#yiddish_parole").show();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#albanian line,#albanian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#arabic line,#arabic path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bengali line,#bengali path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#bulgarian line,#bulgarian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#catalan line,#catalan path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chen-chen line,#chen-chen path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#chinese line,#chinese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dalmatian line,#dalmatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#danish line,#danish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#dutch line,#dutch path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ewe line,#ewe path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#french line,#french path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#german line,#german path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#greek line,#greek path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hawaiian line,#hawaiian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#hebrew line,#hebrew path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#indonesian line,#indonesian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#italian line,#italian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#japanese line,#japanese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#korean line,#korean path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#kurdish line,#kurdish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#lezgi line,#lezgi path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#macedonian line,#macedonian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#maltese line,#maltese path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#navajo line,#navajo path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#polish line,#polish path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#russian line,#russian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#serbo-croatian line,#serbo-croatian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovak line,#slovak path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#slovene line,#slovene path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#spanish line,#spanish path,#spanish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#swedish line,#swedish path,#swedish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#turkish line,#turkish path,#turkish circle").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#ukranian line,#ukranian path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#urdu line,#urdu path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#voro line,#voro path").css({visibility:"hidden",transform:"translate(0px,730px)",transition:"1s"});
			$("#yiddish line,#yiddish path").css({visibility:"visible",transform:"none",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#albanian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#arabic_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bengali_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#bulgarian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#catalan_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chenchen_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#chinese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dalmatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#danish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#dutch_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ewe_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#french_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#german_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#greek_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hawaiian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#hebrew_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#indonesian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#italian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#japanese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#korean_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#kurdish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#lezgi_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#macedonian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#maltese_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#navajo_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#polish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#russian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#serbo-croatian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovak_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#slovene_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#spanish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#swedish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#tok-pisin_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#turkish_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#ukranian_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#urdu_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#voro_titolo").css({opacity:"20%","-webkit-opacity":"0.2"});
			$("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		},
		function(){ 
			$("#yiddish_parole").hide();
			
			$("#afrikaans line,#afrikaans path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#albanian line,#albanian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#arabic line,#arabic path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bengali line,#bengali path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#bulgarian line,#bulgarian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#catalan line,#catalan path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chen-chen line,#chen-chen path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#chinese line,#chinese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dalmatian line,#dalmatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#danish line,#danish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#dutch line,#dutch path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ewe line,#ewe path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#french line,#french path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#german line,#german path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#greek line,#greek path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hawaiian line,#hawaiian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#hebrew line,#hebrew path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#indonesian line,#indonesian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#italian line,#italian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#japanese line,#japanese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#korean line,#korean path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#kurdish line,#kurdish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#lezgi line,#lezgi path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#macedonian line,#macedonian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#maltese line,#maltese path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#navajo line,#navajo path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#polish line,#polish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#russian line,#russian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#serbo-croatian line,#serbo-croatian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovak line,#slovak path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#slovene line,#slovene path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#spanish line,#spanish path,#spanish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#swedish line,#swedish path,#swedish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#tok-pisin line,#tok-pisin path,#tok-pisin circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#turkish line,#turkish path,#turkish circle").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#ukranian line,#ukranian path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#urdu line,#urdu path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#voro line,#voro path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});  $("#yiddish line,#yiddish path").css({visibility:"visible",transform:"translate(0px,0)",transition:"1s"});
			
			$("#afrikaans_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#albanian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#arabic_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bengali_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#bulgarian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#catalan_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chenchen_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#chinese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dalmatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#danish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#dutch_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ewe_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#french_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#german_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#greek_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hawaiian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#hebrew_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#indonesian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#italian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#japanese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#korean_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#kurdish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#lezgi_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#macedonian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#maltese_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#navajo_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#polish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#russian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#serbo-croatian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovak_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#slovene_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#spanish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#swedish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#tok-pisin_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#turkish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#ukranian_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#urdu_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#voro_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});  $("#yiddish_titolo").css({opacity:"100%","-webkit-opacity":"1.0"});
		}
	);
	
});