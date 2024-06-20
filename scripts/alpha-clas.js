function play(){
    // step-1: hide the home screen by adding class hidden to the home section
    const homeSection = document.getElementById("home-screen");
    // add hidden in array like object of js
    homeSection.classList.add('hidden');

    // show the playground
    const playgroundSection = document.getElementById("play-ground");
    // remove hidden class from the classlist
    playgroundSection.classList.remove('hidden')

}