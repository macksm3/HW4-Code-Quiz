// Code Quiz 
// wait until document ready 
$(function() {
  
  // Global variables 
  const outputBox = $("#outputGroup");
  const inputBox = $("#inputGroup button");
  const answerBox = $(".answers");
  const thisObj = $(this);
  // const answerButton = $(".btnAnswer");
  const answer1 = $("#answer-1");
  const answer2 = $("#answer-2");
  const answer3 = $("#answer-3");
  const answer4 = $("#answer-4");
  const result = $("#results");
  let answerKey = "";
  let gameOn = false;
  let questionList = [
    {question: "Commonly used data types DO NOT Include:", ans1: "1. strings", ans2: "2. boolians", ans3: "3. alerts", ans4: "4. numbers", key: "3. alerts"},
    {question: "The condition in an if / else statement is enclosed within _____.", ans1: "1. quotes", ans2: "2. curly brackets", ans3: "3. parenthesis", ans4: "4. square brackets", key: "3. parenthesis"},
    {question: "Arrays in JavaScript can be used to store _____.", ans1: "1. numbers and strings", ans2: "2. other arrays", ans3: "3. boolians", ans4: "4. all of the above", key: "4. all of the above"},
    {question: "String values must be enclosed within _____ when being assigned to variables.", ans1: "1. commas", ans2: "2. curly brackets", ans3: "3. quotes", ans4: "4. parenthesis", key: "3. quotes"},
    {question: "A very useful tool used during development and debugging for printing content to the debugger is:", ans1: "1. JavaScript", ans2: "2. terminal / bash", ans3: "3. for loops", ans4: "4. console.log", key: "4. console.log"}
  ];
  
  let questionNumber = 0;
  let questionsLoaded = false;

  // timer 
  let gameTime = 100;
  let gameInterval;
  const timeView = $("#showTime")
  timeView.text(gameTime);


  // Game Over! function, here is stuff that happens when time expires
  function gameOver() {
    outputBox.empty().html("<h1>All done!</h1><p>Your final score is " + gameTime + ".</p><hr>");
    clearInterval(gameInterval); 
     
  }

  function gameClock() {
    // start countdown timer 
    gameInterval = setInterval(function() {
      gameTime --;
      if (gameTime < 1) {
        clearInterval(gameInterval); 
        console.log(gameTime);
        gameOver();
      }
      timeView.text(gameTime);
    }, 1000);
    // end countdown timer  
    
  }

  function loadQuestion() {
    console.log("Question number = " + questionNumber + 1);
    // $(".btnAnswer").off("click", function() {})
    // Load the first question to the page 
    $("#question").text(questionList[questionNumber].question);
    // Load the answer options 
    $(answer1).text(questionList[questionNumber].ans1);
    $(answer2).text(questionList[questionNumber].ans2);
    $(answer3).text(questionList[questionNumber].ans3);
    $(answer4).text(questionList[questionNumber].ans4);
    answerKey = questionList[questionNumber].key;
    console.log("answer " + (questionNumber + 1) + " should be: " + answerKey);
    questionsLoaded = true;
    // processAnswer(questionNumber)  
  }

  // // Evaluate answer
  // function evalAnswer(index) {}
  // function processAnswer() {}

  // $(".btnAnswer").on("click", function() {console.log("click answer")});

  $(inputBox).on("click", function() {
    // event.preventDefault();
    console.log("evaluating answer to question " + questionNumber + 1);
    if (questionsLoaded) {
      questionsLoaded = false;
      const answerChosen = $(this).text();
      console.log("answer " + (questionNumber + 1) + " selected: " + answerChosen);
      if (answerChosen === answerKey) {
        console.log("correct answer");
        $(result).html("<p>Correct!</p>");
      }else{
        console.log("Wrong answer");
        $(result).html("<p>Wrong!</p>");
        gameTime = gameTime - 10;
      }

      // x = setTimeout(function() {}, 1);
      // increment the index and load the next question
      questionNumber++;
      if (questionNumber < questionList.length) {
        loadQuestion(questionNumber);
      }
      else{
         gameOver();
      }

    }
    // $(".btnAnswer").off(focus);

    // index++;
    // console.log(index);
    
  });

  // click start quiz button 
  $("#btnStart").on("click", function() {
    gameClock();
    gameOn = true;
    console.log("Start button clicked");
    $("#quizHeader").empty();
    $("#btnStart").remove();
    outputBox.addClass("quizMode");
    inputBox.removeClass("hidden");
    // add style with border
    inputBox.addClass("btnAnswer");
    loadQuestion();

  // end of btnStart click event  
  });

  // Generate a stop button in the #testBed
  // $("#testBed").html(<button id="btnStop">Stop Timer</button>);
  $("#btnStop").on("click", function() {
    console.log("stop timer clicked");
    clearInterval(gameInterval); 
  });



});


  

// from Keith
// highScoreObj.push({ initials: userInitials, score: startTime });
// "Why do we park on a driveway and drive on a parkway"
