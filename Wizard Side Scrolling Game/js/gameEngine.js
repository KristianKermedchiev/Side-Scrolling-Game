function start(state, game){
    game.createWizard(state.wizard);

    window.requestAnimationFrame(gameLoop.bind(null, state, game));
};

function gameLoop(state, game){
    const { wizard } = state;
    const { wizardElement } = game;


    // Move wizard
    if (state.keys.KeyD || state.keys.ArrowRight){
        console.log('D', 'Right')
        wizard.posX += wizard.speed;
    };

    if (state.keys.KeyW || state.keys.ArrowUp){
        wizard.posY -= wizard.speed;
    };

    if (state.keys.KeyA || state.keys.ArrowLeft){
        wizard.posX -= wizard.speed;
    };

    if (state.keys.KeyS || state.keys.ArrowDown){
        wizard.posY += wizard.speed;
    };

    // Render
    wizardElement.style.left = wizard.posX + 'px';
    wizardElement.style.top = wizard.posY + 'px';

    window.requestAnimationFrame(gameLoop.bind(null, state, game));
};