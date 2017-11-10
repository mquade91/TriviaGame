// console.log("js works")
$(document).ready(function() {


    //  Variable that will hold our setInterval that runs the stopwatch
    var intervalId;
    //prevents the clock from being sped up unnecessarily
    var clockRunning = false;
    //suppose to be a start button/30 second timer **Check Chrome Dev tool on google timer**//
    var stopWatch = {
        time: 30
    }


    //function that controls the timer//
    function count() {
        stopWatch.time--;
        $("#display").html("<h3>" + "Seconds Remaining: " + stopWatch.time + "</h3>");

        if (stopWatch.time === 0) {
            alert("Game Over Check your Results");
            clearInterval(intervalId);
            clockRunning = false;
            console.log("Correct: " + correctAnswer);
            console.log("Incorrect: " + loss);
            console.log("Unanswered: " + (5 - (correctAnswer + loss)));
            $("#correctAnswers").html("Correct Answers: " + correctAnswer);
            $("#incorrectAnswers").html("Incorrect Answers: " + loss);
            $("#noAnswer").html("Unanswered: " + (5 - (correctAnswer + loss)));
            $("#display").html("TIME IS UP");
            $("#startButton").html("<h3>" + "REFRESH PAGE to TRY AGAIN" + "</h3>");

        }
    }

    //Function that runs when you click the "Start Button" //
    function start() {
        intervalId = setInterval(count, 1000);

    }

    //this button STARTS the timer//

    $("#startButton").on("click", function() {
        console.log("start button works");
        start();
        displayQuestions();
    });

    function displayQuestions() {
        // for (var i = 0; i < questions.length; i++) {//
        $("#q1").html("Question 1: " + questions[0].q1);
        $("#1a").html("A: " + questions[0].answers.a);
        $("#1b").html("B: " + questions[0].answers.b);
        $("#1c").html("C: " + questions[0].answers.c);
        $("#1d").html("D: " + questions[0].answers.d);

        $("#q2").html("Question 2: " + questions[1].q2);
        $("#2a").html("A: " + questions[1].answers.a);
        $("#2b").html("B: " + questions[1].answers.b);
        $("#2c").html("C: " + questions[1].answers.c);
        $("#2d").html("D: " + questions[1].answers.d);

        $("#q3").html("Question 3: " + questions[2].q3);
        $("#3a").html("A: " + questions[2].answers.a);
        $("#3b").html("B: " + questions[2].answers.b);
        $("#3c").html("C: " + questions[2].answers.c);
        $("#3d").html("D: " + questions[2].answers.d);

        $("#q4").html("Question 4: " + questions[3].q4);
        $("#4a").html("A: " + questions[3].answers.a);
        $("#4b").html("B: " + questions[3].answers.b);
        $("#4c").html("C: " + questions[3].answers.c);
        $("#4d").html("D: " + questions[3].answers.d);

        $("#q5").html("Question 5: " + questions[4].q5);
        $("#5a").html("A: " + questions[4].answers.a);
        $("#5b").html("B: " + questions[4].answers.b);
        $("#5c").html("C: " + questions[4].answers.c);
        $("#5d").html("D: " + questions[4].answers.d);



    }

    //Variable for correctAnswers//
    var correctAnswer = 0;
    //Variable for losses//
    var loss = 0;
    //Variable for Unanswered//
    var unanswered = 0;


    //when choosing an answer//

    $(".choice").on("click", function() {
        if ($(this).val() == 1) {
            correctAnswer++;
        }

        if ($(this).val() == 0) {
            loss++;
        }

        if ($(this).val() == "") {

        }
    });

    //QUESTIONS FOR TRIVIA//
    var questions = [
        //Question 1//

        {
            q1: "What is the largest shark in the world ?",
            answers: {
                a: "Whale Shark",
                b: "Great White Shark",
                c: "Hammerhard Sharks",
                d: "Mako Shark",
            },

            correctAnswer: "a"
        },
        //Question 2//
        {
            q2: "What is the fastest shark in the world ?",
            answers: {
                a: "Whale Shark",
                b: "Great White Shark",
                c: "Hammerhard Shark",
                d: "Mako Shark",
            },

            correctAnswer: "d"
        },
        //Question 3//
        {
            q3: "What Shark is responsible for the most attacks on humans?",
            answers: {
                a: "Whale Shark",
                b: "Great White Shark",
                c: "Hammerhard Shark",
                d: "Mako Shark",
            },
            correctAnswer: "b"
        },
        //Question 4//
        {
            q4: "How long have sharks been on Earth?",
            answers: {
                a: "200,000 years",
                b: "22,000,000 years",
                c: "420,000,000 years",
                d: "2017 years",
            },
            correctAnswer: "c"
        },
        //Question 5//
        {
            q5: "What are the chances you will ever be attacked by a shark?",
            answers: {
                a: "1 out of 125,000",
                b: "1 out of 30,200,000",
                c: "1 out of 500",
                d: "1 out of 11, 500, 000",
            },
            correctAnswer: "d"
        },
    ];

    //Variable for index of current question//
    var questionIndex = 0;
    // Array of questions.
    var questionsArray = ["questions.q1, questions.q2, questions.q3, questions.q4, questions.q5"];

    var i;






});



// });

// Quesiton 1:
// What is the largest shark in the world ?
// a) * Whale Shark * (18 m / 60 feet)
// b) Great White Shark
// c) Hammerhard Shark
// d) Mako Shark

// Question 2:
//  What is the fastest shark in the world ?
// a) Whale Shark
// b) Great White Shark
// c) Hammerhard Shark
// d) * Mako Shark * (60 MPH)

// Question 3:
// What Shark is responsible for the most attacks on humans ?
//a) Whale Shark
//b) * Great White Shark *
//c) Hammerhard Shark
//d) Mako Shark

// Question 4:
//  How long have sharks been on Earth ?
//a: "200,000 years
//b: "22,000,000 years",
//c: "420,000,000 years",
//d: "2017 years",


//Question 5:
//What are the chances you will ever be attacked by a shark ?
// a) 1 out of 125, 000
// b) 1 out of 30, 002, 000
// c) 1 out of 500
// d) 1 out of 11, 500, 000 **
