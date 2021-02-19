// Class tasks

// task 1

const oleh = 'oleh';
const Oleh = 'Oleh';

console.log(oleh.toLowerCase() === Oleh.toLowerCase());

// task 2

const vegetables = 'carrot, potato, beet';

const vegArr = vegetables.split(', ');
console.log(vegArr);
console.log(vegArr.join(', '));

// task 3

const firstValue = confirm('Your firt time, good luck') ? Math.floor(Math.random() * 6) + 1 : alert('Go home');
const secondValue = confirm('Your second time, good luck') ? Math.floor(Math.random() * 6) + 1 : alert('Go home');
const sumValue = firstValue + secondValue 
sumValue === 12 
? alert('jackpot')
: alert(sumValue)

// task 4

const firstUserValue = +prompt('Your first value')
const secondUserValue = +prompt('Your second, bigger value')
alert(Math.floor((Math.random() * (secondUserValue - firstUserValue + 1)) + firstUserValue))

// task 5

const users = [
    {
        name: 'Dima',
        age: '18',
        hobby: ['gitar', 'piano']
    },
    {
        name: 'Dave',
        age: '21',
        hobby: 'tenis'
    },
    {
        name: 'Steave',
        age: '25',
        hobby: ['singing', 'football']
    }
];

// homeWork 

// task 1

//done :)

// task 2

let userFunds = prompt('How much money ( in uah) do you want to convert?');

let eur = 33.65;
let usd = 27.84;
let brent = usd * 64;
let gold = 1735;

if (!userFunds || Number.isNaN(userFunds) || !(isFinite(userFunds))) {
    userFunds = prompt('Pls, input a number')
} else {
    alert(`You will have ${(userFunds / eur).toFixed(2)} in eur`);
    alert(`You will have ${(userFunds / usd).toFixed(2)} in usd`);
    alert(`You will have ${(userFunds / brent).toFixed(3)} brent features`);
    alert(`You will have ${(userFunds / gold).toFixed(4)} grams of gold`);
};
 

// task 3

const orderAmount = +prompt('Input please your order amount value');

if (orderAmount < 500 && orderAmount > 0 ) {
    alert(`Your discaunt is 1% (${orderAmount * 0.01})`)
} else if (orderAmount >= 500 && orderAmount < 1000) {
    alert(`Your discaunt is 5% (${orderAmount * 0.05})`)
} else if (orderAmount >= 1000) {
    alert(`Your discaunt is 10% (${orderAmount * 0.1}) and you will receive additional 200uah`)
} else alert('Pls, buy smth first')

// task 4

let userPoints = 0;

alert('We will play a game where we will see how lucky are you, all that you need is to bet on lesser number or higher')

const firstTry = +confirm('The value can be from 5 to 10\n More then 5?');

if (Math.floor((Math.random() * (10)) + 1 ) > 5 && firstTry === 1) {
    alert('Well done + 1')
    userPoints++; 
} else if (Math.floor((Math.random() * (10)) + 1 ) <= 5 && firstTry === 0) {
    alert('Well done + 1')
    userPoints++; 
} else alert('Oops')

const secondTry = +confirm('More then 5?');

if (Math.floor((Math.random() * (10)) + 1 ) > 5 && secondTry === 1) {
    alert('Well done + 1')
    userPoints++; 
} else if (Math.floor((Math.random() * (10)) + 1 ) <= 5 && secondTry === 0) {
    alert('Well done + 1')
    userPoints++; 
} else alert('Oops')

const thirdTry = +confirm('More then 5?');

if (Math.floor((Math.random() * (10)) + 1 ) > 5 && thirdTry === 1) {
    alert('Well done + 1')
    userPoints++; 
} else if (Math.floor((Math.random() * (10)) + 1 ) <= 5 && thirdTry === 0) {
    alert('Well done + 1')
    userPoints++; 
} else alert('Oops')

const fourthTry = +confirm('More then 5?');

if (Math.floor((Math.random() * (10)) + 1 ) > 5 && fourthTry === 1) {
    alert('Well done + 1')
    userPoints++; 
} else if (Math.floor((Math.random() * (10)) + 1 ) <= 5 && fourthTry === 0) {
    alert('Well done + 1')
    userPoints++; 
} else alert('Oops')

const fifthTry = +confirm('More then 5?');

if (Math.floor((Math.random() * (10)) + 1 ) > 5 && fifthTry === 1) {
    alert('Well done + 1')
    userPoints++; 

} else if (Math.floor((Math.random() * (10)) + 1 ) <= 5 && fifthTry === 0) {
    alert('Well done + 1')
    userPoints++; 
} else alert('Oops')

userPoints === 5 ? alert('Jackpot') : alert(`Your score = ${userPoints}`); 

// task 5

const userNumber = prompt('Input your three-digit number');

if (userNumber[0] === userNumber [1] || userNumber[0] === userNumber[2] || userNumber[1] === userNumber[2]) {
    alert('There are the same digits')
} else alert('the number doesn\'t have the same digits')

// task 6

const userKey = prompt('Type a key from 1 to = pls');

if (+userKey === 1) {
    alert('!');
} else if (+userKey === 2) {
    alert('@');
} else if (+userKey === 3) {
    alert('#');
} else if (+userKey === 4) {
    alert('$');
} else if (+userKey === 5) {
    alert('%');
} else if (+userKey === 6) {
    alert('^');
} else if (+userKey === 7) {
    alert('&');
} else if (+userKey ===8) {
    alert('*');
} else if (+userKey === 9) {
    alert('(');
} else if (+userKey === 0) {
    alert(')');
} else if(userKey === '-') {
    alert('_');
} else if (userKey === '=') {
    alert('+');
} else alert('It\'s not the key between 1 and =')