$(function() {
    var rel = {
        'ua': {
            'Я ходжу на роботу': 'Present Simple',
            'Він ходить на роботу': 'Present Simple',
            'Я (є) тут': 'Present Simple',
            'Ми є тут': 'Present Simple',
            'Ми часто ходимо в кіно': 'Present Simple',
            'Зараз я пишу статтю': 'Present Continuous',
            'Він тільки що зробив свою роботу': 'Present Perfect',
            'Я завжди жив в цьому місті': 'Past Simple',
            'Вчора о 17.00 вона читала книгу': 'Past Continuous',
            'Я закінчив свою роботу до 14.00 вчора': 'Past Perfect',
            'Ми підемо до нього завтра': 'Future Simple',
            'Він буде працювати завтра з 14.00 до 17.00': 'Future Continuous',
            'Я переведу цей текст завтра до 18.00': 'Future Perfect',
            'Зазвичай я прокидаюся о 10 годині': 'Present Simple',
            'Вчора я прокинулася о 10 годині': 'Past Simple',
            'Завтра я прокинуся в 10:00': 'Future Simple',
            'У даний момент я працюю': 'Present Continuous',
            'Вчора я працювала з 9 до 11': 'Past Continuous',
            'Завтра в цей час я буду працювати': 'Future Continuous',
            'Я закінчую роботу до 10 години': 'Present Perfect',
            'Вчора я закінчила роботу до 10 години': 'Past Perfect',
            'Завтра я закінчу роботу до 10 години': 'Future Perfect',
            'Я живу в Нью-Йорку вже три роки': 'Present Perfect-Continuous',
            'У 2011 році я жив у Нью-Йорку вже три роки': 'Past Perfect-Continuous',
            'У 2013 я буду жити в Нью-Йорку вже 5 років': 'Future Perfect-Continuous',
            'Ми живемо тут протягом трьох років': 'Present Perfect-Continuous',
            'Ви живете тут протягом трьох років?': 'Present Perfect-Continuous',
            'Ми не живемо тут протягом трьох років': 'Present Perfect-Continuous',
            'Вони навчають дітей кожне літо': 'Present Simple',
            'Майк грає в баскетбол два рази на тиждень': 'Present Simple',
            'Коти їдять мишей': 'Present Simple',
            'Я зараз пишу цю статтю': 'Present Continuous',
            'О котрій годині він прийде завтра?': 'Present Continuous',
            'Я не хочу пити. Я тільки що випив склянку соку': 'Present Perfect',
            'Ми працюємо тут з 1989 року': 'Present Perfect-Continuous',
            'Ти довго мене чекаєш?': 'Present Perfect-Continuous',
            'Коли ти прийшов, я вже працював протягом години': 'Past Perfect-Continuous',
            'Він сказав, що чекає (чекав) мене двадцять хвилин': 'Past Perfect-Continuous',
            'У неділю буде два тижні, як я живу у вас': 'Future Perfect-Continuous'
        },
        'en': {
            'I go to the shop': 'Present Simple',
            'I am going to the shop': 'Present Continuous',
            'I have gone to the shop': 'Present Perfect',
            'I went to the shop': 'Past Simple',
            'I was going to the shop': 'Past Continuous',
            'I had gone to the shop by 18.00 o\'clock yesterday': 'Past Perfect',
            'I\'ll go to the shop': 'Future Simple',
            'I\'ll be going to the shop': 'Future Continuous',
            'I\'ll have gone to the shop by 18.00 o\'clock': 'Future Perfect',
            'We often go to the cinema': 'Present Simple',
            'I am writing an article': 'Present Continuous',
            'He has done his work just now': 'Present Perfect',
            'I always lived in this town': 'Past Simple',
            'Yesterday she was reading a book at 17.00 o\'clock': 'Past Continuous',
            'I had finished my work by 14.00 o\'clock yesterday': 'Past Perfect',
            'We will go to him tomorrow': 'Future Simple',
            'He will be working from 14.00 to 17.00 tomorrow': 'Future Continuous',
            'I\'ll have translated this text by 18.00 o\'clock tomorrow': 'Future Perfect',
            'Every day I go to school': 'Present Simple',
            'He always goes there as he works as a teacher': 'Present Simple',
            'Where do you usually go on holidays?': 'Present Simple',
            'Yesterday we went to the cinema': 'Past Simple',
            'When I was young I usually lived in France': 'Past Simple',
            'What time did he get up this morning?': 'Past Simple',
            'I\'ll visit my aunt tomorrow': 'Future Simple',
            'Will you read this book?': 'Future Simple',
            'He won\'t do this as he is too lazy.': 'Future Simple',
            'We are sitting at the moment': 'Present Continuous',
            'What are you doing under the table?': 'Present Continuous',
            'She isn\'t working at the moment': 'Present Continuous',
            'We were playing tennis when the rain started': 'Past Continuous',
            'He was doing test while I was reading a book': 'Past Continuous',
            'Will you be playing tennis when I come?': 'Future Continuous',
            'Tomorrow at six I\'ll be writing letters': 'Future Continuous',
            'I have never seen her before': 'Present Perfect',
            'We\'ve just had lunch': 'Present Perfect',
            'I didn\'t know who she was. I\'d never seen her before': 'Past Perfect',
            'Had he already gone when you arrived?': 'Past Perfect',
            'The film will already have started by the time we get to the cinema': 'Future Perfect',
            'Next year they will have been married for 25 years': 'Future Perfect',
            'My hands are dirty. I\'ve been repairing the car': 'Present Perfect-Continuous',
            'What have you been doing since we last met?': 'Present Perfect-Continuous',
            'The ground was wet. It had been raining before': 'Past Perfect-Continuous',
            'Tomorrow I\'ll be tired as I\'ll have been working hard this evening': 'Future Perfect-Continuous'
        }
    }

    var tenses = ['Present', 'Past', 'Future'];
    var accents = ['Simple', 'Continuous', 'Perfect', 'Perfect-Continuous'];

    var states = {
        'blank-field': 'not specified',
        'failure': 'wrong answer',
        'success': 'correct answer'
    };

    var $checkButton = $('#check');
    var $createButton = $('#create');

    $checkButton.on('click', function() {
        var $testWrap = $('#test-wrapper');
        var $buttonWrap = $('#button-wrapper');

        var blankFields = [];
        var correctAnswers = [];
        var correctFullAnswers = [];
        var wrongAnswers = [];
        var testResult = '';

        $("li", $testWrap).each(function(index) {
            var $this = $(this);
            var $radio = $('input[type="radio"]:checked', $this);
            var correctAnswerStr = $('.sentence', $this).attr("date-value");
            if (!$radio.length) {
                blankFields.push(index + 1);
                $this.addClass('blank-field');
            } else {
                if ( $radio.val() == correctAnswerStr) {
                    correctAnswers.push(index + 1);
                    $this.addClass('success');
                } else {
                    wrongAnswers.push(index + 1);
                    correctFullAnswers.push(correctAnswerStr);
                    $this.addClass('failure');
                }
            }
        });

        if (blankFields.length) {
            testResult += 'Answers were not selected for the following questions: ' + blankFields.join(', ');
        } else {
            if (wrongAnswers.length) {
                testResult += '<div class="resulting-value">' + correctAnswers.length + ' of ' + (correctAnswers.length + wrongAnswers.length ) + '</div>';
                testResult += 'Incorrect answers to some questions. Correct answers to these questions:';
                testResult += '<ul>';
                for (var j=0; j<correctFullAnswers.length; j++) {
                    testResult += '<li>' + wrongAnswers[j] + ' &mdash; ' + correctFullAnswers[j] + '</li>';
                }
                testResult += '</ul>';
            } else {
                testResult += 'Well done! Everything is correct :)';
            }
        }

        testResult = '<div>' + testResult + '</div>';

        testResult += '<table>';
        for (var index in states) {
            testResult += '<tr>';
            testResult += '<td class="result-cell result-cell-' + index + '">&nbsp;</td><td>' + states[index] + '</td>';
            testResult += '</tr>';
        }
        testResult += '</table>';

        $('#result', $buttonWrap).empty().append(testResult);

    });

    $createButton.on('click', function() {
        var str = '';
        var sentenceIndex = 0;
        var $testWrap = $('#test-wrapper');
        var lang = $('input[type="radio"]:checked').val();
        var currRel = rel[lang];
        var randomArray = getRandomArray (1, objectSize (currRel), 5);

        str = '<ol>';
        for (var index in currRel) {
            sentenceIndex++;
            if (jQuery.inArray(sentenceIndex, randomArray) != -1){
                str += '<li>';
                str += '<div class="sentence" date-value="' + currRel[index] + '">' + index + '</div>';
                str += '<div class="answer">' + combinations(tenses, accents, 'answer' + sentenceIndex) + '</div>';
                str += '</li>';
            }
        }
        str += '</ol>';

        $checkButton.removeClass('hidden');
        $testWrap.empty().append(str);
        $('#result').empty();
    });

    $createButton.click();

    $('[name="lang"]').on('click', function() {
        $createButton.click();
    });
});
