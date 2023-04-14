
function initState(){
    let posY = Math.floor(Math.random() * 800).toString();

    return {
        player: '',
        scor: 0,
        wizard: {
            width: '82px',
            height: '100px',
            top: posY,

        }
    };
};