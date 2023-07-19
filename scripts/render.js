// This function is to help render equations on exercise page

function renderBordered(id) {
    const bord = document.getElementById(id)
    const mathElement = document.createElement('div');
    mathElement.textContent = bord.textContent;
    bord.textContent = "";
    bord.appendChild(mathElement);
    MathJax.typesetPromise([mathElement]); // Render the equation with MathJax
}

renderBordered('problem')