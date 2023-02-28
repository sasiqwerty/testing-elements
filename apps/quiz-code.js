(function () {
	function buildQuiz() {
		// variable to store the HTML output
		const output = [];

		// for each question...
		myQuestions.forEach((currentQuestion, questionNumber) => {
			// variable to store the list of possible answers
			const answers = [];

			// and for each available answer...
			for (letter in currentQuestion.answers) {
				// ...add an HTML radio button
				answers.push(
					`<label>
				<input type="radio" name="question${questionNumber}" value="${letter}">
				${letter} :
				${currentQuestion.answers[letter]}
			  </label>`
				);
			}

			// add this question and its answers to the output
			output.push(
				`<div class="question"> ${currentQuestion.question} </div>
			<div class="answers"> ${answers.join("")} </div>`
			);
		});

		// finally combine our output list into one string of HTML and put it on the page
		quizContainer.innerHTML = output.join("");
	}

	function showResults() {
		// gather answer containers from our quiz
		const answerContainers = quizContainer.querySelectorAll(".answers");

		// keep track of user's answers
		let numCorrect = 0;

		// for each question...
		myQuestions.forEach((currentQuestion, questionNumber) => {
			// find selected answer
			const answerContainer = answerContainers[questionNumber];
			const selector = `input[name=question${questionNumber}]:checked`;
			const userAnswer = (answerContainer.querySelector(selector) || {}).value;

			// if answer is correct
			if (userAnswer === currentQuestion.correctAnswer) {
				// add to the number of correct answers
				numCorrect++;

				// color the answers green
				answerContainers[questionNumber].style.color = "green";
			}
			// if answer is wrong or blank
			else {
				// color the answers red
				answerContainers[questionNumber].style.color = "red";
			}
		});

		// show number of correct answers out of total
		resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
	}

	const quizContainer = document.getElementById("quiz");
	const resultsContainer = document.getElementById("results");
	const submitButton = document.getElementById("submit");
	const myQuestions = [
		{
			question: "Who invented JavaScript?",
			answers: {
				a: "Douglas Crockford",
				b: "Sheryl Sandberg",
				c: "Brendan Eich",
			},
			correctAnswer: "c",
		},
		{
			question: "What is the full form of HTML?",
			answers: {
				a: "HyperText Markup Language",
				b: "HyperText Mark Language",
				c: "HyperTrained Marked up Language",
			},
			correctAnswer: "a",
		},
		{
			question: "What is the full form of CSS?",
			answers: {
				a: "Casting Style Sheets",
				b: "Carriage Style Sheets",
				c: "Caster Style Sheets",
				d: "Cascading Style Sheets",
			},
			correctAnswer: "d",
		},
		{
			question: "What is the web mostly written in?",
			answers: {
				a: "HTML",
				b: "CSS",
				c: "JavaScript",
				d: "All the above",
			},
			correctAnswer: "d",
		},
	];

	// Kick things off
	buildQuiz();

	// Event listeners
	submitButton.addEventListener("click", showResults);
})();
