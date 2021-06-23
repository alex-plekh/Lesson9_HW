//Условные и логические операторы
//1)В переменную x записывается число, введенное пользователем в диалоговое окно. Проверить и вывести на экран, x – отрицательное число, положительное или ноль.

let x = +prompt('Please enter number');
if (x === 0){
    alert('Your number is zero')
}else if (x < 0){
    alert('Your number is negative')
} else if (x > 0){
    alert('Your number is positive')
}else{
    alert('Your enter not a number')
}


//2)У вас и у вашего друга в кармане столько денег, сколько было указано в окнах prompt. В зависимости от общей суммы ваших сбережений вы можете полететь на Майорку или выпить пива. С помощью условного оператора определите ваши возможности и отобразите на экране в alert.

let yourMoney = +prompt('Please indicate how much money you have ($)');
console.log(yourMoney)
const majorca = 2000;
const beer = 100;
if (yourMoney >= majorca){
    alert('You are flying to Mallorca!');
} else if (yourMoney >= beer) {
    alert('What is your beer?');
} else if(isNaN(yourMoney)){
    alert("You enter not a number!");
} else {
    alert('Go to sleep!');
}


//3)В переменную age запишите возраст человека. Если значение больше или равно 20 и меньше 27, в alert выводится “Выслать повестку”.

let age = +prompt('Please indicate your age!');
if ((age >= 20) && (age < 27)){
    alert('Send a subpoena!');
} else if (age >=27 && age<=130){
    alert('You can not hide!');
} else if(isNaN(age)){
    alert('You enter not a number!');
} else{
    alert('What is going?');
}


//4)чтобы добраться домой, вас устраивают маршрутки номер 7, 225 и 255. Какая маршрутка приехала – определяется в prompt. Если ваша, то вы едете домой, в противном случае – ожидаете.

let a = +prompt('Enter the minibus number!');//вводим номер маршрутки которая приехала
if ((a === 7) || (a === 225) || (a === 255)){
    alert('You are going home!');
} else if(isNaN(a)){
    alert('You enter not a number!');
} else{
    alert('Waiting please!');
}


//5)В переменную day записан текущий день недели. Если это не суббота и не воскресенье, выведите в alert сообщение о необходимости идти на работу.

let day = new Date().getDay();
const saturday =6;
const sunday = 0;
if ((day !== saturday ) && (day !== sunday)){
    alert('And who is it for work today?');
} else{
    alert('you can still sleep!');
}


//6)Запросите из prompt переменные x и y значения от -20 до 20. Если переменная x равна или меньше 1, а переменная y больше или равна 3 или меньше 0, то выведите сумму этих переменных, иначе выведите 'Неверно!'.

let x = +prompt('Enter a value from -20 to 20');
let y = +prompt('Enter a value from -20 to 20');
if(x>20 || y>20 || x<-20 || y<-20){
    alert('You enter incorrect parameter. It should be between -20 and 20');
} else if (x <= 1  && (y >= 3) || (y < 0)){
    alert(x + y);
} else {
    alert('Incorrect');
}


//7)Если переменная x больше 2 и меньше 11, или переменная y больше или равна 6 и меньше 14, то увеличьте x на 2, иначе прибавьте к x число 5. Выведите новое значение переменной на экран.

let x = +prompt('Enter the number!');
let y = +prompt('Enter the number!');
if(isNaN(x) || isNaN(y)){
    alert('You enter incorrect parameter.Please enter number!');
} else if ((x > 2 && x < 11) || (y >= 6 && y < 14)){
    x = x + 2;
} else {
   x = x + 5;
}
alert(x);//новое значение переменной x


//8)Получите из prompt значение для имени пользователя. Выведите на экран приветствие. Учтите вариант, что пользователь может не ввести ничего или нажать на Отмена.

let userName = prompt('Enter your Name');
if (userName === ''){
    alert('The string cannot be empty!');
} else if (userName === null){
    alert('You clicked "cancel"');
} else{
    alert(`Hello,  ${userName}`);
}


//9)Создайте две переменные: greeting и lang. Переменная greeting – пустая строка. Переменная lang может принимать три значения: 'ru', 'en', 'de' (например, из prompt). Если она имеет значение 'ru', то в переменную greeting запишите приветствие на русском языке, если имеет значение 'en' – то на английском, если 'de' – на немецком. Выведите на экран приветствие в зависимости от значения переменной lang. Решите задачу через if-else и через switch-case.

//1-variant (switch-case);

let greeting = '';
let lang = prompt('Please enter one of the languages: ru, en, de!');
switch (lang){
    case 'ru':
        greeting="Привет";
        alert(greeting);
        break;

    case 'en':
        greeting='Hello';
        alert(greeting);
        break;

    case 'de':
        greeting='Hallo';
        alert(greeting);
        break;

    case '':
        alert('You have not entered anything!');
        break;
    case null:
        alert('You enter cancel! Try again');
        break;
    default:
        alert('I am sorry. I don\'t know this language');
}

//2-variant (if-else);

let greeting = '';
let lang = prompt('Please enter one of the languages: ru, en, de!');
if (greeting === 'ru'){
    alert('Привет');
} else if (greeting === 'en'){
    alert('Hello');
} else if (greeting === 'de'){
    alert('Hallo');
} else if (greeting === ''){
    alert('You have not entered anything!');
} else{
    alert('it is a different language!');
}


//10)В переменной month хранится текущий месяц (new Date()). Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

let date = new Date();
let month = date.getMonth();
const winter = 'Winter';
const spring = 'spring';
const summer = 'summer';
const autumn = 'autumn';
if (month === 11 || month === 0 || month === 1){
    console.log(winter);
} else if (month >= 2 && month <= 4){
    console.log(spring);
} else if (month >= 5 && month <= 7){
    console.log(summer);
} else if (month >= 8 && month <= 10){
    console.log(autumn);
}


//11)Переменная lang может принимать два значения: 'ru' и 'en'. Переменная day принимает значение от 0 до 6-ти. Если lang имеет значение 'ru', то в переменную result запишите название дня недели на русском языке в соответствии со значением переменной day (0 – воскресенье, 1 – понедельник, 2 – вторник и т.д.). Если же lang имеет значение 'en' – то аналогично, но день недели будет на английском.

const days_ru = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
const days_en = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let lang = prompt('Please enter one of the languages: ru, en!');
let day = +prompt('Enter a value from 0 to 6');
let result;
if(day < 0 || day > 6){
    alert('You enter incorrect value.Please Enter a value from 0 to 6');
} else if(lang === 'ru'){
  result =  days_ru[day];
} else if(lang === 'en'){('Пока');
    result = days_en[day];
} else{
    alert('I don\'t know this language!');
}
alert(result);


//12)    12 1. Получить от пользователя имя и возраст. Записать это в разные переменные.
// 2. Написать конструкцию switch, которая проверяет 2 случая
//     	    - Если имя === "John" и возраст === 29 вывести в консоль "Привет (имя) (возраст)"
//     	    - Если имя === "Kate" и возраст === 15 вывести в консоль "Привет (имя) (возраст)"
// - Если не совпадает ни одно условие вывести в консоль "Пока"
// (Написать решение задачи еще и через оператор ?)

//1-variant (if-else);

let userName = prompt('Name');
let userAge = +prompt('Age');

if ((userName === 'John' && userAge === 29) || (userName === 'Kate' && userAge === 15)){
    console.log(`Привет ${userName} ${userAge}`);
} else{
    console.log('Пока');
}


//2-variant (?);

((userName === 'John' && userAge === 29) || (userName === 'Kate' && userAge === 15)) ? alert(`Привет ${userName} ${userAge}`) : alert('Пока');


// Циклы

//1)Сформируйте строку вида ".#.#.#.#.#." с помощью цикла for.

let str = '';
for (let i = 0; i < 5; i++) {
    str = str + '.#';
}
console.log(`${str}.`);


//2)Напишите цикл с шагом 1, в теле которого распечатываются квадраты каждого четного значения счетчика.

let output = '';
for (let i = 1; i < 10; i++) {
    if(i%2===0){
        output += ' ' + i * i;
    }
}
console.log(output);


// 3)Используя любой цикл, напишите программу, которая в консоли выводит текстовое поздравление. Программа поздравляет того, чье имя определяется в переменной username:Happy birthday to you
// Happy birthday to you
// Happy birthday dear {{username}}
// Happy birthday to you

let userName = prompt('Enter your name');
const str1 = 'Happy birthday to you';
const str2 = `Happy birthday dear ${userName}`;
for(let i = 0; i < 4; i++){
    if(i === 2){
        alert(str2);
        continue;
    }
    alert(str1);
}


//4)Напишите цикл с confirm, который продолжается при нажатии на Отмена и прерывается при нажатии на Ok.

let que;
while (!que){
    que = confirm('click on 'cancel' or 'ok'!');
    console.log(que);
}


//5)В окно prompt вводится число. Напишите цикл, в котором суммируются все нечетные числа до диапазона, введенного пользователем. Результат отобразите в окне alert.

let b = +prompt('диапазон');
let sum=0;
for (let i = 1; i < b; i+=2) {
    sum+=i;
    alert(sum);
}


//6)Напишите бесконечный цикл, который прерывается при помощи команды break, когда Math.random() > 0.9. Выведите в окно alert случайное число, прервавшее цикл, и количество итераций цикла.

let i = 0;
while (true){
    let a = Math.random();
    i++;
    if (a > 0.9){
        alert('случайное число, прервавшее цикл ' + a);
        alert('количество итераций '+ i);
        break;
    }
}


//7)Используя вложенные циклы, распечатайте в консоли значения таблицы умножения: 1х1=1, 1x2=2 ... 2x1=2, 2x2=4...

for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        console.log(i + ' x ' + j + ' = ' + i * j);
    }
}


//8)С помощью цикла for с пустым телом сформируйте строку, представляющую из себя ряд Фибоначчи: 0 1 1 2 3 5 8 13...

let str='';
let fn1 = 0;
let fn2 = 1;
let fn = fn1 + fn2;
for (let i = 0; i <= 10; str += fn1 + "  ", fn = fn1 + fn2, fn1 = fn2, fn2 = fn, i++);
    console.log(str);


//9) Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до тех пор, пока не будет нажата Отмена. После выхода из цикла распечатайте количество введенных чисел, их общую сумму и среднее арифметическое.

let ask;
let i = -1;
let sum = 0;
do{
    ask = +prompt('Enter your number');
    i++;
    sum+=ask;
}
while (ask);
alert('quantity:' + i + 'summa' + sum + ' sr arifm ' + sum/i);


//10)Напишите проверку пароля, введенного пользователем (заведомо определите пароль). Если введенный пароль правильный, то программа выдает сообщение “Вы успешно авторизованы”. Если пароль неправильный, программа снова выдает запрос пароля – до тех пор, пока пользователь не введет правильный пароль или не нажмет Отмена. В случае отмены авторизации, выдать окно подтверждения с текстом: “Вы уверены, что хотите отменить авторизацию?”. Если ответ утвердительный, тогда выдать сообщение “Вы отменили авторизацию”, если ответ отрицательный, тогда снова выдать запрос пароля


const pass = 'javaScript';
let ask ='';
do{
    ask = prompt('Введите Ваш пароль');
    if(ask===null){
     let x =   confirm('Вы уверены, что хотите отменить авторизацию?');
     if(x===true){
         alert('Вы отменили авторизацию');
         break;
     } else {
         ask = prompt('Введите Ваш пароль');
     }
    }
}
 while (pass!==ask);


//11) Напишите цикл от 1 до 50, в котором будет выводиться поочередно числа от 1 до 50, но есть условия:
//
// - если число делится на 3 без остатка, то выводить не это число, а слово «Fizz»;
// - если число делится на 5 без остатка, то выводить не это число, а слово «Buzz»;
// - если число делится и на 3 и на 5 без остатка, то выводить не это число, а слово «FizzBuzz»;

for (let i = 1; i <= 50; i++){
    if (i%3 === 0 && i%5 === 0){
        console.log('FizzBuzz');
    } if (i%3 === 0){
        console.log('Fizz');
    } if (i%5 === 0){
        console.log('Buzz');
    } else {
        console.log(i);
    }
}













