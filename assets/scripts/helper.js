function combinations(tenses, accents, name) {
    var str = '';
    str += '<table>';
    for(var i=0; i<tenses.length; i++){
        str += '<tr>';
        for (var j=0; j<accents.length; j++) {
            var value = tenses[i] + ' ' + accents[j];
            str += '<td>';
            str += '<label><input type="radio" name="' + name + '" value="' + value + '">';
            str += value;
            str += '</label>';
            str += '</td>';
        }
        str += '</tr>';
    }
    str += '</table>';
    return str;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArray(min, max, count) {
    var arr = [];
    var randInt;
    while (arr.length < count) {
        randInt = getRandomInt (min, max);
        if (jQuery.inArray(randInt, arr) == -1) {
            arr.push(randInt);
        }
    }
    return arr;
}

function objectSize(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}
