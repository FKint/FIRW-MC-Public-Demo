define([], function () {
    console.log('Loading question option');
    var QuestionOption = function (text, correct) {
        this.text = text;
        this.correct = correct;
        this.possible_td = null;
        this.impossible_td = null;
    };
    QuestionOption.prototype.getText = function () {
        return this.text;
    };
    QuestionOption.prototype.getCorrect = function () {
        return this.correct;
    };
    QuestionOption.prototype.setImpossibleTD = function (impossible_td) {
        this.impossible_td = impossible_td;
    };
    QuestionOption.prototype.setPossibleTD = function (possible_td) {
        this.possible_td = possible_td;
    };
    QuestionOption.prototype.getImpossibleTD = function () {
        return this.impossible_td;
    };
    QuestionOption.prototype.getPossibleTD = function () {
        return this.possible_td;
    };
    QuestionOption.prototype.getIndicated = function () {
        return this.possible_td.data('selected');
    };
    QuestionOption.prototype.isFilled = function () {
        return this.possible_td.data('selected') || this.impossible_td.data('selected');
    };
    return QuestionOption;
});
