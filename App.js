import React, { useState } from 'react';

export default function App() {
	const questions = [
    {
			questionText: 'What does HTML stand for?',
			answerOptions: [
				{ answerText: ' Hyper Text Markup Language', isCorrect: true },
				{ answerText: ' Home Tool Markup Language', isCorrect: false },
				{ answerText: ' Hyperlinks and Text Markup Language', isCorrect: false },
			],
		},
		{
			questionText: 'Who is making the Web standards?',
			answerOptions: [
        { answerText: 'Mozilla', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
				{ answerText: 'Google', isCorrect: false },
				{ answerText: ' The World Wide Web Consortium', isCorrect: true },
			],
		},
    {
			questionText: 'What does CSS stand for?',
			answerOptions: [
				{ answerText: ' Cascading Style Sheets', isCorrect: true },
				{ answerText: ' Computer Style Sheets', isCorrect: false },
				{ answerText: ' Creative Style Sheets', isCorrect: false },
				{ answerText: ' Colorful Style Sheets', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		
    {
			questionText: 'Inside which HTML element do we put the JavaScript?',
			answerOptions: [
				{ answerText: '<Js>', isCorrect: false },
				{ answerText: '<JavaScript>', isCorrect: false },
				{ answerText: '<script>', isCorrect: true },
				{ answerText: '<Scripting>', isCorrect: false },
			],
		},
		
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}