//declarations for the questions and answers
const question1 = document.getElementById("question1");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");

// event listeners for options
// option1.addEventListener("click", touchElement);
// option2.addEventListener("click", touchElement);
// option3.addEventListener("click", touchElement);
// option4.addEventListener("click", touchElement);
// event listener for the question
question1.addEventListener("click", touchElement);
//Questions
const Questions = [
	{
		id: 0,
		q: "What is capital of India?",
		a: [
			{ text: "gandhinagar", isCorrect: false },
			{ text: "Surat", isCorrect: false },
			{ text: "Delhi", isCorrect: true },
			{ text: "mumbai", isCorrect: false },
		],
	},
	{
		id: 1,
		q: "What is the capital of Thailand?",
		a: [
			{ text: "Lampang", isCorrect: false },
			{ text: "phuket", isCorrect: false },
			{ text: "Ayutthaya", isCorrect: false },
			{ text: "Bangkok", isCorrect: true },
		],
	},
	{
		id: 2,
		q: "What is the capital of Gujarat",
		a: [
			{ text: "surat", isCorrect: false },
			{ text: "vadodara", isCorrect: false },
			{ text: "gandhinagar", isCorrect: true },
			{ text: "rajkot", isCorrect: false },
		],
	},
];
const optionList = [option1, option2, option3, option4];
// simple functions
function startProgram() {
	const quizMainContainer = document.querySelector(".quiz-main-container");
	quizMainContainer.style.display = "block";
	displayQuiz();
}

function displayQuiz() {
	const startButton = document.getElementById("start-button");
	startButton.style.display = "none";
	const score = document.querySelector(".score-display");
	score.style.display = "flex";
	const question = document.getElementById("question1");
	const option1 = document.getElementById("option1");
	const option2 = document.getElementById("option2");
	const option3 = document.getElementById("option3");
	const option4 = document.getElementById("option4");
	question.innerText = Questions[0].q;

	for (let index = 0; index < 4; index++) {
		optionList[index].innerText = Questions[0].a[index].text;
	}
}

// touch element function
function touchElement() {
	let id = event.target.id;
	let output = document.getElementById(id);
	console.log(
		"The id of the element touched is " +
			output.id +
			" " +
			"and the output is returned as a " +
			typeof output.id +
			" datatype." +
			"\n" +
			"the contents are " +
			output.innerText
	);
	return output.id;
}
// if wrong color red
function colorRed() {
	const element = document.getElementById(touchElement());
	console.log(element);
	element.style.backgroundColor = "red";
}
// if correct color green
function colorGreen(id) {
	const element = document.getElementById(touchElement());
	console.log(element);
	element.style.backgroundColor = "green";
}
// big function
function resetProgram() {
	location.reload();
}
// end of the script
