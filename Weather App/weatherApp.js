const container = document.getElementsByClassName('container')[0],
    inputPart = document.querySelector('.inputPart'),
    infoTxt = document.querySelector('.infoTxt'),
    inputField = document.querySelector('input'),
    locationBtn = document.getElementById('getLocation'),
    wIcon = document.querySelector('.weatherPart img');

let apiKey = `dc34bebaa11536bf15c239e25e41db03`;

inputField.addEventListener('keyup', e => {
    // console.log(e.key);
    if (e.key == 'Enter' && inputField.value != "") {
        requestApi(inputField.value);
    }
})

locationBtn.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
    else {
        alert('Your borwser not support geolocation api');
    }
})

function onSuccess(position) {
    // console.log(position.coords);
    let { latitude, longitude } = position.coords;
    // console.log(latitude);
    // console.log(longitude);
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${apiKey}`;
    fetchData(api);
}


function onError(error) {
    console.log(error);
    infoTxt.innerText = error.message;
    infoTxt.classList.add('error');
}





function requestApi(cityName) {
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${apiKey}`;
    fetchData(api);
}

function fetchData(api) {
    infoTxt.innerText = 'Getting weather details...';
    infoTxt.classList.add('pending');

    fetch(api).then(response => response.json()).then(result => weatherDetails(result));
}


function weatherDetails(info) {
    console.log(info)
    infoTxt.classList.replace('pending', 'error');
    if (info.cod == '404') {
        infoTxt.innerText = `${inputField.value} isn't a valid city name`;
    }
    else {
        const city = info.name;
        const country = info.sys.country;
        const { description, id } = info.weather[0];
        const { feels_like, humidity, temp } = info.main;

        if (id == 800) {
            wIcon.src = 'icons/clear.svg';
        }
        else if (id >= 200 && id <= 232) {
            wIcon.src = 'icons/strom.svg';
        }
        else if (id >= 600 && id <= 622) {
            wIcon.src = 'icons/snow.svg';
        }
        else if (id >= 701 && id <= 781) {
            wIcon.src = 'icons/haze.svg';
        }
        else if (id >= 800 && id <= 804) {
            wIcon.src = 'icons/cloud.svg';
        }
        else if ((id >= 300 && id <= 321) || (id >= 500 && id <= 531)) {
            wIcon.src = 'icons/rain.svg';
        }

        document.getElementsByClassName('temp')[0].children[0].innerText = Math.floor(temp);
        document.getElementsByClassName('weather')[0].innerText = description;
        document.getElementsByClassName('location')[0].children[1].innerText = `${city}, ${country}`;
        document.getElementsByClassName('temp')[1].children[0].innerText = Math.floor(feels_like);
        document.getElementsByClassName('details')[1].children[0].innerText = `${humidity}%`

        infoTxt.classList.remove('pending', 'error');
        container.classList.add('active');
    }
}


document.getElementsByClassName('backBtn')[0].addEventListener('click', () => {
    container.classList.remove('active');
    inputField.value = ``;
})



