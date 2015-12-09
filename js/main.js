var news = {
    'DE': [
        "Troja: Bevölkerung auf dem Holzweg", 
        "Sokrates: er weiß, dass er nichts weiß", 
        "Hokus Pokus Phidias: Zeusstatue in Olympia fertiggestellt"
     ],
    'LA': [
        "Tróia: cives in via lígnea", 
        "Sócrates: scit se nescire", 
        "Hocus pocus Phídias: simulacrum Iovis confectum in Olýmpia"
    ],
    'GR': [
        "Τροία: αἱ πολιταὶ ἐπὶ ὁδῷ ξυλινῷ", 
        "Σωκράτης: ἓν οἶδεν ὄτι οὐδὲν οἶδεν", 
        "Ὅκος πόκος Φειδίας: εἴδωλον τοῦ Διὸς διαπέπρακται ἐν τῇ Ὀλυμπίᾳ"
    ]
};

function getRandom(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function getNewsText(language) {
    return '+++ ' + getRandom(news[language]) + ' +++';
}

function setMarquee(language) {
    var marquee = document.getElementById("newsticker-marquee");
    marquee.firstChild.nodeValue = getNewsText(language);
    marquee.start();
}

function init(language) {
    setMarquee(language);
}