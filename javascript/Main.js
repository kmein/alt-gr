var News = {
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
        "Ὅκος πόκος Φειδίας: εἴδολον τοῦ Διὸς εἴργασται ἐν τῇ Ὀλυμπίᾳ"
    ]
};

function GetRandom(array) {
    var random_index = Math.floor(Math.random() * array.length);
    return array[random_index];
}

function GetNewsText(language) {
    return '+++ ' + GetRandom(News[language]) + ' +++';
}

function SetMarquee(language) {
    var marquee = document.getElementsByTagName("marquee")[0]
    marquee.firstChild.nodeValue = GetNewsText(language);
    marquee.start();
}

function Init(language) {
    SetMarquee(language);
}