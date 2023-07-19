const urlParams = new URLSearchParams(window.location.search);

window.onload = function () {
    if (!urlParams.has('id')) {
        nonValidExoPage();
    } else {
        const id = urlParams.get('id').toString();
        const exerciseFile = `exercises/${id}.json`;

        fetch(exerciseFile)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load exercise ${id}`);
                }
                return response.json();
            })
            .then(data => {
                const problem = data.problem.toString();
                const hint = data.hint;
                const solution = data.solution;
                document.getElementById('problem').innerHTML = problem;
                document.getElementById('hint').innerHTML = hint;
                document.getElementById('solution').innerHTML = solution;
                document.getElementById('exo_id').innerHTML = id;

                renderBordered('problem');
                renderBordered('hint');
                renderBordered('soluce');
            })
            .catch(error => {
                console.error(`Failed to load exercise ${id}: ${error}`);
                nonValidExoPage();
            });
    }
}

function nonValidExoPage() {
    document.getElementById('main-content').innerHTML = "<center><h2>404 Exercise not found</h2></center>";
}

function showHint() {
    document.getElementById('hint-div').classList.toggle('hidden')
}

function showSoluce() {
    document.getElementById('sol-div').classList.toggle('hidden')
}

function renderBordered(id) {
    const bordered = document.getElementById(id)
    const mathElement = document.createElement('div');
    mathElement.textContent = bordered.textContent;
    bordered.textContent = "";
    bordered.appendChild(mathElement);
    MathJax.typesetPromise([mathElement]); // Render the equation with MathJax
}