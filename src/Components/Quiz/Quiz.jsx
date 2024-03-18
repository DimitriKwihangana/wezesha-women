// import React, { useState } from "react";

// const Quiz = () => {
//   const questions = [
//     {
//       question: "What is the capital of France?",
//       options: ["Berlin", "Paris", "London"],
//       correctAnswer: "Paris",
//     },
//     {
//       question: "Which programming language is this code written in?",
//       options: ["JavaScript", "Python", "Java"],
//       correctAnswer: "JavaScript",
//     },
//     {
//       question: "What is the largest planet in our solar system?",
//       options: ["Earth", "Jupiter", "Mars"],
//       correctAnswer: "Jupiter",
//     },
//   ];

//   const [answers, setAnswers] = useState(Array(questions.length).fill(null));
//   const [score, setScore] = useState(0);
//   const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);

//   const handleAnswerChange = (index, selectedOption) => {
//     const newAnswers = [...answers];
//     newAnswers[index] = selectedOption;
//     setAnswers(newAnswers);
//   };

//   const handleSubmit = () => {
//     const newScore = answers.reduce(
//       (acc, answer, index) =>
//         answer === questions[index].correctAnswer ? acc + 1 : acc,
//       0
//     );
//     setScore(newScore);
//     setShowCorrectAnswers(true);
//   };

//   return (
//     <div>
//       <h1>Quiz</h1>
//       {questions.map((q, index) => (
//         <div key={index}>
//           <p>{q.question}</p>
//           <ul>
//             {q.options.map((option, optionIndex) => (
//               <li
//                 key={optionIndex}
//                 style={
//                   showCorrectAnswers &&
//                   option === questions[index].correctAnswer
//                     ? { color: "green" }
//                     : {}
//                 }
//               >
//                 <label>
//                   <input
//                     type="radio"
//                     name={`question-${index}`}
//                     value={option}
//                     checked={answers[index] === option}
//                     onChange={() => handleAnswerChange(index, option)}
//                     disabled={showCorrectAnswers}
//                   />
//                   {option}
//                 </label>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//       <button onClick={handleSubmit} disabled={showCorrectAnswers}>
//         Submit
//       </button>
//       {showCorrectAnswers && <p>Score: {score}</p>}
//     </div>
//   );
// };

// export default Quiz;