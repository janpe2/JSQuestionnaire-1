var questions = []

var questionline;
var answerBlock;
var endBlock;

var currentQuestionID =0;
var answerIndexes = new Array();


function onStart(){
    var q1 = new Question("Paljonko kello?", ["Aika paljon","Todella paljon", "Aaaah!"]);
    var q2 = new Question("Voiko kalaa syödä?", ["Kyllä voi", "Ei voi", "Ehkä, mutta maku on paha", "Juuri ja juuri"]);
    questions.push(q1,q2);


    questionline =  document.getElementById("questionline")
    answerBlock =  document.getElementById("answerBlock")
    endBlock = document.getElementById("endBlock")
    document.getElementById("questionsBlock").hidden = true;
    document.getElementById("endSummary").hidden = true;
}

function AskNextQuestion(){
    if(currentQuestionID < questions.length){
        let question = questions[currentQuestionID];
        showQuestion(question)
    }
    else{
        ShowEndSummary();
    }
}

function ShowEndSummary(){
    document.getElementById("startBlock").hidden = true;
    document.getElementById("questionsBlock").hidden = true;
    document.getElementById("endSummary").hidden = false;
   
    let answerIndexcounter = 0;
    let html = "<table>";

    questions.forEach(element => {
        html += 
            "<tr class='answerTableRow'><td>" +
            Question.getQuestion(element) +
            "<br>Vastasit: " + 
            Question.getAnswer(element, answerIndexes[answerIndexcounter]) +
            "</td></tr>";
        answerIndexcounter++;
    });

    endBlock.innerHTML = html + "</table>";
}

function startQuestionnaire(){
    currentQuestionID = 0;
    answerIndexes = new Array();
    endBlock.innerHTML = "";
    document.getElementById("startBlock").hidden = true;
    document.getElementById("questionsBlock").hidden = false;
    document.getElementById("endSummary").hidden = true;
    AskNextQuestion();

}

function showQuestion(question){
    
    questionline.innerHTML = question.question;
    ShowAnswerOptions(question.answer);
}

function ShowAnswerOptions(answers){
    //note indexOf does not work, if this is not an array
    var answerArray = Array.from(answers);
    var html = "<table>";
    
    answerArray.forEach(element => {
        html += "<tr class='answerTableRow'><td>" +
            "<button class='btn btn-primary' onclick=AnswerButtonClicked(" + answerArray.indexOf(element) + 
            ")> Valitse</button>" + element + "</td></tr>";
        //note no need for " " in onclick
    });

    html += "</table>";
    answerBlock.innerHTML = html;
}

function CreateAnswerElement(answer){
    //luodaan elementti joka lisätään kyssäreihin.
}

function AnswerButtonClicked(index){
    ClearScreen();
    //console.log("Button test:"+index);
    answerIndexes.push(index);
    currentQuestionID += 1;
    AskNextQuestion();
}

function ClearScreen(){
    questionline.innerHTML = "";
    answerBlock.innerHTML = "";
}