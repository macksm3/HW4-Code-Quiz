// Code Quiz 
// wait until document ready 
$(function() {
  
  // Global variables 
  const outputBox = $("#outputGroup");
  const inputBox = $("#inputGroup button");
  const answerBox = $(".answers");
  const thisObj = $(this);
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
  
  // const answer1 = document.getElementById("answer-1");


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

  // // Evaluate answer
  // function evalAnswer(index) {
  // }


  function processAnswer(index) {  
    // evalAnswer(index);
    console.log("evaluating answer to question " + (index + 1));

    $(".btnAnswer").on("click", function() {
      event.preventDefault();
      const answerChosen = $(this).text();
      console.log("answer " + (index + 1) + " selected: " + answerChosen);
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
      index++;
      if (index === questionList.length) {
        gameOver();
      }
      else{
        loadQuestion(index);
      }

    // $(".btnAnswer").off(focus);

    // index++;
    // console.log(index);
    
    });
  }

  function loadQuestion(index) {
    console.log("current index = " + index);
    // $(".btnAnswer").off("click", function() {})
    // Load the first question to the page 
    $("#question").text(questionList[index].question);
    // Load the answer options 
    $(answer1).text(questionList[index].ans1);
    $(answer2).text(questionList[index].ans2);
    $(answer3).text(questionList[index].ans3);
    $(answer4).text(questionList[index].ans4);
    answerKey = questionList[index].key;
    console.log("answer " + (index + 1) + " should be " + answerKey);
    processAnswer(index)
    
  }

  // click start quiz button 
  $("#btnStart").on("click", function() {
    gameClock();
    gameOn = true;
    console.log("testing");
    $("#quizHeader").empty();
    $("#btnStart").remove();
    outputBox.addClass("quizMode");
    inputBox.removeClass("hidden");
    // add style with border
    inputBox.addClass("btnAnswer");
    loadQuestion(0);

    // // start countdown timer 
    // let x = setInterval(function() {
    //   gameTime --;
    //   if (gameTime < 1) {
    //     clearInterval(x); 
    //     console.log("game over");
    //     gameOver();
    //   }
    //   timeView.text(gameTime);
    // }, 1000);
    // // end countdown timer  
  

  // end of btnStart click event  
  });

    // Generate a stop button in the #testBed
    // $("#testBed").html(<button id="btnStop">Stop Timer</button>);
    $("#btnStop").on("click", function() {
      // console.log("stop button");
      clearInterval(gameInterval); 
    });



});


  

// from Keith
// highScoreObj.push({ initials: userInitials, score: startTime });
// "Why do we park on a driveway and drive on a parkway"
