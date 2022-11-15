let score1 = 0;
let score2 = 0;

const options = document.querySelectorAll('option');
const winningSelect = document.querySelector('#playTo');

let winningScore = parseInt(winningSelect.value);
let isGameOver = false;

const p1btn = document.querySelector('#p1btn');
const p2btn = document.querySelector('#p2btn');
const resetBtn = document.querySelector('#reset')
const allBtn = document.querySelectorAll('button');

const placar1 = document.querySelector('#scorep1');
const placar2 = document.querySelector('#scorep2');

p1btn.addEventListener('click', p1btnfunc);
p2btn.addEventListener('click', p2btnfunc);
resetBtn.addEventListener('click', reset);
winningSelect.addEventListener('change', changeOpt);

