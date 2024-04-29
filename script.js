const qustionDataBase = [
  {
    question: 'Which algorithm is commonly used to solve the "camel and banana" problem in AI?',
    option1: 'Depth-First Search (DFS)',
    option2: 'Breadth-First Search (BFS)',
    option3: 'A* Search Algorithm',
    option4: 'Greedy Algorithm',
    ans: 'answer3',
  },
  {
    question: 'In the context of the "camel and banana" problem, what does the term "state space" refer to?',
    option1: "The set of all possible states the camel can be in",
    option2: 'The set of all possible routes to reach the banana',
    option3: 'The set of all possible combinations of bananas the camel can carry',
    option4: "The set of all possible actions the camel can take",
    ans: 'answer1',
  },
  {
    question: 'Which heuristic function is often used with search algorithms for the "camel and banana" problem?',
    option1: 'Manhattan Distance',
    option2: 'Euclidean Distance',
    option3: 'Hamming Distance',
    option4: "Chebyshev Distance",
    ans: 'answer1',
  },
  {
    question: 'What is the main objective of the "camel and banana" algorithm in AI?',
    option1: 'To maximize the number of bananas the camel can carry',
    option2: 'To find the shortest path for the camel to reach the banana',
    option3: 'To minimize the number of steps the camel takes to reach the banana',
    option4: "To optimize the camel's energy consumption while reaching the banana",
    ans: 'answer2',
  },
  {
    question: 'Which search strategy is most suitable for solving the "camel and banana" problem efficiently?',
    option1: 'Depth-First Search (DFS)',
    option2: 'Breadth-First Search (BFS)',
    option3: 'A* Search Algorithm',
    option4: 'Hill Climbing Algorithm',
    ans: 'answer3',
  },
]

// getting referrence
const questionContainer = document.querySelector('h2')
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const option4 = document.querySelector('#option4')
const submitButton = document.querySelector('button')
const usersAnswer = document.querySelectorAll('.answer')
const scoreArea = document.querySelector('#ShowScore')

// This function is rendering all the texts

let questionCount = 0
let score = 0
const mainFunc = () => {
  const list = qustionDataBase[questionCount]
  questionContainer.innerText = list.question
  option1.innerText = list.option1
  option2.innerText = list.option2
  option3.innerText = list.option3
  option4.innerText = list.option4
}

mainFunc()

// this function is for answer checking

const goCheckAnswer = () => {
  let answers
  usersAnswer.forEach((data) => {
    if (data.checked) {
      answers = data.id
    }
  })
  return answers
}

submitButton.addEventListener('click', () => {
  const checkAnswer = goCheckAnswer()
  console.log(checkAnswer)

  if (checkAnswer === qustionDataBase[questionCount].ans) {
    score++
  }
  questionCount++
  if (questionCount < qustionDataBase.length) {
    mainFunc()
  } else {
    scoreArea.style.display = 'block'
    scoreArea.innerHTML = `
      <h3>Your score is ${score} / ${qustionDataBase.length}</h3>
      <button class='btn' onclick='location.reload()'>Start Again</button>
      `
  }
})
console.log(qustionDataBase[questionCount].ans)
