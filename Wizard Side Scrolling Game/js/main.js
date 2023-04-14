document.getElementById('startGame').addEventListener('click', startGame);
let startScreen = document.getElementsByClassName('start-game')[0];
let playScreen = document.getElementsByClassName('play-game')[0];
let state = initState();
let game = prepareGame();

document.addEventListener('keyup', keyUpFunc);
document.addEventListener('keydown', keyDownFunc);

function keyUpFunc(e){
    console.log('up')
}

function keyDownFunc(e){
    console.log('up')
}

function startGame(e){
    startScreen.style.display = 'none';
    playScreen.style.display = 'block';

    start(state, game);

}