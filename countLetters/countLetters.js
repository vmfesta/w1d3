var myLetters = {};

var letters = [];

function countLetters(phrase) {
    phrase = phrase.replace(/\s/g, '');
    for (var i = 0; i < phrase.length; i++) {
        if(!checkIfLetterExist(phrase[i])) {
            letters.push(phrase[i]);
            myLetters[phrase[i]] = 1;   
        }
    }
    return myLetters
}

function checkIfLetterExist(letter) {
    for (var i = 0; i < letters.length; i++) {
        if(letters[i] === letter) {
            countrepeatedLetters(letter);
            return true;
        }  
    }
    return false;
}

function countrepeatedLetters(letter) {
    myLetters[letter] = myLetters[letter] + 1;
}

var result = countLetters("lighthouse in the house");

console.log(result);

