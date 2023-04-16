function initState(){
    const startX = Math.floor(Math.random() * 500);
    const startY = Math.floor(Math.random() * 500);

    const state = {
        player: 'Kristian',
        gameOver: false,
        score: 0,
        scoreRate: 1,
        killScore: 1000,
        wizard: {
            width: 82,
            height: 100,
            posX: startX,
            posY: startY,
            speed: 10
        },
        bugStats: {
            width: 50,
            height: 50,
            nextSpawnTimeStamp: 0,
            maxSpawnInterval: 1500,
            speed: 3,
        },
        fireball: {
            width: 20,
            height: 20,
            speed: 8,
            nextSpawnTimestamp: 0,
            fireRate: 500,
        },
        keys: {
            KeyA: false,
            KeyS: false,
            KeyD: false,
            KeyW: false,
            ArrowUp: false,
            ArrowDown: false,
            ArrowLeft: false,
            ArrowRight: false,
            Space: false,
        },
    }

    return state;
}