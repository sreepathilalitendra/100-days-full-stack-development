// Day 79 - JavaScript Quiz App

const quizData = [

    {
        question: "What does HTML stand for?",

        options: [

            "Hyper Text Markup Language",

            "High Text Machine Language",

            "Home Tool Markup Language",

            "Hyper Transfer Markup Language"

        ],

        answer: 0
    },

    {
        question: "Which language is used for styling web pages?",

        options: [

            "HTML",

            "Python",

            "CSS",

            "Java"

        ],

        answer: 2
    },

    {
        question: "Which keyword declares a constant in JavaScript?",

        options: [

            "var",

            "let",

            "const",

            "define"

        ],

        answer: 2
    }

];

let currentQuestion = 0;

let score = 0;

const question = document.getElementById("question");

const options = document.getElementById("options");

const nextBtn = document.getElementById("nextBtn");

const result = document.getElementById("result");

function loadQuestion() {

    const q = quizData[currentQuestion];

    question.textContent = q.question;

    options.innerHTML = "";

    q.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.textContent = option;

        button.className = "option";

        button.onclick = function () {

            if (index === q.answer) {

                score++;

            }

            nextBtn.disabled = false;

            document.querySelectorAll(".option").forEach(btn => {

                btn.disabled = true;

            });

        };

        options.appendChild(button);

    });

}

nextBtn.addEventListener("click", () => {

    currentQuestion++;

    nextBtn.disabled = true;

    if (currentQuestion < quizData.length) {

        loadQuestion();

    } else {

        question.textContent = "";

        options.innerHTML = "";

        result.textContent = `Quiz Completed! Your Score: ${score}/${quizData.length}`;

        nextBtn.style.display = "none";

    }

});

nextBtn.disabled = true;

loadQuestion();

console.log("Day 79 Completed Successfully!");