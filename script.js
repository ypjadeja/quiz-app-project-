const quizQuestions = [
  {
    question: "What is the capital of India ?",
    options: ["Delhi", "Lucknow", "Kashi", "Mumbai"],
    answer: "Delhi",
  },
  {
    question: "Which is the largest planet?",
    options: ["Earth", "Jupiter", "Mars", "Venus"],
    answer: "Jupiter",
  },
  {
    question: "What language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question: "Which language is used not in frontend?",
    options: ["Redux", "Java", "HTML", "TypeScript"],
    answer: "Java",
  },
];


    const QuestionBox = document.getElementById("question-box");
    const Question = document.getElementById("question");
    const OptionsBox = document.getElementById("options");
    const nextbutton  = document.getElementById("next-btn");
    const ResultBox = document.getElementById("result");
    const Score = document.getElementById("score");




  let currentQuestionIndex = 0; // ઈમેજ મુજબ 1 છે, પણ સામાન્ય રીતે 0 થી શરૂ થાય છે
  let quizScore = 0;
  let isRightAnswer = false;

  function displayingQuestions() {
    OptionsBox.style.pointerEvents = "auto"; //અહીં 'auto' કરવાથી ફરીથી ક્લિક કરી શકાશે
    let currentQuestionData = quizQuestions[currentQuestionIndex];
    // પ્રશ્ન સેટ કરવા માટે
    Question.innerText = currentQuestionData.question;
    OptionsBox.innerText=''
    // ઓપ્શન્સ (વિકલ્પો) બતાવવા માટે લૂપ 
    currentQuestionData.options.forEach((option) => {
      const li = document.createElement("li"); // નવું <li> બનાવ્યું
      li.innerText = option; // <li> માં ઓપ્શનનું નામ લખ્યું
      li.addEventListener("click", () => AfterClick(li,option)); // ક્લિક ઇવેન્ટ (નોંધ: અહીં AfterClick() ને બદલે AfterClick લખવું વધુ સારું છે)
      OptionsBox.appendChild(li); // HTML માં <ul> ની અંદર <li> ઉમેર્યું

    });
  }

  function AfterClick(li,optionclicked) {
    // આ ફંક્શન હજી ખાલી છે, અહીં તમે જવાબ ચેક કરવાનું લોજિક લખશો
    const allListTags = OptionsBox.querySelectorAll("li");
    allListTags.forEach((list) => {
      list.classList.remove("selected");
    });
    li.classList.add("selected");
    const answer = quizQuestions[currentQuestionIndex].answer;
    if (optionclicked == answer) {
      isRightAnswer = true;
    } else {
      isRightAnswer = false;
    }

    OptionsBox.style.pointerEvents = "none"; // આનાથી હવે બીજા કોઈ લિસ્ટ પર ક્લિક નહીં થાય
  }

  displayingQuestions()


  nextbutton.addEventListener('click',()=>{
    currentQuestionIndex++
    if(isRightAnswer){
      quizScore++
    }
    if(currentQuestionIndex<quizQuestions.length){
    displayingQuestions(); 
    }else{
      QuestionBox.className="hide"
      nextbutton.className = 'hide'
      ResultBox.classList.remove('hide')
      Score.innerText = `${quizScore}/${quizQuestions.length}`

    }
  })