var audioPizzicato = document.getElementById("ChillbeatAudio");
var audioBuzzer = document.getElementById("JazzAudio");
audioBuzzer.volume = 0.5;
var body = document.getElementById("Body");
function playAudio(){
    audioPizzicato.loop = true
    audioPizzicato.play();
}

document.documentElement.onclick = playAudio;
document.onkeydown = playAudio;
document.ontouchstart = playAudio;
document.ontouchmove = playAudio;
window.addEventListener('scroll', function() {
    playAudio();
});

function showResults() {
    const quizForm = document.getElementById('quizForm');

    // Correct answers
    const correctAnswers = {
        q1: "Option 1", 
        q2: "Option 2", 
        q3: "Option 5", 
        q4: "Option 1", 
        q5: "Option 2", 
        q6: "Option 4", 
        q7: "Option 1", 
        q8: "Option 4", 
        q9: "Option 1", 
        q10: "SIISIII" 
    };

    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;

    for (const [question, correctAnswer] of Object.entries(correctAnswers)) {
        const userAnswer = quizForm.elements[question].value;
        if (userAnswer === correctAnswer) {
            score++;
        }
        if (question === 'q10' &&  userAnswer != ''){
            score++;
        }
    }

    // Show the results
    const resultDiv = document.getElementById('result');
    const resultText = document.getElementById('resultText');
    resultDiv.style.display = 'block';

    if (score === totalQuestions) {
        resultText.innerText = `FELICIDADES! TODAS ESTAS BUENAS AMORCITO!`;
        window.location.href = 'main.html';
    } else {
        audioBuzzer.play()
        resultText.innerText = `*Sonido de error* MALLLL NOOOOOO!`;
    }
}