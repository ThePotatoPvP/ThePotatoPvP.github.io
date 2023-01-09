const wordsToColor = {
  "python": {
    "keywords": ['if', 'else', 'for', 'def', 'return', 'in'],
    "types" : ['list', 'int', 'str', 'None', 'bool'],
    "symbols": ['=', ':', '(', ')', '[', ']', '->'],
    "keywordsColor": '#adff2f',
    "functionNameColor" : '#ffc4d5',
    "typesColor" :'#ffc4d5'
  }
};


function colorKeywords(codeBlock) {
  // Get the language of the code block
  const language = codeBlock.getAttribute('class');
  // Get the keywords and color for the language
  const keywords = wordsToColor[language]['keywords'];
  const symbols = wordsToColor[language]['symbols']
  const color = wordsToColor[language]['keywordsColor'];
  const funcColor = wordsToColor[language]['functionNameColor']

  let code = codeBlock.innerHTML;

  const funcNameRegex = new RegExp(`(?:\\b|\\.)(?<funcName>[a-z]+([A-Z][a-z,0-9]*))*\\(.*\\)`, 'g');
  let match = funcNameRegex.exec(code);
  if (match !== null) {
    const funcNames = match.groups.funcName;
    funcNames.forEach(element => {
      const regex = new RegExp(element, 'g');
      code = code.replace(regex, `<span style="color:${funcColor}">${element}</span>`);
    });
  };

  symbols.forEach(symbol => {
    const regex = new RegExp(`\\${symbol}(?!<\\/span>|\\"|\\#)`, 'g');
    code = code.replace(regex, `<span style="color:${color}">${symbol}</span>`)
  });

  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b(?!<\/span>)`, 'g');
    code = code.replace(regex, `<span style="color:${color}">${keyword}</span>`);
  });

  codeBlock.innerHTML = code;
};


const codeBlocks = document.querySelectorAll('code');
codeBlocks.forEach(colorKeywords);

function gotoPotabot() {
  window.location.href = '../projects/potabot.html'
}

function gotoThisSite() {
  window.location.href = '../projects/thiswebsite.html'
}