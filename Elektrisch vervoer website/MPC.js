var Questions = 
{
	Q1: 
		{id: "Q1",
		question: "Wat heeft de grootste kinetische energie?",
		answers: [
			"Een kogel van 25 gram die met 180 km/h door de lucht vliegt;",
			"Een voetbal van 250 gram die met 36 km/h in de lucht wordt geschoten;",
			"Een bowlingbal van 1 kilo die met 18 km/h over een baan rolt."],
		correctanswer: 0,
		feedback: "Voor de kogel geldt: <em>E<sub>k</sub></em> = (1/2) &middot; (25/1000) &middot; (180/3,6)<sup>2</sup> = 31,25 J. <br>De andere twee <em>E<sub>k</sub></em>'s zijn 12,5 J. Doordat <em>E<sub>k</sub></em> kwadratisch evenredig is met de snelheid, weegt de hoge snelheid van de kogel het zwaarste mee."}, 
	Q2: 
		{id: "Q2",
		question: "Er zijn verschillende processes nodig om een auto met een verbrandingsmotor in beweging te krijgen. Wat is de goede volgorde?",
		answers: [
		"Drukverschil > Benzine verbranden > Lucht opwarmen > Uitzettende lucht > Bewegende zuigers > Draaiende aandrijfas > Draaiende wielen > Bewegende auto",
		"Benzine verbranden > Uitzettende lucht > Lucht opwarmen > Bewegende zuigers > Drukverschil > Draaiende aandrijfas > Draaiende wielen > Bewegende auto",
		"Bewegende zuigers > Benzine verbranden > Lucht opwarmen > Uitzettende lucht > Drukverschil > Draaiende aandrijfas > Draaiende wielen > Bewegende auto",
		"Benzine verbranden > Lucht opwarmen > Uitzettende lucht > Drukverschil > Bewegende zuigers > Draaiende aandrijfas > Draaiende wielen > Bewegende auto",
		"Draaiende aandrijfas > Bewegende zuigers > Benzine verbranden > Lucht opwarmen > Uitzettende lucht > Drukverschil > Draaiende wielen > Bewegende auto",],
		correctanswer: 3,
		feedback: ""},
	Q3: 
		{id: "Q3",
		question: "Hoeveel keer meer kinetische energie heeft een Hummer (3000 kg) dan een Smart (800 kg) als ze 30 km/h rijden?",
		answers: ["Ongeveer 2","Ongeveer 3","Ongeveer 4","Ongeveer 8"],
		correctanswer: 2,
		feedback: "Aangezien <em>E<sub>k</sub></em> recht evenredig is met de massa en de snelheid voor beide auto's gelijk is, is de verhouding van de <em>E<sub>k</sub></em>'s gelijk aan de verhouding van de massa's: 3000 / 800 &#8776; 4."},
	Q4: 
		{id: "Q4",
		question: "Hoeveel keer meer energie kost het om op te trekken tot 30 km/h dan om op te trekken tot 10 km/h?",
		answers: [
		"3 keer",
		"4 keer",
		"6 keer",
		"9 keer",],
		correctanswer: 3,
		feedback: "Aangezien <em>E<sub>k</sub></em> kwadratisch evenredig is met de snelheid, moet worden gekeken naar de verhouding van de snelheden in het kwadraat: 30<sup>2</sup> / 10<sup>2</sup> = 9."},
	Q5: 
		{id: "Q5",
		question: "Hoeveel energie gaat er verloren als een auto van 1500 kg afremt van 20 km/h naar stilstand?",
		answers: [
		"23 kJ",
		"64 kJ",
		"172 kJ",
		"255 kJ",
		"391 kJ"],
		correctanswer: 0,
		feedback: "De vergelijking voor het energieverschil levert het volgende op: <br> <em>&Delta;E<sub>k</sub></em> = (1/2) &middot; 1500 &middot; ((0/3,6)<sup>2</sup> - (20/3,6)<sup>2</sup>) = -23 kJ."},
	Q6: 
		{id: "Q6",
		question: "Hoeveel energie gaat er verloren als een auto van 1500 kg afremt van 120 km/h naar 100 km/h?",
		answers: [
		"23 kJ",
		"64 kJ",
		"172 kJ",
		"255 kJ",
		"391 kJ"],
		correctanswer: 3,
		feedback: "De vergelijking voor het energieverschil levert het volgende op: <br> <em>&Delta;E<sub>k</sub></em> = (1/2) &middot; 1500 &middot; ((100/3,6)<sup>2</sup> - (120/3,6)<sup>2</sup>) = -255 kJ."},
	Q7: 
		{id: "Q7",
		question: "Wat is het vermogen dat verloren gaat aan rolwrijving voor een auto van 1500 kg die 50 km/h rijdt? Je kunt bovenstaande figuur of de vergelijking voor <em>P<sub>w,r</sub>(t)</em> gebruiken.",
		answers: [
		"0,22 kW",
		"0,78 kW",
		"2,2 kW",
		"7,8 kW",
		"780 kW"],
		correctanswer: 2,
		feedback: "De vergelijking voor de rolwrijving levert het volgende op: <br> <em>P<sub>w,r</sub></em> = 1500 &middot; 9,81 &middot; 0,01 &middot; (50/3,6) = 2,2 kW."},	
	Q8: 
		{id: "Q8",
		question: "Stel dat een auto een frontaal oppervlak van 2,7 m<sup>2</sup> heeft, een luchtwrijvingscoëfficiënt van 0,01 heeft en 50 km/h rijdt. Wat is dan het vermogen dat verloren gaat door luchtwrijving? Gebruik bovenstaande figuur of de de vergelijking voor <em>P<sub>w,l</sub>(t)</em>.",
		answers: [
		"0,025 kW",
		"1,3 kW",
		"4,3 kW",
		"62 kW"],
		correctanswer: 1,
		feedback: "De vergelijking voor de luchtwrijving levert het volgende op: <br> <em>P<sub>w,r</sub></em> = (1/2) &middot; 1,225 &middot; 2,7 &middot; 0,3 &middot; (50/3,6)<sup>3</sup> = 1,3 kW."},	
	Q9: 
		{id: "Q9",
		question: "Stel dat de snelheidsvariatie in het parcours 'Amsterdam <> Utrecht' groter wordt, op welke vorm van energieverlies heeft dat dan GEEN effect?",
		answers: [
		"Optrekvermogen",
		"Luchtwrijving",
		"Rolwrijving",
		"Verliezen in de motor"],
		correctanswer: 2,
		feedback: "Een grotere snelheidsvariatie betekent sowieso meer remverliezen. Daarnaast wordt de gemiddelde v<sup>2</sup> groter, wat zorgt voor meer luchtwrijvingsverliezen. Grotere verliezen in het remmen en de luchtwrijving betekent automatisch ook grotere verliezen in de motor. Het energieverlies door rolwrijving is alleen afhankelijk van de afgelegde weg en wordt dus niet beïnvloed door de variatie in snelheid."}	,	
	Q10: 
		{id: "Q10",
		question: "Met hoeveel procent stijgt het brandstofverbruik van de VW Passat die het NEDC parcours rijdt als hij 300 kg zwaarder wordt? Dit komt ongeveer overeen met instappen van 4 passagiers.",
		answers: [
		"Ongeveer 13%",
		"Ongeveer 21%",
		"Ongeveer 31%",
		"Ongeveer 43%"],
		correctanswer: 0,
		feedback: "Oorspronkelijk gebruikt de Passat in het NEDC parcours 17,8 MJ. Als de massa met 300 kg wordt vergroot, is energieverbruik zo'n 20,2 MJ. Dit is een toename van ongeveer 13%."}	,	
	Q11: 
		{id: "Q11",
		question: "Welke auto is het zuinigst in het parcour Amsterdam <> Utrecht?",
		answers: [
		"Toyota Yaris",
		"VW Passat",
		"Tesla Roadster",
		"Elektrische Smart"],
		correctanswer: 2,
		feedback: "De auto's kunnen respectievelijk 3; 2,6; 10,2 en 7,5 km rijden op 1 kWh. De Tesla Roadster is op dit parcours dus het zuinigst."}	,	
	Q12: 
		{id: "Q12",
		question: "Hoeveel gewicht aan accu's moet de Elektrische Smart ongeveer meenemen om op het NEDC parcour even ver te kunnen rijden als de Toyota Yaris?",
		answers: [
		"< 100 kg",
		"200 kg",
		"400 kg",
		"> 600 kg"],
		correctanswer: 3,
		feedback: "De Yaris heeft een bereik van 1041 km. Oorspronkelijk heeft de Elektrische Smart een bereik van ongeveer 140 km bij 100 kg aan accu's. Als de smart 600 kg aan accu's zou meenemen, zou het bereik 'slechts' 686 km zijn. Om een bereik te krijgen van 1041 km, moet er dus (veel) meer dan 600 kg aan accu's mee worden genomen."}	,	
	Q13: 
		{id: "Q13",
		question: "Welke auto is op het parcours Amsterdam <> Utrecht percentueel het meeste energie kwijt aan luchtwrijving?",
		answers: [
		"MircroJoule car",
		"NUNA",
		"Tesla Roadster",
		"Elektrische Smart"],
		correctanswer: 1,
		feedback: "De MicroJoule gebruikt het minste energie, maar verliest relatief veel energie in de motor. Doordat de NUNA een hele efficiënte motor heeft en een extreem lage rolwrijving, gaat percentueel het meeste energie verloren door de luchtwrijving."}	,	
	Q14: 
		{id: "Q14",
		question: "Vanaf welke snelheid wordt het vermogen van luchtwrijving voor de Tesla Roadster groter dan de rolwrijving? (hint: gebruik voor de NEDC de Parcours- en de Aandrijvings-grafiek)",
		answers: [
		"25 km/h",
		"50 km/h",
		"75 km/h",
		"100 km/h"],
		correctanswer: 3,
		feedback: "Doordat de Tesla Roadster een  klein frontaal oppervlak heeft en relatief goed gestroomlijnd is, moet de Roadster hard rijden voordat de luchtwrijving even groot is als de rolwrijving."}	,
	Q15: 
		{id: "Q15",
		question: "De gemiddelde personenauto in Nederland rijdt nu zo'n 10 km op 1 liter benzine. Stel dat iedereen zijn of haar auto inruilt voor een Toyota Yaris, met hoeveel procent neemt de energievraag van personenauto's dan af? Ga uit van het NEDC parcours.",
		answers: [
		"26%",
		"29%",
		"44%",
		"61%"],
		correctanswer: 3,
		feedback: "De Yaris rijdt 25,9 kilometer op 1 liter benzine. In vergelijking met de 10 kilometer per liter die nu gemiddeld wordt gereden is dit een besparing van (1-10/25,9) &middot; 100% = 61%."}	,	
	Q16: 
		{id: "Q16",
		question: "Stel dat iedereen zijn of haar auto inruilt voor een Tesla Roadster, met hoeveel procent neemt de energievraag van personenauto's dan af? Ga uit van het NEDC parcours.",
		answers: [
		"80%",
		"90%",
		"95%",
		"99%"],
		correctanswer: 1,
		feedback: "De Tesla Roadster rijdt omgerekend 97,8 kilometer op 1 liter benzine. In vergelijking met de 10 kilometer per liter die nu gemiddeld wordt gereden is dit een besparing van (1-10/97,8) &middot; 100% = 90%."}										
} 



var SimpleMPC = function(Qdata){
	var id = "#"+Qdata.id;
	var answers = Qdata.id+"answers";
	var answersID = "#"+answers;
	var feedback = Qdata.id+"feedback";
	var feedbackID = "#"+feedback;
	$(id).append("<p style='font-style:italic;margin:0'> <b>"+Qdata.id+".</b> "+Qdata.question+"</p>");
	$(id).append("<ul id="+answers+"></ul>");
	for (var i = 0; i < Qdata.answers.length; i++) {
		$(answersID).append("<li class=answer id="+Qdata.id+">"+Qdata.answers[i]+"</li>");
	};
	$(id).append("<p id="+Qdata.id+"feedback"+" style='font-style:italic; color:silver; margin:0'>Kies een antwoord...</p>")
	$(".answer").click(function(){
		var Qid = $(this).attr('id');
		var index = $(this).index();
		if(index === Questions[Qid].correctanswer){
			$("#"+Qid+"feedback").html("Heel goed! "+Questions[Qid].feedback);
			$(this).css('color','green');
		}
		else{
			$("#"+Qid+"feedback").html("Helaas! Kies een ander antwoord...");
			$(this).css('color','red');
		}		
	})
}


$(document).ready(function(){

for (i in Questions){
	SimpleMPC(Questions[i])
};

})
