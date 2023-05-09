function toHomePage() {
    window.location.href = './'
}

function toRandomExercise() {
  fetch('exercises/tags.json')
  .then(response => response.json())
  .then(data => {
    const exercisesLength = data.length;
    const exerciseId = Math.floor(Math.random() * exercisesLength) + 1;
      window.location.href = './exo.html?id=' + exerciseId;
  });
}

function processQuery() {
  const id = document.getElementById('sbar').value
  window.location.href = './exo.html?id='+id
}