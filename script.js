// ! Declatations

const bet10 = document.querySelector('.bet10');
const bet20 = document.querySelector('.bet20');
const bet50 = document.querySelector('.bet50');
const bet100 = document.querySelector('.bet100');
const odd = document.querySelector('.odd');
const even = document.querySelector('.even');
const tg25 = document.querySelector('.tg25');
const ts25 = document.querySelector('.ts25');
const mymoney = document.querySelector('.mymoney');
let mywin = document.querySelector('.mywin');
mywin.textContent = 0;
// console.log(typeof mywin.textContent);
const cont1 = document.querySelector('.cont1');
const cont2 = document.querySelector('.cont2');

const value = document.querySelector('.value');
const bet = document.querySelector('.bet');
const instructions = document.querySelector('.instructions');
const play = document.querySelector('.play');
let winlose = document.querySelector('.winlosetext');
let insbook = document.querySelector('.insbook');
let rules = document.querySelector('.rules');
let overlay = document.querySelector('.overlay');
let closemodal = document.querySelector('.closemodal');
const reset = document.querySelector('.reset');



// console.log(bet20, bet50, bet100, odd, even, prime, mymoney, mywin);
const b10 = 10;
const b20 = 20;
const b50 = 50;
const b100 = 100;
let select = '';
let price = ''
// let select = "";
// console.log(select);
bet10.addEventListener('click', function () {
    price = 10;
    // const select = b20;
    value.textContent = b10;
    // instructions.textContent = 'Now Predict The Number'
    cont1.classList.remove('hidden')

    // mymoney.textContent -= b20;
})
bet20.addEventListener('click', function () {
    price = 20;
    // const select = b20;
    value.textContent = b20;
    // instructions.textContent = 'Now Predict The Number'
    cont1.classList.remove('hidden')

    // mymoney.textContent -= b20;
})
bet50.addEventListener('click', function () {
    price = 50;
    value.textContent = b50;
    // instructions.textContent = 'Now Predict The Number'
    cont1.classList.remove('hidden')

    // mymoney.textContent -= b50;

})
bet100.addEventListener('click', function () {
    price = 100;
    value.textContent = b100;
    // instructions.textContent = 'Now Predict The Number'
    cont1.classList.remove('hidden')

    // mymoney.textContent -= b100;

})
odd.addEventListener('click', function () {
    bet.textContent = 'ODD';
    // instructions.textContent = 'Click Play Button'
    select = 'odd'
    cont2.classList.remove('hidden')


})
even.addEventListener('click', function () {
    select = 'even'
    bet.textContent = 'EVEN';
    // instructions.textContent = 'Click Play Button'
    cont2.classList.remove('hidden')


})
tg25.addEventListener('click', function () {
    bet.textContent = '>25';
    // instructions.value = 'Click Play Button'
    select = '>25'
    cont2.classList.remove('hidden')


});
ts25.addEventListener('click', function () {
    bet.textContent = '<25';
    // instructions.value = 'Click Play Button'
    select = '<25'
    cont2.classList.remove('hidden')


});

let number = document.querySelector('.number');
const letplay = play.addEventListener('click', function () {
    if (Number(mymoney.textContent) >= Number(value.textContent)) {
        let randomnum = Math.round(Math.random() * 50 + 1);
        number.textContent = randomnum;
        if (bet.textContent == '' || value.textContent == '') {
            instructions.textContent = 'Please select input first'
            Number(mymoney.textContent) += price;
        } else {
            instructions.textContent = '';
        }


        // If num = odd
        if (randomnum % 2 == 0 && select == 'even') {
            console.log('Even number');
            mywin.textContent = Number(mywin.textContent) + price * 2;
            winlose.textContent = '🏆 Win'


        } else if (randomnum % 2 != 0 && select == 'odd') {
            console.log('Odd Number');
            mywin.textContent = Number(mywin.textContent) + price * 2;
            winlose.textContent = '🏆 Win'

        } else if (randomnum > 25 && select == '>25') {
            console.log('> 25');
            mywin.textContent = Number(mywin.textContent) + price * 2;
            winlose.textContent = '🏆 Win'

        }
        else if (randomnum < 25 && select == '<25') {
            console.log('< 25');
            mywin.textContent = Number(mywin.textContent) + price * 2;
            winlose.textContent = '🏆 Win'

        } else {
            winlose.textContent = '😓 Better Luck Next Time'
            mymoney.textContent -= price;

        }
        if (mymoney.textContent <= 0) {
            winlose.textContent = 'Game Over'
        }

    } else {
        winlose.textContent = '😓 You dont have enough money'
    }

})



reset.addEventListener('click', function () {
    mywin.textContent = 0;
    winlose.textContent = ''
    bet.textContent = '';
    value.textContent = '';
    number.textContent = '';
    mymoney.textContent = 200;
})
insbook.addEventListener('click', function () {
    console.log('clicked');
    rules.classList.remove('hidden');
    overlay.classList.remove('hidden');
})
overlay.addEventListener('click', function () {
    rules.classList.add('hidden');
    overlay.classList.add('hidden');
})
closemodal.addEventListener('click', function () {
    rules.classList.add('hidden');
    overlay.classList.add('hidden');
})

// Game Over








