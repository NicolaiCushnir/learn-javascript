var source = 'Nicolai is a good friend';
var result = '';
function DC(l) {
    var consonants = 'bcdfghjklmnpqrstvwxyz';
    if (consonants.indexOf(l.toLowerCase()) != -1)
        return l + "o" + l;
    return l;
}
for (var _i = 0, source_1 = source; _i < source_1.length; _i++) {
    var l = source_1[_i];
    result += DC(l);
}
console.log(result);
