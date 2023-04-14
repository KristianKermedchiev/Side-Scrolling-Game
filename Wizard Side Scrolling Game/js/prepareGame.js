function prepareGame(){
    let playScreen = document.getElementsByClassName('play-game')[0];

    return {

        createWizard(initState){
            let wizardElement = document.createElement('div');
            wizardElement.style.backgroundImage = "url('./resources/wizard.png')",
            wizardElement.style.position = 'absolute';
            wizardElement.style.width = initState.wizard.width;
            wizardElement.style.height = initState.wizard.height;
            wizardElement.style.top = initState.wizard.top + 'px';
            playScreen.appendChild(wizardElement);
        }
    };
};