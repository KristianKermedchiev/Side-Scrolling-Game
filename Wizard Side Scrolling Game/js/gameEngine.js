
function start(state, game){
    game.createWizard(state);
    window.requestAnimationFrame(gameLoop.bind(null, state, game));
};


function gameLoop(state, game, timeStamp){
    let { wizard } = state;
    let { wizardElement } = game;
    console.log('gameLoop')

    modifyWizardPosition(state, game);

    if(state.keys.Space){
        game.wizardElement.style.backgroundImage = "url('./resources/wizard-fire.png')";
        game.createFireball(wizard, state.fireball);
    } else {
        game.wizardElement.style.backgroundImage = "url('./resources/wizard.png')";
    }

    let bugsElement = document.querySelectorAll('.bugs');
    // fireball render
    document.querySelectorAll(".fireball").forEach(fireball => {
        let fireballLeft = parseInt(fireball.style.left);
       bugsElement.forEach(bug => {
            if (detectCollision(fireball, bug)){
                bug.remove();
                fireball.remove();
            }
        });
        if (fireballLeft > document.body.clientWidth - 45){
            fireball.remove()
        } else {
            fireball.style.left = fireballLeft + state.fireball.speed + 'px';
        };
    });

    if(timeStamp > state.bug.durationBug){
        game.createBug(state.bug);
        state.bug.durationBug += 2000;
    }

    // move bug
    document.querySelectorAll('.bugs').forEach(bug => {
        let bugLeft = parseInt(bug.style.left);
        if (detectCollision(bug, wizardElement)){
            alert('Game Over');
            state.gameOver = true;
        }
        if (bugLeft < 0){
            bug.remove();
            alert('Game Over');
            state.gameOver = true;
        } else {
            bug.style.left = bugLeft - state.bug.speed + 'px';
        }
    });

    // render wizard
    wizardElement.style.top = wizard.posY + 'px';
    wizardElement.style.left = wizard.posX + 'px';
    if (this.gameOver){
        return;
    }
    window.requestAnimationFrame(gameLoop.bind(null, state, game));
};

function modifyWizardPosition(state, game){
    let { wizard } =  state;

    if (state.keys.ArrowUp){
        wizard.posY = Math.max(wizard.posY - wizard.speed, 0);
    };
    if (state.keys.ArrowDown){
        wizard.posY = Math.min(wizard.posY + wizard.speed, document.body.clientHeight - wizard.height);
    };
    if (state.keys.ArrowLeft){
        wizard.posX = Math.max(wizard.posX - wizard.speed, 0);
    };
    if (state.keys.ArrowRight){
        wizard.posX = Math.min(wizard.posX + wizard.speed, document.body.clientWidth - wizard.width);
    };
};

function detectCollision(objectA, objectB){
    let firstObj = objectA.getBoundClientRect();
    let secondObj = objectB.getBoundClientRect();

    let hasCollision = !(firstObj.top > secondObj.bottom || firstObj.bottom < secondObj.top || 
        firstObj.right < secondObj.left || firstObj.left > secondObj.right);
    return hasCollision;
    
};