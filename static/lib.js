p1 = {
    score: 0,
    button: document.querySelector('#p1btn'),
    placar: document.querySelector('#scorep1'),

}
p2 = {
    score: 0,
    button: document.querySelector('#p2btn'),
    placar: document.querySelector('#scorep2'),

}
function reset(player) {
    player.score = 0;
    player.placar.innerText = 0;
    isGameOver = false;
    player.button.disabled = false;
    player.placar.classList.remove('winner', 'looser');
}
function updateScores(player, opponent){
    if (!isGameOver){
        player.score += 1;
        player.placar.innerText = player.score;
        if (player.score == winningScore){
            isGameOver = true;
            player.placar.classList.add('winner');
            opponent.placar.classList.add('looser');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
}