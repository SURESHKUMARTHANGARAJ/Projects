let letter = document.querySelector('#guess');
let question = document.querySelector('#question');
let remain = document.querySelector('#remain');
let msg = document.querySelector('#msg');
let container = document.querySelector('.game-box')
let Word;
var compare, number, bix;
var answer = [];
var fixed;
const datas = [
    {
        quest: 'What is the capital of France?',
        word: 'PARIS'
    },
    {
        quest: 'Which animal is known as the King of the Jungle?',
        word: 'LION'
    },
    {
        quest: 'What planet is known as the Red Planet?',
        word: 'MARS'
    },
    {
        quest: 'Which element has the chemical symbol O?',
        word: 'OXYGEN'
    },
    {
        quest: 'What is the chemical formula for water?',
        word: 'H2O'
    }, {
        quest: 'Which fruit is known for its high vitamin C content?',
        word: 'ORANGE'
    }, {
        quest: 'Multicolor Arch in Sky?',
        word: 'RAINBOW'
    }, {
        quest: 'Which one is required for Writing on a note?',
        word: 'PEN'
    }, {
        quest: 'The book is on the _______ ?',
        word: 'TABLE'
    }, {
        quest: 'I am sitting on the ______ ?',
        word: 'CHAIR'
    }, {
        quest: 'I am using Instagram on my __________ ?',
        word: 'MOBILE'
    }
];
var Moves = 5;
remain.innerText = Moves

Random();
var content = '';
for (var i = 0; i < Word.length; i++) {
    var data = `<div class="box box${i}"><p id="${Word[i]}">${Word[i]}</p></div>`;
    content = content + data;
}
container.innerHTML = content;

number = (Math.floor((Math.random()) * Word.length))
bix = document.getElementById(`${Word.charAt(number)}`);
bix.style.opacity = 1;
fixed = Word.charAt(number);

function Random() {
    answer = [];
    Moves = 5;
    remain.innerText = Moves;
    var num = (Math.floor((Math.random()) * datas.length))
    Word = datas[num].word;
    compare = Word.split('');
    content = '';
    for (var i = 0; i < Word.length; i++) {
        var data = `<div class="box box${i}"><p id="${Word[i]}">${Word[i]}</p></div>`;
        content = content + data;
        msg.innerText = "";
    }
    question.innerText = datas[num].quest;
    container.innerHTML = content;
    number = (Math.floor((Math.random()) * Word.length))
    bix = document.getElementById(`${Word.charAt(number)}`);
    bix.style.opacity = 1;
    answer.push(Word.charAt(number));
    fixed = Word.charAt(number);
}

function Guess(e) {
    e.preventDefault();
    var letter_value = (letter.value)[0];
    if (letter_value) {
        var check = answer.includes(letter_value);
        if (Word.includes(letter_value) && (letter_value != fixed) && !check) {
            var guessedWord = document.getElementById(`${letter_value}`);
            guessedWord.style.opacity = 1;
            answer.push(letter_value)
            msg.innerText = "You Gussed Correctly";
            msg.style.color = "green";
            letter.value = '';
            if (compare.sort().join('') === answer.sort().join('')) {
                msg.innerHTML = 'WOW!! You found the word';
                setTimeout(() => {
                    var input = confirm("You want to play again?");
                    if (input) {
                        Random();
                        letter.value = ''
                    }
                }, 2000);
            }
        } else {
            if (Moves > 1) {
                Moves--;
                remain.innerText = Moves;
            } else {
                Random();
            }
            msg.innerText = "You Gussed Wrongly";
            msg.style.color = "red";
            letter.value = '';
        }


    } else {
        msg.innerText = 'Enter Any Guess'
    }
}

Random();