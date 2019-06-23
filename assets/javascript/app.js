var trivia = {
    questions: [{
        title: "What is Spider-Man's true identity?",
        answers: [{
            option: "Tom Holland"
        }, {
            option: "Andrew Garfield"
        }, {
            option: "Peter Parker",
        }, {
            option: "Tobey Maguire"
        }]
    }, {
        title: "In the comics, in what arc did Spider-Man reveal his identity to the world?",
        answers: [{
            option: "Civil War"
        }, {
            option: "Secret Invasion"
        }, {
            option: "House of M",
        }, {
            option: "My name is Spider-Man"
        }]
    }, {
        title: "In the comics, who was Peter's first girlfriend?",
        answers: [{
            option: "Mary Jane Watson"
        }, {
            option: "Betty Brant"
        }, {
            option: "Carlie Cooper",
        }, {
            option: "Gwen Stacey"
        }]
    }, {
        title: "In the Superior Spider-Man, which super-villain took over Spider-Man's mind?",
        answers: [{
            option: "Doc Oc"
        }, {
            option: "Electro"
        }, {
            option: "Green Goblin",
        }, {
            option: "Rhino"
        }]
    }]
}

var questions = ["What is Spider-Man's true identity?",
    "In the comics, in what arc did Spider-Man reveal his identity to the world?",
    "In the comics, who was Peter's first girlfriend?",
    "In the Superior Spider-Man, which super-villain took over Spider-Man's mind?"];

var answers = [["Tom Holland", "Andrew Garfield", "Peter Parker", "Tobey Maguire"],
["Civil War", "Secret Invasion", "House of M", "My name is Spider-Man"],
["Mary Jane Watson", "Betty Brant", "Carlie Cooper", "Gwen Stacey"],
["Doc Oc", "Electro", "Green Goblin", "Rhino"]
];//answers: 2Peter Parker, 0Civil War, 1Betty Brant, 0Doc Oc

var currentQuestion = 0;
var answerKey = [2, 0, 1, 0];
var currentAnswer = answerKey[currentQuestion];
var guessesCorrect = 0;
var seconds = 30;
var picCorrect = ["./assets/images/spider-man-pics/goodjob.jpg", "./assets/images/spider-man-pics/neat.gif", "./assets/images/spider-man-pics/youagenius.jpeg", "./assets/images/spider-man-pics/teachin.png"];
var picIncorrect = ["./assets/images/spider-man-pics/you.gif", "./assets/images/spider-man-pics/prancing.png", "./assets/images/spider-man-pics/umad.png", "./assets/images/spider-man-pics/dabois.jpg"];
console.log(answers[1][2]);

$(document).ready(function () {
    $("#start").click(function () {
        $("#start").hide();
        $("#main").show();

    })
});


$("#start").click(function () {
    //intervalId = setInterval(count, 1000);
    newQuestion();
})

var timeOutInterval;

function newQuestion() {
    //timeOutInterval = setTimeout(newQuestion, 35000);
    console.log(currentQuestion);
    if (currentQuestion == 4) {
        $("#main").hide();
        resultScreen();
    }
    else {
        intervalId = setInterval(count, 1000);
        seconds = 30;
        $("#currentQuestion").show();
        $("#results").hide();
        $("#correctAnswer").hide();
        $("#question").html(questions[currentQuestion]);
        for (var i = 0; i < 4; i++) {
            $("#a" + i).text(answers[currentQuestion][i]);
        }
    }

}



//$(document).ready(function () {
$("#answerList").on('click', 'button', function (e) {
    console.log("It worked");
    //clearInterval(timeOutInterval);
    var idClicked = e.target.id;
    console.log(idClicked);
    //if user guess correctly
    if (idClicked === "a" + answerKey[currentQuestion]) {
        //alert("YES!");
        //newQuestion();
        resultCorrect();
        //clearInterval(intervalId);
        guessesCorrect++;
        // console.log(guessesCorrect);

    }
    //if user guess incorrectly
    if (idClicked !== "a" + answerKey[currentQuestion]) {

        resultIncorrect();
        //clearInterval(intervalId);
    }

    currentQuestion++;
    console.log(currentQuestion);
    // newQuestion();

});


//});
var intervalId;

function resultTimeOut(e) {
    if (e == 0) {
        //resultTimeOut();
        clearInterval(intervalId);
        //seconds = 30;
        $("#results").show();
        $("#currentQuestion").hide();
        $("#correctAnswer").show();
        $("#status").html("Out of Time!");
        $("#correctAnswer").html("The Correct Answer was: " + answers[currentQuestion][answerKey[currentQuestion]]);
        $("#meme").html("<img src=" + picIncorrect[currentQuestion] + " width='400px'>");
        currentQuestion++;
        setTimeout(newQuestion, 5000);

    }

}

function count() {
    seconds--;
    // $("#display").html(currentTime);
    $("#timeRemaining").html(seconds);
    // if (seconds == 0) {
    //     clearInterval(intervalId);
    //     seconds = 30;
    // }
    resultTimeOut(seconds);

    //seconds--;
}

function resultScreen() {
    $("#endScreen").show();
    if(guessesCorrect>2){
        $("#final").html("You got " + guessesCorrect + " out of " + questions.length + " questions correct!" + "<br>" + "Good job!");
        $("#final-pic").html("<img src='./assets/images/spider-man-pics/impressed.png' width='400px'>");
    }
    else{
        $("#final").html("You got " + guessesCorrect + " out of " + questions.length + " questions correct!" + "<br>" + "Better luck next time!");
        $("#final-pic").html("<img src='./assets/images/spider-man-pics/arachnids.png' width='400px'>");

    }
}


function resultCorrect() {

    clearInterval(intervalId);
    $("#results").show();
    $("#currentQuestion").hide();
    $("#status").html("CORRECT!");
    $("#meme").html("<img src=" + picCorrect[0] + " width='400px'>");
    displayImage();
    //currentQuestion++;
    setTimeout(newQuestion, 5000);

}

function resultIncorrect() {
    

    clearInterval(intervalId);
    $("#results").show();
    $("#currentQuestion").hide();
    $("#correctAnswer").show();
    $("#status").html("INCORRECT");
    $("#correctAnswer").html("The Correct Answer was: " + answers[currentQuestion][answerKey[currentQuestion]]);
   // currentQuestion++;
    $("#meme").html("<img src=" + picIncorrect[currentQuestion] + " width='400px'>");
    setTimeout(newQuestion, 5000);


}

function displayImage() {
   // $("#image-holder").html("<img src=" + images[count] + " width='400px'>");
    $("#meme").html("<img src=" + picCorrect[currentQuestion] + " width='400px'>");
   // $("#meme").html("<img src='./assets/images/spider-man-pics/goodjob.jpg' width='400px'>");
  }

function reset(){
    currentQuestion = 0;
    guessesCorrect = 0;
    $("#main").show();
    $("#endScreen").hide();
    newQuestion();
}

$("#reset").click(function () {
    reset();
})

// function resultTimeOut(e){
//     if (e === 0) {
//         //resultTimeOut();
//         clearInterval(intervalId);
//         //seconds = 30;

//     $("#results").show();
//     $("#correctAnswer").show();
//     $("#status").html("Out of Time!");
//     $("#correctAnswer").html("The Correct Answer was: " + answers[currentQuestion][currentAnswer]);
//     setTimeout(newQuestion, 5000);
//     }
// }
$("#main").hide();
$("#endScreen").hide();