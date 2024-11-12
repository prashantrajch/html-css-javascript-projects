let allMusic = [
    {
        songName: 'On My Way',
        artist: 'Alan Walker',
        img: './Photo/On My Way.jpg',
        song: './Song/On My Way.mp3'
    },
    {
        songName: 'On and On',
        artist: 'Daniel Levi',
        img: './Photo/thumbnail.jpg',
        song: './Song/On and On.mp3'
    },
    {
        songName: 'Teri Kasam',
        artist: 'Falak Shabir',
        img: './Photo/Teri Kasam.jpg',
        song: './Song/Teri Kasam.mp3'
    },
    {
        songName: 'Tu Mera Dil',
        artist: 'Falak Shabir',
        img: './Photo/Tu Mera Dil.jpg',
        song: './Song/Tu Mera Dil.mp3'
    },
    {
        songName: 'Zindagi',
        artist: 'Falak Shabir',
        img: './Photo/Zindagi.jpg',
        song: './Song/Zindagi.mp3'
    }
];

const playerBox = document.getElementsByClassName('playerBox')[0];

const musicImg = document.querySelector('img'),
    musicName = document.getElementsByClassName('name')[0],
    musicArtist = document.getElementsByClassName('artist')[0],
    mainAudio = document.getElementById('mainAudio'),
    playPauseBtn = document.getElementsByClassName('playPause')[0],
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    progressBar = document.getElementsByClassName('progressBar')[0],
    progressArea = document.getElementsByClassName('progressArea')[0],
    showMoreBtn = document.getElementById('moreMusic'),
    closeBtn = document.getElementById('close'),
    musicList = playerBox.getElementsByClassName('musicList')[0];



let musicIndex = 1;

window.addEventListener("load", () => {
    loadMusic(musicIndex);
    playingNow()

})

function loadMusic(indexNumber) {
    musicName.innerText = allMusic[indexNumber - 1].songName;
    musicArtist.innerText = allMusic[indexNumber - 1].artist;
    musicImg.src = allMusic[indexNumber - 1].img;
    mainAudio.src = allMusic[indexNumber - 1].song;

}

playPauseBtn.addEventListener('click', () => {
    const isMusicPaused = playerBox.classList.contains('paused');
    console.log(isMusicPaused);
    // if ture then call pause music
    isMusicPaused ? pauseMusic() : playMusic();
    playingNow();

});

function playMusic() {
    playerBox.classList.add('paused');
    playPauseBtn.querySelector('i').innerText = 'pause'
    mainAudio.play();
}

function pauseMusic() {
    playerBox.classList.remove('paused');
    playPauseBtn.querySelector('i').innerText = 'play_arrow'
    mainAudio.pause();
}

nextBtn.addEventListener("click", () => {
    nextMusic();
})

prevBtn.addEventListener("click", () => {
    prevMusic();
})

function nextMusic() {
    musicIndex++;
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
    playingNow();
}

function prevMusic() {
    musicIndex--;
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
    playingNow();
}


mainAudio.addEventListener('timeupdate', (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    // console.log(currentTime, duration);
    let progressWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${progressWidth}%`;

    let musicCurrentTime = playerBox.getElementsByClassName('current')[0];
    let maxDuration = playerBox.getElementsByClassName('maxDuration')[0];

    mainAudio.addEventListener('loadeddata', () => {
        let audioDuration = mainAudio.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        totalSec < 10 ? totalSec = `0${totalSec}` : totalSec = totalSec
        maxDuration.innerText = `${totalMin}:${totalSec}`;
    })

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    currentSec < 10 ? currentSec = `0${currentSec}` : currentSec = currentSec;
    musicCurrentTime.innerText = `${currentMin}: ${currentSec}`;

});


progressArea.addEventListener('click', (e) => {
    console.dir(e);
    let progressWidthVal = progressArea.clientWidth;
    let clickedOffSetX = e.offsetX;
    let songDuration = mainAudio.duration;
    mainAudio.currentTime = (clickedOffSetX / progressWidthVal) * songDuration;
    // playMusic();
})
console.dir(progressArea)

const repeatBtn = document.getElementById('repeatPlaylist');

repeatBtn.addEventListener('click', () => {
    let getText = repeatBtn.innerText;

    switch (getText) {
        case "repeat":
            repeatBtn.innerText = 'repeat_one'
            repeatBtn.setAttribute('title', 'song looped')
            break;

        case 'repeat_one':
            repeatBtn.innerText = 'shuffle'
            repeatBtn.setAttribute('title', 'playback shuffle')
            break;

        case 'shuffle':
            repeatBtn.innerText = 'repeat'
            repeatBtn.setAttribute('title', 'playlist looped')
            break;
    }
})


// afterSong end
mainAudio.addEventListener('ended', () => {
    let getText = repeatBtn.innerText;

    switch (getText) {
        case "repeat":
            nextMusic();
            break;

        case 'repeat_one':
            mainAudio.currentTime = 0;
            loadMusic(musicIndex);
            playMusic();
            break;

        case 'shuffle':
            let randIndex = Math.floor((Math.random() * allMusic.length) + 1);
            do {
                randIndex = Math.floor((Math.random() * allMusic.length) + 1);
            } while (musicIndex == randIndex);
            musicIndex = randIndex;
            loadMusic(musicIndex);
            playMusic();
            playingNow();
            break;
    }

})

console.log(musicList);
console.log(showMoreBtn);

showMoreBtn.addEventListener('click', () => {
    musicList.classList.toggle('show');
})

closeBtn.addEventListener("click", () => {
    musicList.classList.toggle('show');
})


const ulTag = playerBox.querySelector('ul');
allMusic.forEach((elem, index) => {
    let liTag = `<li liIndex=${index + 1}>
                   <div class="row">
                      <span>${elem.songName}</span>
                      <p>${elem.artist}</p>
                    </div>
                    <audio class="music${index + 1}"  src="${elem.song}"></audio>
                    <span id="music${index + 1}" class="audioDuration"></span>
                </li>
            `;

    ulTag.insertAdjacentHTML('beforeend', liTag);

    console.log(ulTag.childElementCount);
    let liAudioDuration = ulTag.querySelector(`#music${index + 1}`);
    let liAudioTag = ulTag.querySelector(`.music${index + 1}`);

    liAudioTag.addEventListener("loadeddata", () => {
        let audioDuration = liAudioTag.duration;
        let totalMin = Math.floor(audioDuration  / 60);
        let totalSec = Math.floor(audioDuration % 60);
        totalSec < 10? totalSec = `0${totalSec}` : totalSec = totalSec;
        liAudioDuration.innerText = `${totalMin}: ${totalSec}`;
        liAudioDuration.setAttribute('tDuration', `${totalMin}: ${totalSec}`);
    })

})

const allLi = document.querySelectorAll('li');

function playingNow(){

    for(let j = 0; j < allMusic.length; j++){
        let audioTag = allLi[j].querySelector('.audioDuration');

        if (allLi[j].classList.contains('playing')) {
            allLi[j].classList.remove('playing');
            let addDuration = audioTag.getAttribute('tDuration');
            audioTag.innerText = addDuration;
        }
        if(allLi[j].getAttribute('liIndex') == musicIndex){
            allLi[j].classList.add('playing');
            audioTag.innerText = 'Playing';
        }
        allLi[j].setAttribute('onclick', 'clicked(this)');
    }
}

function clicked(element){
    let getLiIndex = element.getAttribute('liIndex');
    musicIndex = getLiIndex;
    loadMusic(musicIndex);
    playMusic();
    playingNow();
}