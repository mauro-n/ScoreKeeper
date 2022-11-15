function reset() {
    score1 = 0, score2 = 0;
    placar1.innerText = score1;
    placar2.innerText = score2;
    isGameOver = false;
    for (let i=0; i<allBtn.length;i++){
        allBtn[i].disabled = false;
    }
    placar1.classList.remove('winner', 'looser')
    placar2.classList.remove('winner', 'looser')
}

function p2btnfunc () {
    if (!isGameOver) {
        score2++;
        placar2.innerText = score2;
        if (score2 == winningScore) {
            isGameOver = true;
            placar2.classList.add('winner')
            placar1.classList.add('looser')
            for (let i=0; i<allBtn.length-1;i++){
                allBtn[i].disabled = true;
            }
        }
    }
}

function p1btnfunc() {
    if (!isGameOver) {
        score1++;
        placar1.innerText = score1;
        if (score1 == winningScore) {
            isGameOver = true;
            placar1.classList.add('winner')
            placar2.classList.add('looser')
            for (let i=0; i<allBtn.length-1;i++){
                allBtn[i].disabled = true;
            }
        }
    }
}

function changeOpt() {
    winningScore = parseInt(this.value)
    reset();
}