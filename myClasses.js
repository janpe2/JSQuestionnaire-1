class Question
{
    constructor(question, answer){
        this.question = question;
        this.answer = answer;
    }

    static getQuestion(obj){
        return obj.question;
    }

    static getAnswer(obj, index){
        return obj.answer[index];
    }

}