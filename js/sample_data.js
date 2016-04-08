define(['question', 'option'], function (Question, QuestionOption) {
    console.log('Defining Data');
    return {
        questions: [
            new Question("4+5=?", [
                new QuestionOption('7', false),
                new QuestionOption('8', false),
                new QuestionOption('9', true),
                new QuestionOption('10', false)
            ]),
            new Question("How many days does a week count?", [
                new QuestionOption('4', false),
                new QuestionOption('5', false),
                new QuestionOption('6', false),
                new QuestionOption('7', true)
            ]),
            new Question("Which city is the capital of France?", [
                new QuestionOption('Paris', true),
                new QuestionOption('Brussels', false),
                new QuestionOption('New York', false),
                new QuestionOption('London', false),
                new QuestionOption('Stockholm', false)
            ])
        ]
    };
});
