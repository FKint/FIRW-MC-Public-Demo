define(['sample_data'], function (Data) {
    for (var i = 0; i < Data.questions.length; ++i) {
        var tr = $('<tr>');
        var sub_table = $('<table>').addClass('question-answer-table');
        var q = Data.questions[i];
        var tr1 = $('<tr>')
            .append($('<th>').addClass('question-header').text('Vraag ' + (i + 1)));
        var tr2 = $('<tr>')
            .append($('<th>').text('Kan niet'));
        var tr3 = $('<tr>')
            .append($('<th>').text('Kan'));
        for (var j = 0; j < q.getOptions().length; ++j) {
            tr1.append($('<th>').addClass('option-header').text(String.fromCharCode(65 + j)));
            var impossible_td =
                $('<td>')
                    .addClass('option')
                    .data('question', i)
                    .data('option', j)
                    .data('value', false)
                    .data('selected', false)
                    .append($('<span>').text('-'));
            var possible_td = $('<td>')
                .addClass('option')
                .data('question', i)
                .data('option', j)
                .data('value', true)
                .data('selected', false)
                .data('other', impossible_td)
                .append($('<span>').text('+'));
            impossible_td.data('other', possible_td);
            q.getOptions()[j].setPossibleTD(possible_td);
            q.getOptions()[j].setImpossibleTD(impossible_td);
            tr2.append(impossible_td);
            tr3.append(possible_td);
        }
        var score_td = $('<td>');
        q.setScoreTD(score_td);
        tr1.append(score_td);
        sub_table.append(tr1);
        sub_table.append(tr2);
        sub_table.append(tr3);
        sub_table.append($('<tr>').css('height', 30));
        tr.append(sub_table);
        $('#answers-table').append(tr);
    }
    function setOptionValue(element, value) {
        element.data('selected', value);
        if (value) {
            element.css('background-color', 'grey');
        } else {
            element.css('background-color', 'white');
        }
    }

    $(document).ready(function () {
        $('#answers-table').on('click', 'td.option', function () {
            var old_value = $(this).data('selected');
            setOptionValue($(this), !old_value);
            setOptionValue($(this).data('other'), old_value);
        });
        $('#btnSubmitDemo').click(function () {
            for (var i = 0; i < Data.questions.length; ++i) {
                Data.questions[i].grade();
                continue;
            }
        });
    });
});
