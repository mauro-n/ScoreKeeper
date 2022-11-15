let score1 = 0;
let score2 = 0;

const p1btn = document.querySelector('#p1btn');
const p2btn = document.querySelector('#p2btn');
const resetBtn = document.querySelector('#reset')

const placar1 = document.querySelector('#scorep1');
const placar2 = document.querySelector('#scorep2');
const options = document.querySelectorAll('option');
const currentOpt = () => {
    for (let i = 0; i<options.length; i++){
        if (options[i].selected == true){
            return options[i]
        }
        return console.log('no options')
    }
}


placar2.innerText = score2;

const p1Point = () => {
    score1 ++;
    placar1.innerText = score1;

}
const p2Point = () => {
    score2 ++;
    placar2.innerText = score2;

}

const reset = () => {
    score1 = 0, score2 = 0;
    placar1.innerText = score1;
    placar2.innerText = score2;
}


p1btn.addEventListener('click', p1Point);
p2btn.addEventListener('click', p2Point);
resetBtn.addEventListener('click', reset);

