let state = initState();
let game = initGameObject();

const availableKeys = [
    'KeyW',
    'KeyS',
    'KeyA',
    'KeyD',
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'Space'
]

document.addEventListener('keydown', (e) => {
    if(availableKeys.includes(e.code)){
        state.keys[e.code] = true;
    }
});

document.addEventListener('keyup', (e) => {
    if(availableKeys.includes(e.code)){
        state.keys[e.code] = false;
    }
});

game.startScreen.addEventListener('click', (e) => {
    game.startScreen.classList.add('hidden');
    game.gameScreen.classList.remove('hidden');

    // Start game;
    start(state, game);
});
