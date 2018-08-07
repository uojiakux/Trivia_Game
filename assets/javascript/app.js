var correctanswers = 0;
var incorrectanswers = 0;

var number = 16;
var intervalId;


function runone() {
        clearInterval(intervalId);
        intervalId = setInterval(decrementone, 1000);
        number = 16;
        }

function decrementone() {
        number--;
        $("#show-number").show();
        $("#show-number").html("<h2 class='timer'> Time Left: " + number + "</h2>");

        if (number === 0) {
            number = 16;
            incorrectanswers++;
            console.log("Incorrect:" + incorrectanswers);
            firstQuestionTimesUp ();
        }
    }

function runtwo() {
        clearInterval(intervalId);
        intervalId = setInterval(decrementtwo, 1000);
        number = 16;
        }

function decrementtwo() {
        number--;
        $("#show-number").show();
        $("#show-number").html("<h2 class='timer'> Time Left: " + number + "</h2>");

        if (number === 0) {
            number = 16;
            incorrectanswers++;
            console.log("Incorrect:" + incorrectanswers);
            secondQuestionTimesUp ();
        }
    }

function runthree() {
        clearInterval(intervalId);
        intervalId = setInterval(decrementthree, 1000);
        number = 16;
        }

function decrementthree() {
        number--;
        $("#show-number").show();
        $("#show-number").html("<h2 class='timer'> Time Left: " + number + "</h2>");

        if (number === 0) {
            number = 16;
            incorrectanswers++;
            console.log("Incorrect:" + incorrectanswers);
            thirdQuestionTimesUp ();
        }
    }

function runfour() {
        clearInterval(intervalId);
        intervalId = setInterval(decrementfour, 1000);
        number = 16;
        }

function decrementfour() {
        number--;
        $("#show-number").show();
        $("#show-number").html("<h2 class='timer'> Time Left: " + number + "</h2>");

        if (number === 0) {
            number = 16;
            incorrectanswers++;
            console.log("Incorrect:" + incorrectanswers);
            fourthQuestionTimesUp ();
        }
    }

function runfive() {
        clearInterval(intervalId);
        intervalId = setInterval(decrementfive, 1000);
        number = 16;
        }

function decrementfive() {
        number--;
        $("#show-number").show();
        $("#show-number").html("<h2 class='timer'> Time Left: " + number + "</h2>");

        if (number === 0) {
            number = 16;
            incorrectanswers++;
            console.log("Incorrect:" + incorrectanswers);
            fifthQuestionTimesUp ();
        }
    }

$("#startButton").on("click", function startNextQuestionSet () {

    $("#question-section").html("<h3 id='questionLine'> What country produces the most potatoes? </h3>");
    $("#question-section").append("<button class='choices' id='choice-a'> China </button>");
    $("#question-section").append("<button class='choices' id='choice-b'> United States </button>");
    $("#question-section").append("<button class='choices' id='choice-c'> Ireland </button>");
    $("#question-section").append("<button class='choices' id='choice-d'> Russia </button>");
    $("#startButton").remove();
    runone ();


                                $("#choice-a").on("click", function () {
                                    firstQuestionRight ();
                                    correctanswers++;
                                    console.log("Correct:" + correctanswers);
                                    });
                                $("#choice-b").on("click", function () {
                                    firstQuestionIncorrect ();
                                    incorrectanswers++;
                                    console.log("Incorrect:" + incorrectanswers);
                                    });
                                $("#choice-c").on("click", function () {
                                    firstQuestionIncorrect ();
                                    incorrectanswers++;
                                    console.log("Incorrect:" + incorrectanswers);
                                    });
                                $("#choice-d").on("click", function () {
                                    firstQuestionIncorrect ();
                                    incorrectanswers++;
                                    console.log("Incorrect:" + incorrectanswers);
                                    });
        
});

            function intervalone() {
                    clearInterval(intervalId);
                    intervalId = setInterval(decrementintervalone, 1000);
                    number = 4;
                    }

            function decrementintervalone() {
                    number--;

                    if (number === 0) {
                        secondQuestionSet ();
                    }
                }

            function firstQuestionRight () {
                    $("#question-section").html("<h3 class='intervaltext'> You Guessed Correct! </h3>");
                    $("#question-section").append("<img id='pictureone' src='assets/images/Chinapotatoes.jpg' width= '500px'>");
                    $("#show-number").hide();
                    intervalone();

            }

            function firstQuestionIncorrect () {
                    $("#question-section").html("<h3 class='intervaltext'> You Guessed Wrong! </h3>");
                    $("#question-section").append("<h3 class='intervaltext'> Correct Answer: China </h3>");
                    $("#question-section").append("<img id='pictureone' src='assets/images/Chinapotatoes.jpg' width= '500px'>");
                    $("#show-number").hide();
                    intervalone();
            }

            function firstQuestionTimesUp () {
                    $("#question-section").html("<h3 class='intervaltext'> Times Up! </h3>");
                    $("#question-section").append("<h3 class='intervaltext'> Correct Answer: China </h3>");
                    $("#question-section").append("<img id='pictureone' src='assets/images/Chinapotatoes.jpg' width= '500px'>");
                    $("#show-number").hide();
                    intervalone();
            }


function secondQuestionSet () {

    $("#question-section").html("<h3 id='questionLine'> What vegetable has varieties known as Bell Tower, Orobelle, and Jupiter? </h3>");
    $("#question-section").append("<button class='choices' id='choice-a'> Onion </button>");
    $("#question-section").append("<button class='choices' id='choice-b'> Pepper </button>");
    $("#question-section").append("<button class='choices' id='choice-c'> Squash </button>");
    $("#question-section").append("<button class='choices' id='choice-d'> Carrot </button>");
    $("#startButton").remove();
    runtwo ();

                                $("#choice-a").on("click", function () {
                                    secondQuestionIncorrect ();
                                    incorrectanswers++;
                                    console.log("Incorrect:" + incorrectanswers);
                                    });
                                $("#choice-b").on("click", function () {
                                    secondQuestionRight ();
                                    correctanswers++;
                                    console.log("Correct:" + correctanswers);
                                    });
                                $("#choice-c").on("click", function () {
                                    secondQuestionIncorrect ();
                                    incorrectanswers++;
                                    console.log("Incorrect:" + incorrectanswers);
                                    });
                                $("#choice-d").on("click", function () {
                                    secondQuestionIncorrect ();
                                    incorrectanswers++;
                                    console.log("Incorrect:" + incorrectanswers);
                                    });

};

            function intervaltwo() {
                    clearInterval(intervalId);
                    intervalId = setInterval(decrementintervaltwo, 1000);
                    number = 4;
                    }

            function decrementintervaltwo() {
                    number--;

                    if (number === 0) {
                        thirdQuestionSet ();
                    }
                }

            function secondQuestionRight () {
                    $("#question-section").html("<h3 class='intervaltext'> You Guessed Correct! </h3>");
                    $("#question-section").append("<img id='picturetwo' src='assets/images/Bell-Peppers.jpg' width= '500px'>");
                    $("#show-number").hide();
                    intervaltwo();

            }

            function secondQuestionIncorrect () {
                    $("#question-section").html("<h3 class='intervaltext'> You Guessed Wrong! </h3>");
                    $("#question-section").append("<h3 class='intervaltext'> Correct Answer: Pepper </h3>");
                    $("#question-section").append("<img id='picturetwo' src='assets/images/Bell-Peppers.jpg' width= '500px'>");
                    $("#show-number").hide();
                    intervaltwo();
            }

            function secondQuestionTimesUp () {
                    $("#question-section").html("<h3 class='intervaltext'> Times Up! </h3>");
                    $("#question-section").append("<h3 class='intervaltext'> Correct Answer: Pepper </h3>");
                    $("#question-section").append("<img id='picturetwo' src='assets/images/Bell-Peppers.jpg' width= '500px'>");
                    $("#show-number").hide();
                    intervaltwo();
            }


function thirdQuestionSet () {

    $("#question-section").html("<h3 id='questionLine'> Europeans first learned of chocolate from whom? </h3>");
    $("#question-section").append("<button class='choices' id='choice-a'> Africans </button>");
    $("#question-section").append("<button class='choices' id='choice-b'> Aztecs </button>");
    $("#question-section").append("<button class='choices' id='choice-c'> East Indians </button>");
    $("#question-section").append("<button class='choices' id='choice-d'> Asians </button>");
    $("#startButton").remove();
    runthree();

                                $("#choice-a").on("click", function () {
                                    thirdQuestionIncorrect ();
                                    incorrectanswers++;
                                    console.log("Incorrect:" + incorrectanswers);
                                    });
                                $("#choice-b").on("click", function () {
                                    thirdQuestionRight ();
                                    correctanswers++;
                                    console.log("Correct:" + correctanswers);
                                    });
                                $("#choice-c").on("click", function () {
                                    thirdQuestionIncorrect ();
                                    incorrectanswers++;
                                    console.log("Incorrect:" + incorrectanswers);
                                    });
                                $("#choice-d").on("click", function () {
                                    thirdQuestionIncorrect ();
                                    incorrectanswers++;
                                    console.log("Incorrect:" + incorrectanswers);
                                    });

};

            function intervalthree() {
                    clearInterval(intervalId);
                    intervalId = setInterval(decrementintervalthree, 1000);
                    number = 4;
                    }

            function decrementintervalthree() {
                    number--;

                    if (number === 0) {
                        fourthQuestionSet ();
                    }
                }

            function thirdQuestionRight () {
                    $("#question-section").html("<h3 class='intervaltext'> You Guessed Correct! </h3>");
                    $("#question-section").append("<img id='picturethree' src='assets/images/Aztecs-First-Used-Chocolate-w-754x377.jpg' width= '500px'>");
                    $("#show-number").hide();
                    intervalthree();

            }

            function thirdQuestionIncorrect () {
                    $("#question-section").html("<h3 class='intervaltext'> You Guessed Wrong! </h3>");
                    $("#question-section").append("<h3 class='intervaltext'> Correct Answer: Aztecs </h3>");
                    $("#question-section").append("<img id='picturethree' src='assets/images/Aztecs-First-Used-Chocolate-w-754x377.jpg' width= '500px'>");
                    $("#show-number").hide();
                    intervalthree();
            }

            function thirdQuestionTimesUp () {
                    $("#question-section").html("<h3 class='intervaltext'> Times Up! </h3>");
                    $("#question-section").append("<h3 class='intervaltext'> Correct Answer: Aztecs </h3>");
                    $("#question-section").append("<img id='picturethree' src='assets/images/Aztecs-First-Used-Chocolate-w-754x377.jpg' width= '500px'>");
                    $("#show-number").hide();
                    intervalthree();
            }


function fourthQuestionSet () {

    $("#question-section").html("<h3 id='questionLine'> Which of the following is not a favorable adjective when discussing wine? </h3>");
    $("#question-section").append("<button class='choices' id='choice-a'> Fat </button>");
    $("#question-section").append("<button class='choices' id='choice-b'> Flinty </button>");
    $("#question-section").append("<button class='choices' id='choice-c'> Leggy </button>");
    $("#question-section").append("<button class='choices' id='choice-d'> Vigorous </button>");
    $("#startButton").remove();
    runfour();

                                $("#choice-a").on("click", function () {
                                    fourthQuestionRight ();
                                    correctanswers++;
                                    console.log("Correct:" + correctanswers);
                                    });
                                $("#choice-b").on("click", function () {
                                    fourthQuestionIncorrect ();
                                    incorrectanswers++;
                                    console.log("Incorrect:" + incorrectanswers);
                                    });
                                $("#choice-c").on("click", function () {
                                    fourthQuestionIncorrect ();
                                    incorrectanswers++;
                                    console.log("Incorrect:" + incorrectanswers);
                                    });
                                $("#choice-d").on("click", function () {
                                    fourthQuestionIncorrect ();
                                    incorrectanswers++;
                                    console.log("Incorrect:" + incorrectanswers);
                                    });

};

            function intervalfour() {
                    clearInterval(intervalId);
                    intervalId = setInterval(decrementintervalfour, 1000);
                    number = 4;
                    }

            function decrementintervalfour() {
                    number--;

                    if (number === 0) {
                        fifthQuestionSet ();
                    }
                }

            function fourthQuestionRight () {
                    $("#question-section").html("<h3 class='intervaltext'> You Guessed Correct! </h3>");
                    $("#question-section").append("<img id='picturefour' src='assets/images/bad-wine.PNG' width= '500px'>");
                    $("#show-number").hide();
                    intervalfour();

            }

            function fourthQuestionIncorrect () {
                    $("#question-section").html("<h3 class='intervaltext'> You Guessed Wrong! </h3>");
                    $("#question-section").append("<h3 class='intervaltext'> Correct Answer: Fat </h3>");
                    $("#question-section").append("<img id='picturefour' src='assets/images/bad-wine.PNG' width= '500px'>");
                    $("#show-number").hide();
                    intervalfour();
            }

            function fourthQuestionTimesUp () {
                    $("#question-section").html("<h3 class='intervaltext'> Times Up! </h3>");
                    $("#question-section").append("<h3 class='intervaltext'> Correct Answer: Fat </h3>");
                    $("#question-section").append("<img id='picturefour' src='assets/images/bad-wine.PNG' width= '500px'>");
                    $("#show-number").hide();
                    intervalfour();
            }


function fifthQuestionSet () {

    $("#question-section").html("<h3 id='questionLine'> 'Frenching' is the process of... </h3>");
    $("#question-section").append("<button class='choices' id='choice-a'> adding cream </button>");
    $("#question-section").append("<button class='choices' id='choice-b'> wrapping in pastry </button>");
    $("#question-section").append("<button class='choices' id='choice-c'> baking at low heat </button>");
    $("#question-section").append("<button class='choices' id='choice-d'> cleaning bones of fat and meat </button>");
    $("#startButton").remove();
    runfive();

                                $("#choice-a").on("click", function () {
                                    incorrectanswers++;
                                    fifthQuestionIncorrect ();
                                    console.log("Incorrect:" + incorrectanswers);
                                    });
                                $("#choice-b").on("click", function () {
                                    incorrectanswers++;
                                    fifthQuestionIncorrect ();
                                    console.log("Incorrect:" + incorrectanswers);
                                    });
                                $("#choice-c").on("click", function () {
                                    incorrectanswers++;
                                    fifthQuestionIncorrect ();
                                    console.log("Incorrect:" + incorrectanswers);
                                    });
                                $("#choice-d").on("click", function () {
                                    correctanswers++;
                                    fifthQuestionRight ();
                                    console.log("Correct:" + correctanswers);
                                    });

};

            function intervalfive() {
                    clearInterval(intervalId);
                    intervalId = setInterval(decrementintervalfive, 1000);
                    number = 4;
                    }

            function decrementintervalfive() {
                    number--;

                    if (number === 0) {
                        resultsScreen ();
                    }
                }

            function fifthQuestionRight () {
                    $("#question-section").html("<h3 class='intervaltext'> You Guessed Correct! </h3>");
                    $("#question-section").append("<img id='picturefive' src='assets/images/boning-knife.jpg' width= '500px'>");
                    $("#show-number").hide();
                    intervalfive();

            }

            function fifthQuestionIncorrect () {
                    $("#question-section").html("<h3 class='intervaltext'> You Guessed Wrong! </h3>");
                    $("#question-section").append("<h3 class='intervaltext'> Correct Answer: cleaning bones of fat and meat </h3>");
                    $("#question-section").append("<img id='picturefive' src='assets/images/boning-knife.jpg' width= '500px'>");
                    $("#show-number").hide();
                    intervalfive();
            }

            function fifthQuestionTimesUp () {
                    $("#question-section").html("<h3 class='intervaltext'> Times Up! </h3>");
                    $("#question-section").append("<h3 class='intervaltext'> Correct Answer: cleaning bones of fat and meat </h3>");
                    $("#question-section").append("<img id='picturefive' src='assets/images/boning-knife.jpg' width= '500px'>");
                    $("#show-number").hide();
                    intervalfive();
            }


function resultsScreen () {
    $("#question-section").html("<h3 class='intervaltext' id='questionLine'> Here are your Results! </h3>");
    $("#question-section").append("<h2 class='intervaltext'> Correct Answers: " + correctanswers + "</h2>");
    $("#question-section").append("<h2 class='intervaltext'> Incorrect Answers: " + incorrectanswers + "</h2>");
    $("#question-section").append("<button class='button' id='restartgame'> Restart Game! </button>");



$("#restartgame").on("click", function restartgame () {

    $("#question-section").html("<h3 id='questionLine'> What country produces the most potatoes? </h3>");
    $("#question-section").append("<button class='choices' id='choice-a'> China </button>");
    $("#question-section").append("<button class='choices' id='choice-b'> United States </button>");
    $("#question-section").append("<button class='choices' id='choice-c'> Ireland </button>");
    $("#question-section").append("<button class='choices' id='choice-d'> Russia </button>");
    $("#startButton").remove();
    correctanswers = 0;
    incorrectanswers = 0;
    runone ();


                        $("#choice-a").on("click", function () {
                            firstQuestionRight ();
                            correctanswers++;
                            console.log("Correct:" + correctanswers);
                            });
                        $("#choice-b").on("click", function () {
                            firstQuestionIncorrect ();
                            incorrectanswers++;
                            console.log("Incorrect:" + incorrectanswers);
                            });
                        $("#choice-c").on("click", function () {
                            firstQuestionIncorrect ();
                            incorrectanswers++;
                            console.log("Incorrect:" + incorrectanswers);
                            });
                        $("#choice-d").on("click", function () {
                            firstQuestionIncorrect ();
                            incorrectanswers++;
                            console.log("Incorrect:" + incorrectanswers);
                            });

});

}

