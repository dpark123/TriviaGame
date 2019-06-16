var trivia = {
    questions: [{
        title: "What is Spider-Man's true identity?",
        answers: [{
            option: "Tom Holland"
            },{
            option: "Andrew Garfield"
            }, {
            option: "Peter Parker",
            }, {
            option: "Tobey Maguire"}]
        }, {
        title: "In the comics, in what arc did Spider-Man reveal his identity to the world?",
        answers: [{
            option: "Civil War"
            },{
            option: "Secret Invasion"
            }, {
            option: "House of M",
            }, {
            option: "My name is Spider-Man"}]
        }, {
        title: "In the comics, who was Peter's first girlfriend?",
        answers: [{
            option: "Mary Jane Watson"
            },{
            option: "Betty Brant"
            }, {
            option: "Carlie Cooper",
            }, {
            option: "Gwen Stacey"}]
        }, {
        title: "In the Superior Spider-Man, which super-villain took over Spider-Man's mind?",
        answers: [{
            option: "Doc Oc"
            },{
            option: "Electro"
            }, {
            option: "Green Goblin",
            }, {
            option: "Rhino"}]
    }]
}

$("#start").click(function(){
    //alert("yeah");
    $("#questionBody").html('');
    questions();
})

var qNext = 0;
var correctAns = 0;
function questions (){
    var timeR = $("<p></p>").text("Time Remaing: ");
    var q = $("<p></p>").text(trivia.questions[qNext].title);
    $("#questionBody").append(timeR, q);
    for(var i = 0; i<4; i++){
        var ans = $("<p></p>").text(trivia.questions[qNext].answers[i].option);
        $("#questionBody").append(ans);
    }
    qNext++;
    if(qNext==5){
    endGame();
    }
}

var timerSet = setTimeout(timeUp, 30000);

function timeUp(){
    $("#questionBody").html("time is up");
}

function endGame(){
    $("#questionBody").html(correctAns);
}

console.log(trivia.questions[0].answers[0].option);
console.log(trivia.questions[1].answers[1].option);
console.log(trivia.questions[2].answers[2].option);
console.log(trivia.questions[3].answers[3].option);
