fetch('Trivia.json')
  .then(response => response.json())
  .then(questions => {
    let currentQuestion = 0;
    let score = 0;
    
    const quizContainer = document.getElementById('trivia');
    const resultsContainer = document.getElementById('results');
    
    function showQuestion() {
      const question = questions[currentQuestion];
      
      // Afficher la question et les réponses possibles
      quizContainer.innerHTML = `
        <h2>${question.question}</h2>
        ${question.answers.map(answer => `
          <button class="answer">${answer}</button>
        `).join('')}
      `;
      
      // Attacher un événement click à chaque réponse
      quizContainer.querySelectorAll('.answer').forEach((button, index) => {
        button.addEventListener('click', () => {
          // Vérifier si la réponse est correcte
          if (index === question.correct) {
            score++;
            alert('Bonne réponse !');
          } else {
            alert('Mauvaise réponse.');
          }
          
          // Passer à la question suivante ou afficher les résultats
          if (currentQuestion === questions.length - 1) {
            showResults();
          } else {
            currentQuestion++;
            showQuestion();
          }
        });
      });
    }
    
    function showResults() {
      // Afficher le score final
      resultsContainer.innerHTML = `Votre score : ${score}/${questions.length}`;
    }
    
    showQuestion();
});