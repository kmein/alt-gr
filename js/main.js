var news = {
    'DE': [
        "Troja: Bevölkerung auf dem Holzweg", 
        "Sokrates: er weiß, dass er nichts weiß", 
        "Hokus Pokus Phidias: Zeusstatue in Olympia fertiggestellt",
        "Platon: 'Atlantis 480 BC' läuft in den Kinos an",
        "Sokrates: zum Tode verurteilt",
        "Lesbos: Daphnis und Chloe in Busch entdeckt"
     ],
    'LA': [
        "Tróia: cives in via lígnea", 
        "Sócrates: scit se nescire", 
        "Hocus pocus Phídias: simulacrum Iovis confectum in Olýmpia",
        "Plato: 'Atlantia 480 a. Chr. n.' incípitur in theatris",
        "Sócrates: capitis est damnatus",
        "Lesbus: Daphis et Chloe visi sunt in dumeto"
    ],
    'GR': [
        "Τροία: αἱ πολιταὶ ἐφ' ὁδῷ ξυλινῷ", 
        "Σωκράτης: ἓν οἶδεν ὄτι οὐδὲν οἶδεν", 
        "Ὅκος πόκος Φειδίας: εἴδωλον τοῦ Διὸς διαπέπρακται ἐν τῇ Ὀλυμπίᾳ",
        "Πλάτων: 'Ἀτλαντίς 480 π. Χρ.' ἄρχεται ἐν τοῖς θεάτροις",
        "Σωκράτης: κατεγνοῦται θανάτου",
        "Λεσβός: ὁ Δάφνις καὶ ἡ Χλοὴ εἴδοντο ἐν ἕρκῳ"
    ]
};

function getRandom(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

getNewsText = function(language) { return '+++ ' + getRandom(news[language]) + ' +++' }

function setMarquee(language) {
	var marquee = document.getElementsByClassName("marquee")[0];
	var $mq = $('.marquee');
	$mq
		.marquee('destroy')
		.bind('finished', function(){setMarquee(language)})
		.html(getNewsText(language))
		.marquee({duration: 7500, gap: 250, delayBeforeStart: 0, pauseOnHover: true});
}

init = setMarquee;