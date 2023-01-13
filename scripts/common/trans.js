/* on store les traductions sous la forme (fr, en)*/

const trans = {
    'index': {
        'text1': {
            'fr': 'Bienvenue sur le site de moi',
            'en': 'Welcome to the website of me'
        },
        'text2': {
            'fr': 'PROJETS',
            'en': 'PROJECTS'
        },
        'text3': {
            'fr': 'JEUX',
            'en': 'GAMES'
        }
    },
    'projects': {
        'text0': {
            'fr': 'Projets',
            'en': 'Projects'
        },
        'text1': {
            'fr': "Cette page a pour objectif de présenter mes différents projets qui pour le moments sont surtout en matière de programmation mais je ne compte pas m'arrêter là. J'ai pour objectif de mettre ici en avant mes avancées et réussites dans tous les domaines qui sucsciteront mon intérêt. Vous trouverez ci dessous un liste non exhaustive, mais contenant le principal des projets qui me tiennent à coeur. L'ordre de la liste n'a pour l'instant pas de réelle justification.",
            'en': "Here's my showroom, a place at which I will display my different projects. For now it's mostly computer science but I plan on changing that to include every theme that might tickle my interest. I will display here my progress and results on whatever I do. Here's an uncomplete list of some examples. This list is meant to evolve whether it's because I make some progress on something or find a new projects I want to work on. The projects displayed below are in no particular order."
        },
        'text2': {
            'fr': "Potabot est un bot discord créé avec l'objectif de remplacer les autres bots sur un serveur, il est aujourd'hui parvenu à ce but et reçoit encore des mises à jour afin de se perfectionner et de permettre une meilleure expérience sur le serveur.",
            'en': "Potabot is a discord bot created with the intent to replace every other bot on a server. It now is pretty much complete but keeps getting update to be optimised and sometimes gain new commands that can ease the user experience on the server."
        },
        'text3': {
            'fr': "Kaaaat est un bot discord créé pour faciliter le partage d'images et de vidéos venant de sources extérieures à discord. Aujourd'hui ce but est accompli et Kaaat reçoit de temps en temps des mises à jour d'optimisations ou pour rajouter des petites fonctionnalités.",
            'en': "Kaaaat is a discord bot created with the intent to ease the sharing of content from other medias. Replacing basic embed by a simple image or video that is simpler to read for the user. It still gets updates/fixes to be optimised or gain some useful commands."
        },
        'text4':{
            'fr': 'Ce site',
            'en': 'This website'
        },
        'text5': {
            'fr': "Ce site est une expérimentation de ma part créé à deux desseins. Le premier est simplement de combler mon envie d'avoir un site sur lequel je puisse présenter ce que je fais. Ce à quoi s'est ajoutée la possibilité de jouer en ligne à des jeux, quelque chose qui me tient à coeur. Ce site est aussi un expérience dans le sens où je me suis lancé dedans sans connaissances.",
            'en': "This website is an experiment. I started it whithout any knowledge of how to proceed, hoping to learn along the way. It also gets me a great mean of displaying my projects but also to play games online with my friends and turn unused school projects into something fun and playable."
        },
        'text6': {
            'fr': "Hexapawn est un jeu développé comme projet scolaire, codé avec un groupe d'amis. Le jeu est codé en python et se joue à 2 sur un pc. À terme ce jeu devrais faire partie de ceux disponibles sur ce site. Il restera dans cette liste comme ce que je considère être le premier 'gros' projet sur lequel j'ai travaillé.",
            'en': "Hexapawn is a school project made with two friends. It's a two players game developped in python, but only playable in local. I aim at making this game playable on this website. It will stay in this list anyhow because I still view it as the first 'big' project I ever worked on."
        }
    }

}

function setText(page, textId, language) {
    const textElement = document.getElementById(textId);
    const text = trans[page][textId][language];
    textElement.innerHTML = text;
}

let currentLanguage = 'fr';
function changeLanguage(page, newLanguage) {
    if (currentLanguage !== newLanguage) {
        currentLanguage = newLanguage;
        Object.keys(trans[page]).forEach(function (key) {
            setText(page, key, newLanguage);
        });
        localStorage.setItem('language', newLanguage);
    }
}

if (localStorage.getItem('language')) {
    const lang = localStorage.getItem('language');
    let path = window.location.pathname;
    var page = path.split("/").pop();
    changeLanguage(page, lang);
}
