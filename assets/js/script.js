// Code Quiz 
// wait until document ready 
$(function() {
  
  // Global variables 
  let gameOn = false;
  let gameTime = 10;

  // timer 
  const timeView = $("#showTime")
  timeView.text(gameTime);
  // function timeCountdown() {
    
  // }

  const outputBox = $("#outputGroup")

  // click start quiz button 
  $("#btnStart").on("click", function() {
    gameOn = true;
    console.log("testing");
    $("#quizHeader").empty();
    outputBox.addClass("quizMode");
    // start countdown timer 
    let x = setInterval(function() {
      gameTime --;
      if (gameTime < 1) {
        clearInterval(x); 
        console.log("game over");
        outputBox.empty().removeClass("quizMode").html("<h1>All done!</h1><p>Your final score is " + gameTime + ".</p>");
      }
      timeView.text(gameTime);
    }, 1000);

  });



  // drink list for testing purposes 
  // We are given an array that holds all of the drinks available
  var drinkList = [
    "Coffee: $5",
    "Espresso: $7",
    "Cappuccino: $6",
    "Latte: $4",
    "Tea: $3",
    "Ice Coffee: $6",
    "Ice Espresso: $8",
    "Ice Latte: $6",
    "Ice Tea: $4"
  ];
  // This line of JavaScript "grabs" the main div on the page ("#drink-options");
  var drinkDiv = $("#drink-options");
  // Here we loop through our array using the .each() method 
  $.each(drinkList, function(i, drink) {
    // We then add each to an element in the main div on the page ("#drink-options")
    drinkDiv.append("<div><button>" + drink + "</button></div>");
  });


});


  