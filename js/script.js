let loadingText = document.getElementById('loading-text');

var audioBell = document.getElementById("ArcadeAudio");

// Fullscreen functions.
function goFullscreen() {
    // Must be called as a result of user interaction to work
    mf = document.getElementById("main_frame");
    mf.webkitRequestFullscreen();
    mf.style.display="";
}
function fullscreenChanged() {
    if (document.webkitFullscreenElement == null) {
        mf = document.getElementById("main_frame");
        mf.style.display="none";
    }
}

//continueToNextPage gets called when the user interacts with the screen after the loading anim is done.
function continueToNextPage(){
    const element1 = document.querySelector('#PinkFlower');
    const element2 = document.querySelector('#loading-screen');

    const opacityFrames = {opacity: [1, 0]};
    const anim = element1.animate(opacityFrames, 3000)
    element2.animate(opacityFrames, 3000)
    audioBell.play()

    anim.addEventListener("finish", (event) => {
        goFullscreen();
    });
}

function textAnim(){
    if (loadingText.textContent == 'Loading.'){
        loadingText.textContent = 'Loading..';
    } else if (loadingText.textContent == 'Loading..'){
        loadingText.textContent = 'Loading...';
    } else if (loadingText.textContent == 'Loading...'){
        loadingText.textContent = 'Loading.';
    }
}

function waitForUserInter(){
    clearInterval(loadingTextAnimId) // Stops the text loading animation
    loadingText.textContent = 'Toca para continuar uwu ';

    document.onwebkitfullscreenchange = fullscreenChanged;

    document.documentElement.onclick = continueToNextPage;
    document.onkeydown = continueToNextPage;
}

const loadingTextAnimId = setInterval(textAnim, 500);

// wait and then stop the loading animation to continue with the interactions
setTimeout(waitForUserInter, 8000);
