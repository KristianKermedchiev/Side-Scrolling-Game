function initState(){
    const startX = Math.floor(Math.random() * 500);
    const startY = Math.floor(Math.random() * 500);

    const state = {
        player: 'Kristian',
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
            speed: 6,
        },
        fireball: {
            width: 20,
            height: 20,
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