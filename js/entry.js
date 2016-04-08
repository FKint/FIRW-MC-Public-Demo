define([], function () {
    var Entry = function (answers) {
        this.answers = answers;
    };
    Entry.prototype.getAnswers = function () {
        return this.answers;
    };

    return Entry;
});
