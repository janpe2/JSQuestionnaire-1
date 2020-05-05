var questions = []

var questionBlock;
var answerBlock;
var endBlock;

var currentQuestionID =0;
var answerIndexes = new Array();
function onStart(){
var q1 = new Question("Paljonko kello?", ["aika paljon","Todella paljon", "aaaah!"]);
var q2 = new Question("Voiko kalaa syödä?", ["kyllä voi","ei voi"]);
questions.push(q1);
questions.push(q2);

questionBlock =  document.getElementById("questionBlock")
answerBlock =  document.getElementById("answerBlock")
endBlock = document.getElementById("endBlock")
}

function AskNextQuestion(){
    if(currentQuestionID < questions.length){
        let question = questions[currentQuestionID];
        showQuestion(question)
    }
    else{
        document.getElementById("startButton").hidden = false;
        let answerIndexcounter = 0
        questions.forEach(element => {
            endBlock.innerHTML += Question.getQuestion(element)
            +" <P>vastasit: "+Question.getAnswer(element, answerIndexes[answerIndexcounter]) 
            answerIndexcounter ++;
        });
    }
}

function startQuestionnaire(){
    currentQuestionID = 0;
    answerIndexes = new Array();
    endBlock.innerHTML = "";
    document.getElementById("startButton").hidden = true;
    AskNextQuestion();

}

function showQuestion(question){
    
    questionBlock.innerHTML = question.question;
    ShowAnswerOptions(question.answer);
}

function ShowAnswerOptions(answers){
    //note indexOf does not work, if this is not an array
    var answerArray = Array.from(answers);
    
    answerArray.forEach(element => {
        answerBlock.innerHTML += "<p>"+
        element+" <button onclick=AnswerButtonClicked("+answerArray.indexOf(element)+")> valitse</button>"
        //note no need for " " in onclick
    });
}

function AnswerButtonClicked(index){
    ClearScreen();
    console.log("Button test:"+index);
    answerIndexes.push(index);
    currentQuestionID += 1;
    AskNextQuestion();
}

function ClearScreen(){
    questionBlock.innerHTML = "";
    answerBlock.innerHTML = "";
}