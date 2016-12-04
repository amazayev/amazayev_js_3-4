
// СОЗДАНИЕ ЄЛЕМЕНТОВ
var wrapper = document.createElement('form');
wrapper.classList.add('wrapper');
wrapper.action = '';

//
var header = document.createElement('header');
header.innerHTML = 'Тест по программированию';

var footer = document.createElement('footer');

//
var firstQuestion = document.createElement('p');
firstQuestion.classList.add('firstQuestion');
firstQuestion.innerHTML = '1. Вопрос №1'

var secondQuestion = document.createElement('p');
secondQuestion.classList.add('secondQuestion');
secondQuestion.innerHTML = '2. Вопрос №2'

var thirdQuestion = document.createElement('p');
thirdQuestion.classList.add('thirdQuestion');
thirdQuestion.innerHTML = '3. Вопрос №3'

//
var question1 = document.createElement('ul');
question1.classList.add('ul1');

var question2 = document.createElement('ul');
question2.classList.add('ul2');

var question3 = document.createElement('ul');
question3.classList.add('ul3');

//
var input1 = document.createElement('input');
input1.type = 'checkbox';

var input2 = document.createElement('input');
input2.type = 'checkbox';

var input3 = document.createElement('input');
input3.type = 'checkbox';

//
var input1Text = document.createElement('li');
input1Text.innerHTML = 'Вариант ответа №1';
var input2Text = document.createElement('li');
input2Text.innerHTML = 'Вариант ответа №2';
var input3Text = document.createElement('li');
input3Text.innerHTML = 'Вариант ответа №3';

var input4Text = document.createElement('li');
input4Text.innerHTML = 'Вариант ответа №1';
var input5Text = document.createElement('li');
input5Text.innerHTML = 'Вариант ответа №2';
var input6Text = document.createElement('li');
input6Text.innerHTML = 'Вариант ответа №3';

var input7Text = document.createElement('li');
input7Text.innerHTML = 'Вариант ответа №1';
var input8Text = document.createElement('li');
input8Text.innerHTML = 'Вариант ответа №2';
var input9Text = document.createElement('li');
input9Text.innerHTML = 'Вариант ответа №3';

//
var checkButton = document.createElement('button');
checkButton.classList.add('checkButton');
checkButton.innerHTML = 'Проверить мои результаты';
checkButton.type = 'submit';


//ВСТАВКА ЭЛЕМЕНТОВ
var insertWrapper = document.querySelector('body');
insertWrapper.appendChild(wrapper);

//
var insertHeader = document.body.querySelector('.wrapper');
insertHeader.appendChild(header);

//
var firstQuestion1 = document.body.querySelector('.wrapper');
firstQuestion1.appendChild(firstQuestion);
var insertQuestion1 = document.body.querySelector('.wrapper');
insertQuestion1.appendChild(question1);

var secondQuestion1 = document.body.querySelector('.wrapper');
secondQuestion1.appendChild(secondQuestion);
var insertQuestion2 = document.body.querySelector('.wrapper');
insertQuestion2.appendChild(question2);

var thirdQuestion1 = document.body.querySelector('.wrapper');
thirdQuestion1.appendChild(thirdQuestion);
var insertQuestion3 = document.body.querySelector('.wrapper');
insertQuestion3.appendChild(question3);

        var insertAnswerText1 = document.body.querySelector('.ul1');
        insertAnswerText1.insertBefore(input1Text, question1.children[0]);
        var insertAnswerText2 = document.body.querySelector('.ul1');
        insertAnswerText2.insertBefore(input2Text, question1.children[1]);
        var insertAnswerText3 = document.body.querySelector('.ul1');
        insertAnswerText3.insertBefore(input3Text, question1.children[2]);

        var insertAnswerText4 = document.body.querySelector('.ul2');
        insertAnswerText4.insertBefore(input4Text, question2.children[0]);
        var insertAnswerText5 = document.body.querySelector('.ul2');
        insertAnswerText5.insertBefore(input5Text, question2.children[1]);
        var insertAnswerText6 = document.body.querySelector('.ul2');
        insertAnswerText6.insertBefore(input6Text, question2.children[2]);

        var insertAnswerText7 = document.body.querySelector('.ul3');
        insertAnswerText7.insertBefore(input7Text, question3.children[0]);
        var insertAnswerText8 = document.body.querySelector('.ul3');
        insertAnswerText8.insertBefore(input8Text, question3.children[1]);
        var insertAnswerText9 = document.body.querySelector('.ul3');
        insertAnswerText9.insertBefore(input9Text, question3.children[2]);

var insertFooter = document.body.querySelector('.wrapper');
insertFooter.appendChild(footer);

var insertButton = document.body.querySelector('footer');
insertButton.appendChild(checkButton);

console.log(document.body); // вставил технически, чтобы видеть структуру
