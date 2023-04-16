// const startX = Math.floor(Math.random() * 800);
const startY = Math.floor(Math.random() * 500);

function initState(){
    const state = {
        player: 'Kristian',
        wizard: {
            width: 82,
            height: 100,
            startX: 0,
            startY,
        },
        keys: {},
        
    }

    return state;
}