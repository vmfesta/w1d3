var myLetters = {};
var letters = []

function iterateLetters(phrase) {
    phrase = phrase.replace(/\s/g, '');
    for (var i = 0; i < phrase.length; i++) {
        if(!checkIfLetterExist(phrase[i])) {
            letters.push(phrase[i]);
            myLetters[phrase[i]] = [i];   
        } else {
            addLetterIndex(phrase[i], i);
        }
    }
    return myLetters
}

function checkIfLetterExist(letter) {
    for (var i = 0; i < letters.length; i++) {
        if(letters[i] === letter) {
            return true;
        }  
    }
    return false;
}

function addLetterIndex(letter, position) {
    myLetters[letter].push(position)
}

var result = iterateLetters("lighthouse in the house");

console.log(result);

