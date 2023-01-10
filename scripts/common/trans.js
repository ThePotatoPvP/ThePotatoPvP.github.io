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
            'fr': "Cette page a pour objectif de présenter mes différents projets qui pour le moments \
            sont surtout en matière de programmation mais je ne compte pas m'arrêter là. J'ai pour \
            objectif de mettre ici en avant mes avancées et réussites dans tous les domaines qui \
            sucsciteront mon intérêt. Vous trouverez ci dessous un liste non exhaustive, mais contenant le \
            principal des projets qui me tiennent à coeur. L'ordre de la liste n'a pour l'instant pas de réelle justification.",
            'en': "Here's my showroom, a place at which I will display my different projects. For now it's mostly \
            computer science but I plan on changing that to include every theme that might tickle my interest. \
            I will display here my progress and results on whatever I do. Here's an uncomplete list of some examples. This list is \
            meant to evolve whether it's because I make some progress on something or find a new projects I want to work on. \
            The projects displayed below are in no particular order."
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
    }
}
