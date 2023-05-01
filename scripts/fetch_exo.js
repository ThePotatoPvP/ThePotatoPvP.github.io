const urlParams = new URLSearchParams(window.location.search);

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
            const problem = data.problem;
            const hint = data.hint;
            const solution = data.solution;
            document.getElementById('problem').innerHTML = problem;
            document.getElementById('hint').innerHTML = hint;
            document.getElementById('solution').innerHTML = solution;
            document.getElementById('exo_id').innerHTML = id;
        })
        .catch(error => {
            console.error(`Failed to load exercise ${id}: ${error}`);
            nonValidExoPage();
        });
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