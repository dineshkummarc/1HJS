var ones = [
    ['M', 1000],
    ['C', 100],
    ['X', 10],
    ['I', 1]
];

var fives = ['D', 'L', 'V'];

var arabic2roman = function (arabic){
    var roman = '';
    ones.forEach(function(pair, i){
        var sym = pair[0], val = pair[1];
        var rest = arabic % val;
        var count = (arabic - rest) / val;
        if(count < 4){
            roman += Array(count + 1).join(sym);
        } else if(count == 4){
            roman += sym + fives[i - 1];
        } else if (count == 9){
            roman += sym + ones[i - 1][0];
        } else {
            roman += fives[i-1] + Array(count - 4).join(sym);
        }
        arabic = rest;
    });
    return roman;
};
