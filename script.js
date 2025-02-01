document.addEventListener("DOMContentLoaded", () => { // loading the DOM to be ready
    const quizData = [ // array of questions
        {
            question: "What does CSS stand for in Web Development?",
            a: "Central Style Sheets",
            b: "Cascading Style Sheets",
            c: "Creating Some Stuff",
            d: "Creative Style Sheets",
            correct: "b",
        },
        {
            question: "When was JavaScript launched?",
            a: "1996",
            b: "1993",
            c: "1994",
            d: "1995",
            correct: "d",
        },
        {
            question: "What is the capital of the USA?",
            a: "Detroit",
            b: "Ottawa",
            c: "Washington DC",
            d: "New York",
            correct: "c",
        },
        {
            question: "What is 1^1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000?",
            a: "1",
            b: "1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            c: "5",
            d: "I do not know",
            correct: "a",
        },
        {
            question: "Where is the USA?",
            a: "Asia",
            b: "Australia",
            c: "North America",
            d: "Mars",
            correct: "c",
        },
    ];

    // selecting the elements from HTML
    const quiz = document.getElementById('quiz');
    const answerEls = document.querySelectorAll('.answer');
    const questionEl = document.getElementById('question');
    const a_text = document.getElementById('a_text');
    const b_text = document.getElementById('b_text');
    const c_text = document.getElementById('c_text');
    const d_text = document.getElementById('d_text');
    const submitBtn = document.getElementById('submit');

    // Ensure all elements exist before running the script
    if (!quiz || !questionEl || !a_text || !b_text || !c_text || !d_text || !submitBtn) {
        console.error("One or more elements were not found in the DOM.");
        return;
    }

    let currentQuiz = 0;
    let score = 0;

    loadQuiz();

    function loadQuiz() {
        deselectAnswers(); // unchecks the previous answers

        const currentQuizData = quizData[currentQuiz]; // gets the current question

        questionEl.innerText = currentQuizData.question;
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;
    }

    function deselectAnswers() { // unchecking answer
        answerEls.forEach(answerEl => (answerEl.checked = false));
    }

    function getSelected() { // selecting the actual answer
        let answer;
        answerEls.forEach(answerEl => {
            if (answerEl.checked) {
                answer = answerEl.id; // stores the select option
            }
        });
        return answer;
    }

    submitBtn.addEventListener('click', () => {
        const answer = getSelected();

        if (answer) {
            if (answer === quizData[currentQuiz].correct) {
                score++; // adding +1 to score
            }

            currentQuiz++; // moving to another question

            if (currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                quiz.innerHTML = `
                    <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                    <button onclick="location.reload()">Reload</button>
                `;
            }
        }
    });
});
