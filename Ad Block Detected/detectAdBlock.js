//These are some possible classes that adblocker avoid to render.
let adClasses = ['ad', 'ads', 'adsbox','ad-placement','doubleclick', 'ad-placeholder', 'ad-badge'];

const detect = document.querySelector('#detect');
const container = document.querySelector('.container');


for(let item of adClasses){
    detect.classList.add(item);
}

let getProperty = window.getComputedStyle(detect).getPropertyValue('display');

getProperty == 'none' ? container.classList.add('show') : container.classList.remove('show');



