
(function abc() {
    var time = new Date();
    let hr = time.getHours() / 12 * 360 + time.getMinutes() / 60 *6;
    let min = time.getMinutes() /60 *360 + time.getSeconds() / 60 * 6;
    let sec = time.getSeconds() / 60 * 360;
    
    let animation = [
        `
        @keyframes sec_hand{
            from{transform: rotate(${sec}deg);}
            to{transform: rotate(${sec + 360}deg);}
        }
        @keyframes min_hand{
            from{transform: rotate(${min}deg);}
            to{transform: rotate(${min + 360}deg);}
        }
        @keyframes hour_hand{
            from{transform: rotate(${hr}deg);}
            to{transform: rotate(${hr + 360}deg);}
        }
        
        `
    ].join('');
    document.querySelector('#clock-animate').innerHTML = animation;
})();
