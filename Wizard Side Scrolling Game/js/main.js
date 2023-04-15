document.getElementById('startGame').addEventListener('click', startGame);
let startScreen = document.getElementsByClassName('start-game')[0];
let playScreen = document.getElementsByClassName('play-game')[0];
let state = initState();
let game = prepareGame();

document.addEventListener('keyup', keyUpFunc);
document.addEventListener('keydown', keyDownFunc);

let availableCode = [
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'Space',
]


let spacePressed = false;

function keyDownFunc(e) {
    if (availableCode.includes(e.code)) {
        if (e.code === 'Space' && !spacePressed) {
            state.keys['Space'] = true;
            spacePressed = true;
            e.preventDefault(); // prevent the default behavior of the Space key
        } else if (e.code !== 'Space') {
            state.keys[e.code] = true;
        }
    }
}

function keyUpFunc(e) {
    if (availableCode.includes(e.code)) {
        if (e.code === 'Space') {
            spacePressed = false;
        }
        state.keys[e.code] = false;
    }
}

// function keyUpFunc(e){
//    if(availableCode.includes(e.code)){
//         state.keys[e.code] = false;
//    }
// }

// function keyDownFunc(e){
//     if(availableCode.includes(e.code)){
//         state.keys[e.code] = true;
//    }
// }

function startGame(e){
    startScreen.style.display = 'none';
    playScreen.style.display = 'block';

    start(state, game);

}