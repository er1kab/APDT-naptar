let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const lightPic = "media/insta fekete.png "
const darkPic = "media/insta feher.png"

function updateAllImages(isDark) {
    document.querySelectorAll('.instalogo').forEach(img => {
        img.src = isDark ? darkPic : lightPic;

    });

}

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    
    localStorage.setItem('darkmode', 'active')
    updateAllImages(true);
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
   
    localStorage.setItem('darkmode', null)
    updateAllImages(false);

}

if (darkmode === "active") enableDarkmode()


themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
});







const audioButton = document.getElementById("audio");
const bgm = document.getElementById("bgm");



function fadeIn(audio, duration = 1000) {
    audio.volume = 0;
    audio.play();

    let step = 50 / duration; // how much to increase per frame

    let fade = setInterval(() => {
        if (audio.volume < 1) {
            audio.volume = Math.min(audio.volume + step, 1);
        } else {
            clearInterval(fade);
        }
    }, 50);
}

function fadeOut(audio, duration = 1000) {
    let step = 50 / duration;

    let fade = setInterval(() => {
        if (audio.volume > 0) {
            audio.volume = Math.max(audio.volume - step, 0);
        } else {
            clearInterval(fade);
            audio.pause();
        }
    }, 50);
}

audioButton.addEventListener("click", () => {
    if (bgm.paused) {
        fadeIn(bgm, 800);
        audioButton.classList.add("playing");   // switch icon ON
    } else {
        fadeOut(bgm, 800);
        audioButton.classList.remove("playing"); // switch icon OFF
    }
});