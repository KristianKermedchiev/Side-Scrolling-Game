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
        keys: {},
    }

    return state;
}