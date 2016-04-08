define([], function () {
    console.log('Loading question')
    var Question = function (question, options) {
        this.options = options;
        this.question = question;
        this.score_td = null;
    };
    Question.prototype.getOptions = function () {
        return this.options;
    };
    Question.prototype.getQuestion = function () {
        return this.question;
    };
    Question.prototype.getScore = function (answer) {
        console.log(answer);
        var correct_possible = false;
        var nb_possible = 0;
        var nb_impossible = 0;
        var options = this.getOptions();
        for (var i = 0; i < options.length; ++i) {
            var o = options[i];
            if (answer[i]) {
                nb_possible += 1;
            } else {
                nb_impossible += 1;
            }
            if (o.correct) {
                if (answer[i]) {
                    correct_possible = true;
                }
            }
        }
        var nb_alternatives = options.length;
        if (correct_possible) {
            return Fraction(nb_alternatives - nb_possible, nb_possible * (nb_alternatives - 1));
        } else {
            return Fraction(-1, nb_alternatives - 1);
        }
    };
    Question.prototype.grade = function () {
        var answer = [];
        for (var o in this.getOptions()) {
            var option = this.getOptions()[o];
            if (!option.isFilled()) {
                return null;
            }
            answer.push(option.getIndicated());
        }
        var score = this.getScore(answer);
        this.getScoreTD().text(score.toString());
    };
    Question.prototype.setScoreTD = function (score_td) {
        this.score_td = score_td;
    };
    Question.prototype.getScoreTD = function (score_td) {
        return this.score_td;
    };
    return Question;
});
