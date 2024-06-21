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


function continueGame(){
    // step-1: generate a random alphabet
    const randomAlphabet = getARandomAlphabet();
    console.log(randomAlphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById("current-alphabet");
    currentAlphabetElement.innerText = randomAlphabet;

    // set background color to keyboard key
    setBackgroundColorById(randomAlphabet);
}


function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}