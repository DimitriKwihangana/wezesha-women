// DummyData.js
const dummyCourses = [
  {
    id: 1,
    name: "Course 1",
    year: "2023",
    imgi: "http://t2.gstatic.com/images?q=tbn:ANd9GcQ7wzEC9Rqr2Qs42xBpwpoiAV2uF6FGS-nzCRXhXT-XIyASRlApdDYYITcIiKqpU2QXLPCR", // Placeholder image
  },
  {
    id: 2,
    name: "Course 2",
    year: "2023",
    imgi: "http://t2.gstatic.com/images?q=tbn:ANd9GcQ7wzEC9Rqr2Qs42xBpwpoiAV2uF6FGS-nzCRXhXT-XIyASRlApdDYYITcIiKqpU2QXLPCR", // Another placeholder image
  },
];

const dummyModules = [
  {
    id: 1,
    courseId: 1,
    title: "Module 1",
    description: "Module 1 description",
  },
  {
    id: 2,
    courseId: 1,
    title: "Module 2",
    description: "Module 2 description",
  },
  {
    id: 3,
    courseId: 2,
    title: "Module 1",
    description: "Module 1 description for Course 2",
  },
];

const dummyQuizData = [
  {
    courseId: 1,
    questions: [
      {
        question: "What is question 1 for Course 1?",
        options: ["Option A", "Option B", "Option C"],
        correctAnswer: "Option A",
      },
      {
        question: "What is question 2 for Course 1?",
        options: ["Option X", "Option Y", "Option Z"],
        correctAnswer: "Option Z",
      },
    ],
  },
  {
    courseId: 2,
    questions: [
      {
        question: "What is question 1 for Course 2?",
        options: ["Option Alpha", "Option Beta", "Option Gamma"],
        correctAnswer: "Option Gamma",
      },
      {
        question: "What is question 2 for Course 2?",
        options: ["Option One", "Option Two", "Option Three"],
        correctAnswer: "Option One",
      },
    ],
  },
];

export { dummyCourses, dummyModules, dummyQuizData };
