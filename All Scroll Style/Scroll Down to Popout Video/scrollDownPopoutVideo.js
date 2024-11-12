let container = document.querySelector('.container');
let video = document.querySelector('.video');
let videoHeight = video.clientHeight;
let show = container.style.height = videoHeight + 'px';
let popOut = true;
console.log('videoheight = ' + show);

window.onscroll = () => {
    if(window.scrollY > videoHeight){
        if(popOut){
            video.classList.add('popout');
            video.style.bottom = -videoHeight + 'px'
            console.log(video.classList);
        }
    }
    else{
        video.classList.remove('popout');
        video.style.bottom = '0px'
        
    }
}