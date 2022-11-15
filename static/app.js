const winningSelect = document.querySelector('#playTo');
let winningScore = parseInt(winningSelect.value);
let isGameOver = false;
const resetBtn = document.querySelector('#reset')

p1.button.addEventListener('click', function(){
    updateScores(p1, p2);
});
p2.button.addEventListener('click', function(){
    updateScores(p2, p1);
});
resetBtn.addEventListener('click', function(){
    reset(p1);
    reset(p2);
});

winningSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value)
    reset(p1)
    reset(p2)
});

