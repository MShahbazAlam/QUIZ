const questions = [
    {
        options: [
            "Gabriel Botelleto",
            "Kimi Antonelli",
            "George Russell",
            "Fernando Alonso",
            "Carlos Sainz",
            "Max Verstappen",
            "Lewis Hamilton",
            "Nico Hulkenberg",
            "Isaac Hadgar"
        ],
        correctAnswers: [
            "Kimi Antonelli",
            "George Russell",
            "Carlos Sainz",
            "Max Verstappen",
            "Nico Hulkenberg",
            "Isaac Hadgar"
        ]
    },

    {
        options: [
            "India",
            "Australia",
            "Brazil",
            "Germany",
            "Japan",
            "France",
            "Italy",
            "Canada",
            "Spain"
        ],
        correctAnswers: [
            "Australia",
            "Brazil",
            "Germany",
            "Japan",
            "France",
            "Italy"
        ]
    }
];

let currentQuestion = 0;

function loadQuestion() {
    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = "";

    questions[currentQuestion].options.forEach(option => {
        const div = document.createElement("div");
        div.className = "option";
        div.innerText = option;

        div.onclick = () => checkAnswer(div, option);
        quizDiv.appendChild(div);
    });
}

function checkAnswer(element, selected) {
    const correct = questions[currentQuestion].correctAnswers;

    if (correct.includes(selected)) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }

    element.onclick = null; // double click disable
}

function loadNextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        alert("Quiz Completed 🎉");
    }
}

loadQuestion();
