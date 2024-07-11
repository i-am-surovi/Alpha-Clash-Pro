// function play(){
//     // step-1: hide the home screen by adding class hidden to the home section
//     const homeSection = document.getElementById("home-screen");
//     // add hidden in array like object of js
//     homeSection.classList.add('hidden');

//     // show the playground
//     const playgroundSection = document.getElementById("play-ground");
//     // remove hidden class from the classlist
//     playgroundSection.classList.remove('hidden')

// }


function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log("player pressed",playerPressed);

    // quit/stop the game if player pressed Esc
    if(playerPressed === 'Escaped'){
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById("current-alphabet");
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed ,currentAlphabet);

    // check right or wrong key pressed
    if(playerPressed === expectedAlphabet){
        console.log("You got a point!");

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

        // // Update Score:
        // // 1. get the current score
        // const currentScoreElement = document.getElementById("current-score");
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // // 2. increase the score by 1
        // const newScore = currentScore + 1;
        // // 3. show the updated score
        // currentScoreElement.innerText = newScore;

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log("Opps!! You Pressed the Wrong Key. Try again")
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife); 

        // Game Over
        if(updatedLife === 0){
            gameOver();
        }
        
        
        // // Update Life Count
        // // 1. get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // 2. reduce the life number
        // const newLife = currentLife - 1;
        // // 3. display the updated life number
        // currentLifeElement.innerText = newLife;
    } 
}

// Capture keyboard key press 
document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame(){
    // step-1: generate a random alphabet
    const randomAlphabet = getARandomAlphabet();
    console.log("Your Random alphabet is",randomAlphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById("current-alphabet");
    currentAlphabetElement.innerText = randomAlphabet;

    // set background color to keyboard key
    setBackgroundColorById(randomAlphabet);
}


function play(){
    // hide everything and show only the playground
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');
    // reset score and Life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    // 1. get the last score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);

    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}